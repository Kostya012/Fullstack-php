<?php

/*
$date = date("d-m-Y");
echo $date;

$pattern = '/([0-9]{2})-([0-9]{2})-([0-9]{4})/';
$replacement = 'Month: $2, Day: $1, Year: $3';
echo preg_replace($pattern, $replacement, $date);
die();
*/
// Front Controller

// 1. Общие настройки
// Подключаем отображение ошибок:
ini_set('display_errors', 1);
error_reporting(E_ALL);

// 2. Подключение файлов системы
define('ROOT', dirname(__FILE__));
require_once(ROOT . '/components/Router.php');
include_once (ROOT . '/components/Db.php');
// echo ROOT;
// echo '<br />';

// 3. Установка соединения с БД

// 4. Вызов Router

$router = new Router();
$router->run();

// echo '<br />';
// echo 'Front controller';
// echo '<br />';
// echo 'Your request: ' . $_SERVER['REQUEST_URI'];
?>