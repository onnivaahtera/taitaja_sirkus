<?php

class Shows
{
    // Connection
    private $conn;

    // Table
    private $table = "esitys";

    // db connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // GET ALL
    public function getShows()
    {
        $sqlQuery = "SELECT esitysID, teema, esityspaikka, kaupunki, pvm, paikat, vapaitapaikkoja FROM  $this->table ";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }
    public function getShow()
    {
        $id = $_GET['id'];

        $sqlQuery = "SELECT esitysID, teema, esityspaikka, kaupunki, pvm, paikat, vapaitapaikkoja from $this->table WHERE esitysID='$id'";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }

    // Update tickets 
    public function updateShow($tickets)
    {
        $id = $_GET['id'];

        $update = "UPDATE $this->table SET vapaitapaikkoja=$tickets WHERE esitysId=$id";
        if ($this->conn->query($update) === true) {
            echo "Updated succsessfully";
        }
    }
}
