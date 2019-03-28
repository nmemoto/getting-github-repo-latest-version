# grlr (Github Repository Latest Release)
Github上でホストされているリポジトリの最新バージョンを標準出力するツール。
* 任意のリポジトリのリリースページ(`https://github.com/*/*/releases`)の1番上に表示されている最新バージョンを取得する

## 使い方
https://github.com/aws/aws-cli の最新バージョンを取得する場合、以下のように実行する
```
$ docker run --rm nmemoto/grlr aws/aws-cli   
1.16.132
```