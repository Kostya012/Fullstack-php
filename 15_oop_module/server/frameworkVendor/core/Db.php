<?php

namespace frameworkVendor\core\Db;

class Db
{
    protected $pdo;
    static $connect;

    protected function __construct()
    {
        // $data = require __DIR__ . '/../../setdb.php';

        $db = [
            'dns' => 'mysql:host=a_level_nix_mysql:3306;dbname=a_level_nix_mysql;charset=utf8',
            'user' => 'root',
            'pass' => 'cbece_gead-cebfa'
        ];
        $options = [
            \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
            \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC
        ];

        try {
            $this->pdo = new \PDO($db['dns'], $db['user'], $db['pass'], $options);
        }
        catch(\PDOException $e)
        {
            $arr = ['error' => $e->getMessage()];
            echo json_encode($arr, JSON_UNESCAPED_UNICODE);
            exit();
        }
        
    }

    public static function getConnect()
    {
        if(empty(self::$connect))
          self::$connect = new self();
        return self::$connect->con;
    }

    public static function instance()
    {
        if (self::$connect === null) {
            self::$connect = new self();
        }
        return self::$connect;
    }
    public function queryy(string $sql, array $data)
    {
        $sth = $this->pdo->prepare($sql);
        $result = $sth->execute($data);
        
        if ($result == false)
        {
            return null;
        }
        $sth->fetchAll();
    }
}