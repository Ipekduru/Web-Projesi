<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı ve şifre boş mu kontrol et
    if (empty($username) || empty($password)) {
        echo "Kullanıcı adı ve şifre alanları boş geçilemez.";
        header("refresh:2;url=login.html");
        exit();
    }

    // Kullanıcı adı e-posta formatında mı kontrol et
    if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
        echo "Geçerli bir e-posta adresi giriniz.";
        header("refresh:2;url=login.html");
        exit();
    }

    // Doğru kullanıcı adı ve şifreyi belirle
    $valid_username = 'B231210015@sakarya.edu.tr';
    $valid_password = 'Duruipke';

    // Kullanıcı adı ve şifreyi kontrol et
    if ($username === $valid_username && $password === $valid_password) {
        echo "Hoşgeldiniz " . htmlspecialchars(explode('@', $username)[0]);
        echo "<br>2 saniye sonra yönlendirileceksiniz...";
        header("refresh:2;url=index.html");
    } else {
        echo "Hatalı giriş yaptınız, tekrar deneyiniz.";
        header("refresh:2;url=login.html");
        exit();
    }
} else {
    header("Location: login.html");
    exit();
}
?>
