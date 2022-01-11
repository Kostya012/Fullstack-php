<?php
session_start();

if (isset($_SESSION["auth"])) {
    $id = $_SESSION["auth"];
    $str = 1111;
    echo json_encode($str, JSON_UNESCAPED_UNICODE);
    exit();
} elseif (isset($_COOKIE["auth"])) {
    $id = $_COOKIE["auth"];
    $str = 2222;
    echo json_encode($str, JSON_UNESCAPED_UNICODE);
    exit();
}

$str = 0;
echo json_encode($str, JSON_UNESCAPED_UNICODE);
exit();
?>