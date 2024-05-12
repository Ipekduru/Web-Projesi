<?php
// Giriş sayfasından post edilen kullanıcı adı ve şifre değişkenlerini kontrol et
if(isset($_POST['username']) && isset($_POST['password'])) {
    // Kullanıcı adı ve şifre değişkenlerini al
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Kullanıcı adı ve şifre alanlarının boş olup olmadığını kontrol et
    if(!empty($username) && !empty($password)) {
        // Kullanıcı adının bir e-posta adresi olup olmadığını kontrol et
        if(filter_var($username, FILTER_VALIDATE_EMAIL)) {
            // Kullanıcı adından öğrenci numarasını al
            $student_number = explode('@', $username)[0];
            
            // Öğrenci numarası ile şifreyi karşılaştır
            if($student_number === $password) {
                // Giriş başarılı ise kullanıcıya hoş geldin mesajını göster
                echo "Hoşgeldiniz \"$student_number\"";
            } else {
                // Şifre yanlış ise kullanıcıyı tekrar giriş sayfasına yönlendir
                header("Location: girisYap.php");
                exit();
            }
        } else {
            // Kullanıcı adı e-posta formatında değilse kullanıcıyı tekrar giriş sayfasına yönlendir
            header("Location: girisYap.php");
            exit();
        }
    } else {
        // Kullanıcı adı veya şifre alanı boşsa kullanıcıyı tekrar giriş sayfasına yönlendir
        header("Location: girisYap.php");
        exit();
    }
} else {
    // Post edilen değerler eksikse kullanıcıyı tekrar giriş sayfasına yönlendir
    header("Location: girisYap.php");
    exit();
}
?>