<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Sonuçları</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        .result-container {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            width: 300px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .result-container h2 {
            margin-bottom: 20px;
        }
        .result-container p {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="result-container">
        <h2>Form Sonuçları</h2>
        <p><strong>İsim:</strong> <?php echo htmlspecialchars($_POST['name']); ?></p>
        <p><strong>E-posta:</strong> <?php echo htmlspecialchars($_POST['email']); ?></p>
        <p><strong>Konu:</strong> <?php echo htmlspecialchars($_POST['topic']); ?></p>
        <p><strong>Cinsiyet:</strong> <?php echo htmlspecialchars($_POST['gender']); ?></p>
        <p><strong>Mesaj:</strong> <?php echo nl2br(htmlspecialchars($_POST['message'])); ?></p>
    </div>
</body>
</html>
