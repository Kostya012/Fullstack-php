<?php

/**
 * @param string $file_path
 * @param array $file_encodings
 * @param string $col_delimiter
 * @param string $row_delimiter
 * 
 * @return bool
 */
function createJSON_parse_csv_file(string $file_path, array $file_encodings = ['cp1251', 'UTF-8'], string $col_delimiter = '', string $row_delimiter = ""): bool
{
  if (!file_exists($file_path)) {
    return false;
  }
  $cont = trim(file_get_contents($file_path));
  $encoded_cont = mb_convert_encoding($cont, 'UTF-8', mb_detect_encoding($cont, $file_encodings));
  unset($cont);

  if (!$row_delimiter) {
    $row_delimiter = "\r\n";
    if (false === strpos($encoded_cont, "\r\n"))
      $row_delimiter = "\n";
  }

  $lines = explode($row_delimiter, trim($encoded_cont));
  $lines = array_filter($lines);
  $lines = array_map('trim', $lines);

  // auto-detect separate from 2: ';' or ','. 
  // for count get dont more 30 rows
  if (!$col_delimiter) {
    $lines10 = array_slice($lines, 0, 30);

    // if in str have not separated, then...
    foreach ($lines10 as $line) {
      if (!strpos($line, ',')) $col_delimiter = ';';
      if (!strpos($line, ';')) $col_delimiter = ',';
      if ($col_delimiter) break;
    }

    if (!$col_delimiter) {
      $delim_counts = array(';' => array(), ',' => array());
      foreach ($lines10 as $line) {
        $delim_counts[','][] = substr_count($line, ',');
        $delim_counts[';'][] = substr_count($line, ';');
      }

      $delim_counts = array_map('array_filter', $delim_counts); // delete null

      $delim_counts = array_map('array_count_values', $delim_counts);

      $delim_counts = array_map('max', $delim_counts); // get only max

      if ($delim_counts[';'] === $delim_counts[','])
        return array('Не удалось определить разделитель колонок.');

      $col_delimiter = array_search(max($delim_counts), $delim_counts);
    }
  }

  $data = [];
  
  foreach ($lines as $key => $line) {
    $data[] = str_getcsv($line, $col_delimiter); // linedata
    unset($lines[$key]);
  }
  $res = ['getinfocsv' => $data];
  $result = json_encode($res, JSON_UNESCAPED_UNICODE);
  // file_put_contents('json/kody.json', $result);
  echo $result;
  return true;
}

$fileName = 'db/1/1.csv';

createJSON_parse_csv_file($fileName);
