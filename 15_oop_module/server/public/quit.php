<?php
session_start();
session_destroy();
$str = 'quit';
echo json_encode($str, JSON_UNESCAPED_UNICODE);
exit();
