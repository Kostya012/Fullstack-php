<?php

// function dd($arr)
// {
//   echo '<pre>';
//   print_r($arr);
//   echo '</pre>';
// }

class Router
{
  private $routes; // массив, в котором будут храниться маршруты

  public function __construct()
  {
    $routesPath = ROOT . '/config/routes.php';
    $this->routes = include($routesPath);
  }

  /**
   * Returns request string
   * @return string
   */
  private function getURI()
  {
    if (!empty($_SERVER['REQUEST_URI'])) {
      return $uri = trim($_SERVER['REQUEST_URI'], '/');
    }
  }
  // run() отвечает за анализ запроса и передачу управления
  public function run()
  {
    // dd($this->routes);
    // echo '<br />';
    // echo 'Class Router, method run';

    // Получить строку запроса
    $uri = $this->getURI();
    // Проверить наличие такого запроса в routes.php
    foreach ($this->routes as $uriPattern => $path) {
      // Сравниваем $uriPattern и $uri
      if (preg_match("~$uriPattern~", $uri)) {
        // Определить какой контроллер и action обрабатывают запрос
        // echo '+';
        /*
        $segments = explode('/', $path);
        $controllerName = array_shift($segments) . 'Controller'; // array_shift($segments) возвращает первый элемент в массиве $segments и удаляет первый элемент из источника(массива)
        $controllerName = ucfirst($controllerName);
        // echo $controllerName;
        $actionName = 'action' . ucfirst(array_shift($segments));
        // echo '<br /> Class: ' . $controllerName; 
        // echo '<br /> Method: ' . $actionName; 
        // echo $actionName;
        // Подключить файл класса-контроллера
        $controllerFile = ROOT . '/controllers/' . $controllerName . '.php';
        if (file_exists($controllerFile)) {
          include_once($controllerFile);
        }
        //Создать объект, вызвать метод (т.е. action)
        $controllerObject = new $controllerName;
        $result = $controllerObject->$actionName();
        if ($result != null) {
          break;
        }
        */

        // 2 code
        /*
        echo '<br /> Где ищем (запрос, который набрал пользователь): ' . $uri;
        echo '<br /> Что ищем (совпадение из правил): ' . $uriPattern;
        echo '<br /> Кто обрабатывает: ' . $path;

        
        $internalRoute = preg_replace("~$uriPattern~", $path, $uri);
        echo '<br /><br />Нужно сформировать: ' . $internalRoute;
*/
        // 3 code
        // Получаем внутренний путь из внешнего согласно правилу.
        $internalRoute = preg_replace("~$uriPattern~", $path, $uri);

        // определить контроллер, action, параметры
        $segments = explode('/', $internalRoute);

        $controllerName = array_shift($segments) . 'Controller'; // array_shift($segments) возвращает первый элемент в массиве $segments и удаляет первый элемент из источника(массива)
        $controllerName = ucfirst($controllerName);

        $actionName = 'action' . ucfirst(array_shift($segments));
        // echo '<br />controller name: ' . $controllerName;
        // echo '<br />action name: ' . $actionName;
        $parameters = $segments;
        // dd($parameters);
        // die;
        // Подключить файл класса-контроллера
        $controllerFile = ROOT . '/controllers/' . $controllerName . '.php';

        if (file_exists($controllerFile)) {
          include_once($controllerFile);
        }
        //Создать объект, вызвать метод (т.е. action)
        $controllerObject = new $controllerName;
        $result = call_user_func_array(array($controllerObject, $actionName), $parameters);

        if ($result != null) {
          break;
        }
      }
    }
    // echo $uri;
    // Проверить наличие такого запроса в routes.php
    // Если есть совпадение, определить какой контроллер и action обрабатывает запрос
    // Подключить файл класса-контроллера
    //Создать объект, вызвать метод (т.е. action)
  }
}

// Подобным образом работают Yii, Symfony and other