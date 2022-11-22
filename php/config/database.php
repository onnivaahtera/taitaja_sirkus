<?php

class Database
{
    private $host = 'localhost';
    private $database = 'sirkus';
    private $username = 'root';
    private $password = '';

    public $conn;

    public function getConnection()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database, $this->username, $this->password);
        } catch (PDOException $exception) {
            echo "Database connection failed" . $exception->getMessage();
        }
        return $this->conn;
    }
}
