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

$data = json_decode(file_get_contents('php://input'), true);
$parsedData = $data['order'];

if ($itemCount > 0) {
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        if ($vapaitapaikkoja < $parsedData['tickets']) {
            echo json_encode(
                array("message" => "Ei tarpeeksi vapaita paikkoja")
            );
        }
    }
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
