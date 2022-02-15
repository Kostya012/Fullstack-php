<?php

// FRONT CONTROLLER

// 1. Общие настройки
ini_set('display_errors',1);
error_reporting(E_ALL);

session_start();

// 2. Подключение файлов системы
define('ROOT', dirname(__FILE__));
// require_once(ROOT.'/components/Router.php');
// require_once(ROOT.'/components/Db.php');

// for (PHP 5, PHP 7)
// require_once(ROOT.'/components/Autoload.php');

// for (PHP 5 >= 5.1.0, PHP 7, PHP 8)
require_once(ROOT.'/components/my_autoloader.php');


// 4. Вызов Router
$router = new Router();
$router->run();
