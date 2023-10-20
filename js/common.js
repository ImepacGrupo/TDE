function validationFormUser(event) {

    var errorMessages = document.querySelectorAll(".alert");
    errorMessages.forEach(function (element) {
        element.classList.add("d-none")
    });

    var accept = document.getElementById("aceite");
    var elements = document.getElementById("forms").elements
    var emptyField = false;

    for (i = 0; i < elements.length; i++) {
        var field = elements[i];
        var isRequired = field.getAttribute("data-required") === "true";

        if (isRequired && field.value === "") {
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
        clearFields(elements)
        document.getElementById("alertSucess").classList.remove("d-none");
        return true;
    } else {
        return false;
    }
}

function validationFormProduct(event) {

    var errorMessages = document.querySelectorAll(".alert");
    errorMessages.forEach(function (element) {
        element.classList.add("d-none")
    });

    var accept = document.getElementById("aceite");
    var elements = document.getElementById("forms").elements
    var emptyField = false;

    for (i = 0; i < elements.length; i++) {
        var field = elements[i];
        var isRequired = field.getAttribute("data-required") === "true";

        if (isRequired && field.value === "") {
            field.focus();
            event.preventDefault();
            document.getElementById("alert").classList.remove("d-none");
            emptyField = true;
            break;
        }
    }

    if (!accept.checked) {
        document.getElementById("AlertUnmarked").classList.remove("d-none");
        emptyField = true;
    }


    if (!emptyField) {
        event.preventDefault();
        clearFields(elements)
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
    var form = document.getElementById("forms");
    form.reset();
}

function showWelcomeModal() {
    var modal = document.getElementById('welcomeModal');
    modal.style.display = 'block';
}

function closeWelcomeModal() {
    var modal = document.getElementById('welcomeModal');
    modal.style.display = 'none';
}

function showWelcomeModal() {
    document.getElementById("welcomeModal").style.display = "block";
    setTimeout(function () {
        welcomeModal.style.display = "none";
    }, 5000);
}

window.onload = function () {
    showWelcomeModal();
};
