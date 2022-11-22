<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../class/shows.php';
$database = new Database();
$db = $database->getConnection();
$items = new Shows($db);
$stmt = $items->getShows();
$itemCount = $stmt->rowCount();

if ($itemCount > 0) {

    $showArr = array();
    $showArr["body"] = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $e = array(
            "id" => $esitysID,
            "theme" => $teema,
            "area" => $esityspaikka,
            "city" => $kaupunki,
            "date" => $pvm,
            "seats" => $paikat,
            "freeSeats" => $vapaitapaikkoja
        );
        array_push($showArr["body"], $e);
    }
    echo json_encode($showArr);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
