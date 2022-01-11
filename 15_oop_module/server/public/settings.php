<?
// Разрешение на загрузку файлов
ini_set('file_uploads', 'On');
  
// Максимальное время выполнения скрипта в секундах
ini_set('max_execution_time', '60');
  
// Максимальное потребление памяти одним скриптом
ini_set('memory_limit', '64M');
  
// Максимально допустимый размер данных отправляемых методом POST
ini_set('post_max_size', '50M');
  
// Папка для хранения файлов во время загрузки
ini_set('upload_tmp_dir', 'db/temp');
  
// Максимальный размер загружаемого файла
ini_set('upload_max_filesize', '5M');
  
// Максимально разрешённое количество одновременно загружаемых файлов
ini_set('max_file_uploads', '10');

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$dbUser = htmlspecialchars($obj["dbUser"]);
$dbHost = htmlspecialchars($obj["dbHost"]);

if ($dbUser == "") {
  $arr = array("error" => "You must fill in the field with information");
  echo json_encode($arr, JSON_UNESCAPED_UNICODE);
} else {
  $str = 1111;
  echo json_encode($str, JSON_UNESCAPED_UNICODE);
}
?>