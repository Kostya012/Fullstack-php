<?php

use frameworkVendor\core\Db\Db as Database;

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

if (isset($obj["action"])) {
  switch ($obj["action"]) {
    case 'getinfocsv':
      include_once './getinfocsv.php';
      break;
    case 'getinfotxt':
      include_once './getinfotxt.php';
      break;
    case 'getinfodb':
      $con = Database::getConnect();
      // $con = Database::instance();
      $data = $con->query("SELECT * FROM users")->fetch_all();
      $res = ['getinfodb' => $data];
      $result = json_encode($res, JSON_UNESCAPED_UNICODE);
      echo $result;
      break;
    default:
      $res = ['error' => 'no data'];
      $result = json_encode($res, JSON_UNESCAPED_UNICODE);
      echo $result;
  }
} else {
  $resp = ["error" => "Error in post request body have not action"];
  echo json_encode($resp, JSON_UNESCAPED_UNICODE);
  exit();
}
?>