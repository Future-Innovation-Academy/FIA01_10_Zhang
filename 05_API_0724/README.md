# 課題3 --API連携
​
## ①課題内容
 - 東京都中央区不動産の取引価格の表示
​
## ②工夫した点・こだわった点
 - 日付によってリクエストを変えること
 - Bootstrapを使用したこと
​
## ③難しかった点・次回トライしたいこと（又は機能）
 - mapの取り出しがうまくいかず、TRYしています。前回のTODOのmapの書き方でエラーが出ている。
 - もともとGraphで坪単価の推移を出したかった。
 ​
## ④質問・疑問・感想、シェアしたいこと等なんでも
 - JSにオブジェクトの概念は今まで気にしていなかったと感じました。
 - 定数のスコープの概念も大事だと考えました。


## 使用API

国土交通省の不動産取引価格情報取得API紹介ページ：
https://www.land.mlit.go.jp/webland/api.html

## エラーの情報

テンプレートリテラル使用の際に下記結果となった。
code:

```js
 `https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=${startDate['startDate']}&to=${endDate['endDate']}&area=13`
 ```

console log:

```js
https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=[object Object]&to=[object Object]&area=13
```

解決方法
code:

```js
 `https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=${startDate['startDate']}&to=${endDate['endDate']}&area=13`
 ```

