var batontext1 = "В своїй хаті своя й правда, І сила, і воля.";
var batontext2 = "Коли щось умієте, того не забувайте, а чого не вмієте — то\n" +
    "того учітесь...";
var batontext3 = "Немає магії сильнішої, ніж магія слів.\n";
var batontext4 = "Українська пісня — це бездонна душа українського\n" +
    "народу, це його слава.";
var batontext5 = "Відчуваю й усвідомлюю, яка це красива й легка українська\n" +
    "мова.";

var btn1 = document.getElementsByClassName("baton1")[0];
var btn2 = document.getElementsByClassName("baton2")[0];
var btn3 = document.getElementsByClassName("baton3")[0];
var btn4 = document.getElementsByClassName("baton4")[0];
var btn5 = document.getElementsByClassName("baton5")[0];

btn1.onclick = function() {
    alert(batontext1);
}
btn2.onclick = function() {
    alert(batontext2);
}
btn3.onclick = function() {
    alert(batontext3);
}
btn4.onclick = function() {
    alert(batontext4);
}
btn5.onclick = function() {
    alert(batontext5);
}