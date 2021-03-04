/**
 * #02 const と let （変数を定義する）
 */

/* const */
const myname = "のぶ";

// 変数の中身をconsole.logで確認
console.log(myname);

// 変数は組み込んで文字列をつくる
console.log("私の名前は" + myname + "です。");

// テンプレートリテラルで変数を組み込む
console.log(`私の名前は${myname}です。`);

// constは書き換えができない（定数）
// myname = "のぶこ"


/* let */
let number = 123;

// 変数の中身をconsole.logで確認
console.log(number);
// 変数が数字の場合は計算される
console.log(number + 321);

// 書き換えが可能
number = 321;
console.log(number);
number = "かずとし";
console.log(number);

// 昔の変数定義の書き方
var old = "バー";
