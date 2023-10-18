function validation() {

    var errorMessages = document.querySelectorAll(".alert-error");
    errorMessages.forEach(function (element) {
        element.classList.add("d-none")
    });

    var accept = document.getElementById("aceite");
    var fields = ["email", "senha", "endereco", "cidade", "estado"];
    var emptyField = false;


    for (i = 0; i < fields.length; i++) {

        var field = document.getElementById(fields[i]);

        if (field.value === "") {
            field.focus();
            event.preventDefault();
            document.getElementById("alert").classList.remove("d-none");
            emptyField = true;
            break;
        }
    }

    password = document.getElementById("senha");

    if (patternPassword(password.value)) {
        event.preventDefault();
        document.getElementById("alertPasswordSmall").classList.remove("d-none");
        emptyField = true;
        password.focus();
    } else if (containsSpecialCaracter(password.value)) {
        event.preventDefault();
        document.getElementById("alertPasswordSpecialCaracter").classList.remove("d-none");
        emptyField = true;
        password.focus();
    }

    if (!accept.checked) {
        document.getElementById("AlertUnmarked").classList.remove("d-none");
        emptyField = true;
    }

    if (!emptyField) {
        event.preventDefault();
        clearFields(fields)
        document.getElementById("alertSucess").classList.remove("d-none");
        return true;
    } else {
        return false;
    }
}

function patternPassword(password) {
    if (password.length < 6 || password === "") {
        event.preventDefault();
        return true;
    } else {
        return false;
    }
}

function containsSpecialCaracter(password) {
    var regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;
    var contains = password.match(regex);

    if (contains === null || contains.length < 3) {
        event.preventDefault();
        return true;
    } else {
        return false;
    }
}

function clearFields(fields) {
    for (var i = 0; i < fields.length; i++) {
        var element = document.getElementById(fields[i]);
        var elementType = element.type.toLowerCase();

        switch (elementType) {
            case 'text':
            case 'password':
            case 'textarea':
            case 'email':
            case 'tel':
                element.value = '';
                break;
            case 'checkbox':
            case 'radio':
                element.checked = false;
                break;
            case 'select-one':
            case 'select-multiple':
                element.selectedIndex = -1;
                break;
        }
    }
}