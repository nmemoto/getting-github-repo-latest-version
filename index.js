const puppeteer = require('puppeteer');
const process = require('process')

const repo = process.argv[2]

async function getLatestVersion(page, url) {
  await page.goto(url)
  return await page.evaluate(() => document.querySelector('div.release-entry div.d-flex a').textContent.trim())
}

(async () => {
  try {
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox'
      ]
    });
    const page = await browser.newPage();
    const latestVersion = await getLatestVersion(page, `https://github.com/${repo}/releases`);
    process.stdout.write(latestVersion)
    browser.close()
  } catch (e) {
    console.log(e)
  }
})();