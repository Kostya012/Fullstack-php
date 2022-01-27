<?php

class News
{
  /**
   * Returns single news item with specified id
   * @param integer $id
   */
  public static function getNewsItemById($id)
  {
    // request to DB
    $id = intval($id);

    if ($id) {

      $db = Db::getConnection();

      $result = $db->query('SELECT * FROM publications WHERE id=' . $id);
      // $result->setFetchMode(PDO::FETCH_NUM); // оставляет данные как массив, без полей
      $result->setFetchMode(PDO::FETCH_ASSOC); // оставляет данные как ассоциативный массив

      $newsItem = $result->fetch();

      return $newsItem;
    }
  }

  /**
   * Returns an array of news items
   */
  public static function getNewsList()
  {
    // $host = 'localhost';
    // $dbName = 'php_start';
    // $user = 'root';
    // $password = 'Aa123456';
    // $db = new PDO("mysql:host=$host;dbname=$dbName", $user, $password);

    $db = Db::getConnection();

    $newsList = array();

    $result = $db->query('SELECT id, title, date, short_content, preview '
      . 'FROM publications '
      . 'ORDER BY date DESC '
      . 'LIMIT 10');

    $i = 0;
    while($row = $result->fetch()) {
      $newsList[$i]['id'] = $row['id'];
      $newsList[$i]['title'] = $row['title'];
      $newsList[$i]['date'] = $row['date'];
      $newsList[$i]['short_content'] = $row['short_content'];
      $newsList[$i]['preview'] = $row['preview'];
      $i++;
    }

    return $newsList;
    // request to DB
  }
}