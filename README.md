# grlr (Github Repository Latest Release)
Github上でホストされているリポジトリの最新バージョンをファイル出力するツール。
* Githubの任意のリポジトリのリリースページ(`https://github.com/*/*/releases`)から最新バージョンを取得する

## 使い方
https://github.com/aws/aws-cli の最新バージョンを取得する場合、以下のように実行する
```
$ node index.js aws/aws-cli
1.16.132
```

## Dockerでの使い方
上記同じことは以下で実行できる
```
$ docker run --rm -it nmemoto/grlr aws/aws-cli   
1.16.132
```



