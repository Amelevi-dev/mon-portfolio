<?php
// Autoriser les requêtes depuis ton frontend React
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Infos de connexion
$host = 'localhost';
$dbname = 'monportfolio';
$username = 'root';
$password = '';

try {
    // Connexion à la base
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Vérifier que les données existent (POST)
    if (!empty($_POST['nom_prenom']) && !empty($_POST['email']) && !empty($_POST['message'])) {

        $nom_prenom = trim($_POST['nom_prenom']);
        $email = trim($_POST['email']);
        $message = trim($_POST['message']);

        // Vérification email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode([
                "status" => "error",
                "message" => "Adresse email invalide."
            ]);
            exit;
        }

        // Préparer et exécuter la requête
        $sql = "INSERT INTO messages (nom_prenom, email, message) 
                VALUES (:nom_prenom, :email, :message)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':nom_prenom' => $nom_prenom,
            ':email' => $email,
            ':message' => $message
        ]);

        echo json_encode([
            "status" => "success",
            "message" => "Merci $nom_prenom, votre message a bien été envoyé "
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Veuillez remplir tous les champs."
        ]);
    }
} catch (PDOException $e) {
    echo json_encode([
        "status" => "error",
        "message" => "Erreur serveur : " . $e->getMessage()
    ]);
}
