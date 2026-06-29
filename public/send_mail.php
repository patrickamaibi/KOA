<?php
// ── Rate limiting (5 submissions per IP per hour) ─────────────────────────
session_start();
$ip  = $_SERVER['REMOTE_ADDR'];
$now = time();
$window = 3600;
$limit  = 5;

if (!isset($_SESSION['mail_attempts'])) {
    $_SESSION['mail_attempts'] = [];
}

$_SESSION['mail_attempts'] = array_filter(
    $_SESSION['mail_attempts'],
    fn($t) => ($now - $t) < $window
);

if (count($_SESSION['mail_attempts']) >= $limit) {
    http_response_code(429);
    echo json_encode(["success" => false, "message" => "Too many requests. Please try again later."]);
    exit;
}

// ── CORS: restrict to your domain only ────────────────────────────────────
$allowed_origins = ["https://koaengineering.com", "https://www.koaengineering.com"];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Forbidden."]);
    exit;
}

header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// ── Block non-POST requests ────────────────────────────────────────────────
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed."]);
    exit;
}

// ── Honeypot: bots fill hidden fields, humans don't ───────────────────────
if (!empty($_POST['website'])) {
    http_response_code(200);
    echo json_encode(["success" => true]);
    exit;
}

// ── Sanitize & validate inputs ────────────────────────────────────────────
$first_name = htmlspecialchars(trim($_POST["first_name"] ?? ""));
$last_name  = htmlspecialchars(trim($_POST["last_name"]  ?? ""));
$email      = filter_var(trim($_POST["email"]            ?? ""), FILTER_SANITIZE_EMAIL);
$phone      = htmlspecialchars(trim($_POST["phone"]      ?? ""));
$message    = htmlspecialchars(trim($_POST["message"]    ?? ""));

// Length limits
if (strlen($first_name) > 100 || strlen($last_name) > 100 ||
    strlen($message) > 5000   || strlen($phone) > 20) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Input too long."]);
    exit;
}

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

// ── Block email header injection ──────────────────────────────────────────
if (preg_match('/[\r\n]/', $email) || preg_match('/[\r\n]/', $first_name)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid input detected."]);
    exit;
}

// ── Send mail ─────────────────────────────────────────────────────────────
$to      = "info@koaengineering.com";
$subject = "New Project Enquiry — KOA Engineering";

$body  = "New project enquiry via KOA Engineering website.\n\n";
$body .= "----------------------------------------\n";
$body .= "Name:    {$first_name} {$last_name}\n";
$body .= "Email:   {$email}\n";
$body .= "Phone:   " . ($phone ?: "Not provided") . "\n";
$body .= "IP:      {$ip}\n";
$body .= "Time:    " . date("Y-m-d H:i:s") . " UTC\n";
$body .= "----------------------------------------\n\n";
$body .= "Message:\n{$message}\n";

$headers  = "From: KOA Engineering Website <no-reply@koaengineering.com>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

// ── Log attempt ───────────────────────────────────────────────────────────
$_SESSION['mail_attempts'][] = $now;

if ($sent) {
    echo json_encode(["success" => true, "message" => "Your message has been sent. We will get back to you shortly."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send message. Please try again or email us directly."]);
}
?>
