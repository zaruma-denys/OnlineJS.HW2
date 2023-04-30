let login = prompt("Авторизація: введіть ім я");
if (login === "Денис") {
  let password = prompt("Введіть пароль");
  if (password === "ЛОГОС") {
    alert("Ласкаво Просимо!");
  } else if (password === null) {
    alert("Вхід скаcований");
  } else {
    alert("Пароль невірний");
  }
} else if (login === null) {
  alert("Вхід скасовано");
} else {
  alert("Я вас не знаю");
}
