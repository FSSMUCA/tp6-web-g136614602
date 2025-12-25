<?php
$nom = "Douâa";
$age = 19;

$nombre1 = 10;
$nombre2 = 4;

$addition = $nombre1 + $nombre2;
$soustraction = $nombre1 - $nombre2;
$multiplication = $nombre1 * $nombre2;
$division = $nombre1 / $nombre2;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Info PHP</title>
</head>
<body>

<h1>Page d'information PHP</h1>

<p>Nom : <?php echo $nom; ?></p>
<p>Âge : <?php echo $age; ?> ans</p>

<h2>Calculs</h2>
<p><?php echo "$nombre1 + $nombre2 = $addition"; ?></p>
<p><?php echo "$nombre1 - $nombre2 = $soustraction"; ?></p>
<p><?php echo "$nombre1 × $nombre2 = $multiplication"; ?></p>
<p><?php echo "$nombre1 ÷ $nombre2 = $division"; ?></p>

</body>
</html>
