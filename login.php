<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı ve şifrenin boş olup olmadığını kontrol et
    if (empty($username) || empty($password)) {
        header("Location: index.html");
        exit();
    }

    // Sabit kullanıcı adı ve şifre kontrolü
    $valid_username = "B231210015";
    $valid_password = "Duruipke";

    if ($username === $valid_username && $password === $valid_password) {
        echo "Hoşgeldiniz " . htmlspecialchars($username);
        echo "<br>2 saniye sonra yönlendirileceksiniz...";
        header("refresh:2;url=index.html");
    } else {
        header("Location: index.html");
        exit();
    }
} else {
    header("Location: index.html");
    exit();
}
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
