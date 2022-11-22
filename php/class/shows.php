<?php

class Shows
{
    // Connection
    private $conn;

    // Table
    private $table = "esitys";

    // Columns
    public $esitysID;
    public $theme;
    public $area;
    public $city;
    public $date;
    public $spots;
    public $availableSpots;

    // db connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // GET ALL
    public function getShows()
    {
        $sqlQuery = "SELECT esitysID, teema, esityspaikka, kaupunki, pvm, paikat, vapaitapaikkoja FROM " . $this->table . "";
        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->execute();
        return $stmt;
    }
}
