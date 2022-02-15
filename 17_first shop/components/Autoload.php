<?php
// Only (PHP 5, PHP 7)
function __autoload($class_name)
{
    # List all the class directories in the array.
    $array_paths = array(
        '/models/',
        '/components/'
    );

    foreach ($array_paths as $path) {
        $path = ROOT . $path . $class_name . '.php';
        if (is_file($path)) {
            include_once $path;
        }
    }
}