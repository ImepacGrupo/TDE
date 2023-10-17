function validation() {


    var accept = document.getElementById("aceite");
    var campos = ["email", "senha", "endereco", "cidade", "estado"];
    var algumCampoVazio = false;

    campos.forEach(function (campoId) {

        var campo = document.getElementById(campoId).value;

        if (campo === "") {
            event.preventDefault();
            alert("O Campo " + campoId + " é obrigatório");
            algumCampoVazio = true
        }
    });

    algumCampoVazio = patternPassword(document.getElementById("senha").value);
    console.log(algumCampoVazio)

    if (!accept.checked) {
        alert("É necessário aceitar os termos de uso");
        algumCampoVazio = true;
    }

    if (!algumCampoVazio) {
        alert("Sucesso")
        return true;
    } else {
        return false;
    }
}

function patternPassword(password) {
    if (password.length < 6) {
        event.preventDefault();
        alert("Sua senha deve conter ao menos 6 caracteres")
        return true;
    } else if (containsSpecialCaracter(password)) {
        return true;
    }
    else {
        return false;
    }
}

function containsSpecialCaracter(password) {
    var regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;

    var contains = password.match(regex);

    if (contains === null || contains.length < 3) {
        event.preventDefault();
        alert("Sua senha deve conter ao menos 3 caracteres especias")
        return true;
    } else {
        return false;
    }
}