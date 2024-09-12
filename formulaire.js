function Valide() {

    
    var password = document.getElementById("password").value;
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;

    var errorMessage = "";
    var isValid = true;

    print('test')


    if (password.length < 5) {
        errorMessage += "Le mot de passe doit comporter au moins 5 caractères";
        isValid = false;
    }

    if (nom.length == 0) {
        errorMessage += "Renseignez votre Nom";
        isValid = false;
    }

    if (prenom.length == 0) {
        errorMessage += "Renseignez votre Prenom";
        isValid = false;
    }


    if (isValid == false) {
        document.getElementById("error_message").innerHTML = errorMessage;
    }

    
    return isValid;
}