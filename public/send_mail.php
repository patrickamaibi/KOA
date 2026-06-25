<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed."]);
    exit;
}

$first_name = htmlspecialchars(trim($_POST["first_name"] ?? ""));
$last_name  = htmlspecialchars(trim($_POST["last_name"]  ?? ""));
$email      = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
$phone      = htmlspecialchars(trim($_POST["phone"]   ?? ""));
$message    = htmlspecialchars(trim($_POST["message"] ?? ""));

// Basic validation
if (!$first_name || !$last_name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid email address."]);
    exit;
}

$to      = "info@koaengineering.com";
$subject = "New Project Enquiry — KOA Engineering";

$body  = "You have received a new project enquiry via the KOA Engineering website.\n\n";
$body .= "----------------------------------------\n";
$body .= "Name:    {$first_name} {$last_name}\n";
$body .= "Email:   {$email}\n";
$body .= "Phone:   " . ($phone ?: "Not provided") . "\n";
$body .= "----------------------------------------\n\n";
$body .= "Message:\n{$message}\n";

$headers  = "From: KOA Engineering Website <no-reply@koaengineering.com>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(["success" => true, "message" => "Your message has been sent. We will get back to you shortly."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send message. Please try again or email us directly."]);
}
?>
