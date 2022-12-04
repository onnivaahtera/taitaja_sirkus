<?php

class Customer
{
    // connection
    private $conn;

    // database connection 
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // add customer to database
    public function buyTickets($email, $phone, $tickets, $showId)
    {
        $sql = "INSERT INTO tilaaja(sposti, puhelin, paikkojenlkm, esitysId) VALUES ('$email', '$phone', $tickets, $showId)";

        if ($this->conn->query($sql) === true) {
            echo "New record created successfully";
        }
    }
}
