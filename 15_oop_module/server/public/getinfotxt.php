<?php
session_start();

/**
 * @param string $file_path
 * @param array $file_encodings
 * 
 * @return bool
 */
function createJSON_parse_txt_file(string $file_path, array $file_encodings = ['cp1251', 'UTF-8']): bool
{
  if (!file_exists($file_path)) {
    return false;
  }
  $cont = file_get_contents($file_path);
  $encoded_cont = mb_convert_encoding($cont, 'UTF-8', mb_detect_encoding($cont, $file_encodings));
  unset($cont);

  // $data = [];
  $res = ['getinfotxt' => $encoded_cont];
  $result = json_encode($res, JSON_UNESCAPED_UNICODE);
  // file_put_contents('json/1.json', $result);
  echo $result;
  return true;
}

$fileName = 'db/1/1.txt';

createJSON_parse_txt_file($fileName);
