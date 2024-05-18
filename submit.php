<?php
// Dosya yolu
$file = 'submissions.txt';

// Form verilerini oku ve diziye ekle
$submissions = [];
if (file_exists($file)) {
    $submissions = json_decode(file_get_contents($file), true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Yeni form verisini diziye ekle
    $new_submission = [
        'name' => htmlspecialchars($_POST['name']),
        'email' => htmlspecialchars($_POST['email']),
        'topic' => htmlspecialchars($_POST['topic']),
        'gender' => htmlspecialchars($_POST['gender']),
        'message' => htmlspecialchars($_POST['message'])
    ];
    $submissions[] = $new_submission;

    // Güncellenmiş diziyi dosyaya yaz
    file_put_contents($file, json_encode($submissions));
}
?>

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gönderilen Formlar</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
        }
        .result-container {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            width: 50%;
            margin: auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .result-container h2 {
            margin-bottom: 20px;
        }
        .result {
            border-bottom: 1px solid #ccc;
            margin-bottom: 10px;
            padding-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="result-container">
        <h2>Gönderilen Formlar</h2>
        <?php foreach ($submissions as $submission): ?>
            <div class="result">
                <p><strong>İsim:</strong> <?php echo $submission['name']; ?></p>
                <p><strong>E-posta:</strong> <?php echo $submission['email']; ?></p>
                <p><strong>Konu:</strong> <?php echo $submission['topic']; ?></p>
                <p><strong>Cinsiyet:</strong> <?php echo $submission['gender']; ?></p>
                <p><strong>Mesaj:</strong> <?php echo nl2br($submission['message']); ?></p>
            </div>
        <?php endforeach; ?>
    </div>
</body>
</html>
