//現在値の取得
let nowDate=new Date();
let year;
let month;
let day;
year=nowDate.getFullYear();
month=nowDate.getMonth()+1;
day=nowDate.getDate();
console.log(year+'年'+month+'月'+day+'日');