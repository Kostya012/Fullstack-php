# Проект Fullstack работа с файлами, БД, регистрация, авторизация

### Задание на проект

- Авторизация на сайте
- Для залогиненного пользователя форма с внесением ссылки на файл текстовый, файл csv и креды для БД
- После внесения - страничка получения и вывода данных, которая по ссылке читает данные из csv, txt и БД
- Красиво отобразить страницу, и позволить добавлять данные в любой из этих ресурсов: csv, txt или БД.

### Buttons:

```
https://getcssscan.com/css-buttons-examples
https://codepen.io/annguyn/pen/xNVprL
https://www.whitelabeldevelopers.ru/articles/20-udivitelnyix-animirovannyix-knopok-na-chistom-css
```

### Create table:

```
CREATE TABLE `a_level_nix_mysql`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` INT(1) NOT NULL,
  `hash` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
```