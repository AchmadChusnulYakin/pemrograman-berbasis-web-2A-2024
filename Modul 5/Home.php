<?php
session_start();

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="StyleHome.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Selamat Datang <?php echo $username; ?></h1> <!-- Menampilkan nama pengguna di sini -->
        </div>
    </header>
    <main>
        <div class="container1">
            <section class="about">
                <h2>About Me</h2>
                <p>Halo, selamat datang di Website Discover Sphere. Sambutan hangat untuk Anda.</p>
                <p>Kami berharap Anda menikmati pengalaman jelajah di sini. Selamat menjelajahi!</p>
            </section>
            <div class="center">
                <a href="mahasiswa.php" class="btn-next">Next</a>
            </div>
        </div>
    </main>
</body>
</html>
