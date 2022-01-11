<?php
$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$message = htmlspecialchars($obj["message"]);
$index = htmlspecialchars($obj["index"]);
$fileNameCsv = 'db/1/1.csv';
$fileNameTxt = 'db/1/1.txt';

if ($message == "") {
  $arr = array("error" => "You must fill in the field with information");
  echo json_encode($arr, JSON_UNESCAPED_UNICODE);
  exit();
} elseif ($index == 0) {
  // add to db
  $str = 1111;
  echo json_encode($str, JSON_UNESCAPED_UNICODE);
  exit();
} elseif ($index == 1) {
  // add to csv
  if (!file_exists($fileNameCsv)) {
    $list = explode(";", $message);
    $fp = fopen($fileNameCsv, 'w');
    fprintf($fp, chr(0xEF) . chr(0xBB) . chr(0xBF));
    fputcsv($fp, $list, ';');
    fclose($fp);
  } else {
    $list = explode(";", $message);
    $fp = fopen($fileNameCsv, 'a');
    fprintf($fp, chr(0xEF) . chr(0xBB) . chr(0xBF));
    fputcsv($fp, $list, ';');
    fclose($fp);
  }
  $str = 1111;
  echo json_encode($str, JSON_UNESCAPED_UNICODE);
  exit();
} elseif ($index == 2) {
  // add to txt
  if (file_exists($fileNameTxt)) {
    $file = fopen($fileNameTxt, 'a');
    fwrite($file, $message);
    fclose($file);
  } else {
    $file = fopen($fileNameTxt, "a+");
    fwrite($file, $message);
    fclose($file);
  }
  $str = 1111;
  echo json_encode($str, JSON_UNESCAPED_UNICODE);
  exit();
} else {
  $str = 1111;
  echo json_encode($str, JSON_UNESCAPED_UNICODE);
  exit();
}
// $tempArr = explode("_", $fileName);
// $month = $tempArr[1];
// $fileNameNotYear = $tempArr[0] . '_' . $tempArr[1];
// $lastMonth = date("m", strtotime("-7 months"));

// $folderMonth = 'db/' . $month . '/';
// $folderMonthLast = 'db/' . $lastMonth . '/';
// $folderMonthLastSearch = 'db/' . $lastMonth . '/*';

// if (!is_dir($folderMonth)) {
//   mkdir($folderMonth, 0764, true);
// }

// if (file_exists($folderMonthLast)) {
//   array_map('unlink', glob($folderMonthLastSearch));
//   rmdir($folderMonthLast);
// }

// if (is_dir($folderMonthLast)) {
//   $files = glob($folderMonthLastSearch, GLOB_MARK); // get all file names
//   foreach ($files as $file) { // iterate files
//     if (is_file($file)) {
//       unlink($file);
//     }
//   }
//   rmdir($folderMonthLast);
// }

// $fileNameFull = 'db/' . $month . '/' . $fileNameNotYear . '.json';

// $file = fopen($fileNameFull, "w+");
// fwrite($file, $json);
// fclose($file);

// $str = 1111;
// echo json_encode($str, JSON_UNESCAPED_UNICODE);
