<?php
function dd($arr)
{
  echo '<pre>';
  print_r($arr);
  echo '</pre>';
}

include_once ROOT . '/models/News.php';

class NewsController
{
  public function actionIndex()
  {
    $newsList = array();
    $newsList = News::getNewsList();
    // dd($newsList);
    // echo 'NewsController actionIndex()';
    require_once ROOT . '/views/news/index.php';
    return true;
  }

  public function actionView($id)
  {
    if ($id) {
      $newsItem = News::getNewsItemById($id);
      dd($newsItem);

      echo 'actionView';
    }
    // echo 'Viewing one news actionIndex()';
    // echo '<br />' . $category;
    // echo '<br />' . $id;
    return true;
  }
}
