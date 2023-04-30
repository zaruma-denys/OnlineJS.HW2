let count = 0;
let ask = prompt("У якому році Україна стала незалежною?");

if (ask === "1991") {
  count++;
}

let ask2 = prompt("Яка найкраща мова програмування?");
if (ask2.toLowerCase() === "js") {
  count++;
}

let ask3 = prompt("Як називається Основний закон України?");
if (ask3.toLowerCase() === "конституція") {
  count++;
}

let ask4 = prompt("Найдовша річка України?");
if (ask4.toLowerCase() === "дніпро") {
  count++;
}

let ask5 = prompt("Центральною геральдичною фігурою герба України є?");
if (ask5.toLowerCase() === "тризуб") {
  count++;
}

let ask6 = prompt("Ім я сестри засновників Києва?");
if (ask6.toLowerCase() === "либідь") {
  count++;
}

let ask7 = prompt("Гора – національний символ України?");
if (ask7.toLowerCase() === "говерла") {
  count++;
}
let ask8 = prompt("Ім я розробника тесту?");
if (ask8.toLowerCase() === "денис") {
  count++;
}
let ask9 = prompt("Чи Земля кругла?");
if (ask9.toLowerCase() === "так") {
  count++;
}
let ask10 = prompt("BMW/Mercedes-Benz? Відьповідь: 1 або 2.");
if (ask10 === '2') {
  count++;
}

if (count === 0) {
  alert("0/10");
}

if (count === 1) {
  alert("1/10");
}

if (count === 2) {
  alert("2/10");
}

if (count === 3) {
  alert("3/10");
}

if (count === 4) {
  alert("4/10");
}

if (count === 5) {
  alert("5/10");
}

if (count === 6) {
  alert("6/10");
}

if (count === 7) {
  alert("7/10");
}

if (count === 8) {
  alert("8/10");
}

if (count === 9) {
  alert("9/10");
}

if (count === 10) {
  alert("10/10");
}
