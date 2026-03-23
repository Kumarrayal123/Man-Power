<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data from POST
    $name = $_POST['name'] ?? 'Not provided';
    $company = $_POST['company'] ?? 'Not provided';
    $email = $_POST['email'] ?? 'Not provided';
    $phone = $_POST['phone'] ?? 'Not provided';
    $location = $_POST['location'] ?? 'Not provided';
    $duration = $_POST['duration'] ?? 'Not provided';
    $startDate = $_POST['startDate'] ?? 'Not provided';
    $message = $_POST['message'] ?? 'None';
    
    // Trades are sent as a JSON string
    $trades_json = $_POST['trades'] ?? '[]';
    $trades = json_decode($trades_json, true);

    $to = "info@smaarelysium.com";
    $subject = "New Manpower Booking Request from $name";

    $body = "You have received a new manpower booking request.\n\n";
    $body .= "--- CLIENT DETAILS ---\n";
    $body .= "Full Name: $name\n";
    $body .= "Company: $company\n";
    $body .= "Work Email: $email\n";
    $body .= "Phone: $phone\n\n";

    $body .= "--- PROJECT DETAILS ---\n";
    $body .= "Location: $location\n";
    $body .= "Duration: $duration\n";
    $body .= "Start Date: $startDate\n\n";

    $body .= "--- MANPOWER REQUESTED ---\n";
    if (is_array($trades) && count($trades) > 0) {
        $total_qty = 0;
        foreach ($trades as $trade) {
            $body .= "- " . $trade['name'] . ": " . $trade['qty'] . "\n";
            $total_qty += $trade['qty'];
        }
        $body .= "\nTotal Manpower: $total_qty\n";
    } else {
        $body .= "No specific trades listed.\n";
    }

    $body .= "\n--- ADDITIONAL REQUIREMENTS ---\n";
    $body .= $message . "\n";

    $headers = "From: webmaster@smaarelysium.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        header('Content-Type: application/json');
        echo json_encode(["status" => "success", "message" => "Booking request sent successfully."]);
    } else {
        header('Content-Type: application/json');
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email notification."]);
    }
} else {
    header('Content-Type: application/json');
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
