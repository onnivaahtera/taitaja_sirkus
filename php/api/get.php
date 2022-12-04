<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../class/shows.php';
include_once '../class/customer.php';

$database = new Database();
$db = $database->getConnection();
$show = new Shows($db);
$stmt = $show->getShow();
$itemCount = $stmt->rowCount();

// recieves json file from frontend
$data = json_decode(file_get_contents('php://input'), true);
$parsedData = $data['order'];

if ($itemCount > 0) {
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        // checks if amount of tickets bought is less than seats available
        if ($vapaitapaikkoja < $parsedData['tickets']) {
            $message = "Yritit tilata liian monta lippua.";
        } else {
            // add user to database if tickets are bought succseffully
            $user = new Customer($db);
            $createUser = $user->buyTickets($parsedData['email'], $parsedData['phone'], $parsedData['tickets'], $parsedData['id']);
            // update seats
            $seats = $vapaitapaikkoja - $parsedData['tickets'];
            $x = $show->updateShow($seats);
            $message = "Liput ostettu";
        }
        // sends message response to frontend
        echo json_encode(
            array("message" => $message)
        );
    }
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No record found.")
    );
}
