// Traduzioni per le lingue
const translations = {
    it: {
        welcome: "Benvenuto su Scotch",
        create_project: "Crea un nuovo progetto",
        project_created: "Progetto creato con successo!",
        project_list: "I tuoi progetti",
        settings: "Impostazioni",
        back: "Indietro",
        move_steps: "muovi",
        steps: "passi",
        turn_right: "gira a destra",
        turn_left: "gira a sinistra",
        say: "dì",
        login: "Login",
        register: "Registrati"
    },
    en: {
        welcome: "Welcome to Scotch",
        create_project: "Create a new project",
        project_created: "Project created successfully!",
        project_list: "Your Projects",
        settings: "Settings",
        back: "Back",
        move_steps: "move",
        steps: "steps",
        turn_right: "turn right",
        turn_left: "turn left",
        say: "say",
        login: "Login",
        register: "Register"
    }
};

// Funzione per cambiare la lingua
function changeLanguage() {
    const selectedLang = document.getElementById('language')?.value || 'en';
    const langData = translations[selectedLang];

    // Modifica i testi in tutte le pagine in base alla lingua
    document.querySelector('h1')?.innerText = langData.welcome;
    document.getElementById('createProjectBtn')?.innerText = langData.create_project;
    document.getElementById('projectListTitle')?.innerText = langData.project_list;
    document.getElementById('settingsTitle')?.innerText = langData.settings;
    document.getElementById('backBtn')?.innerText = langData.back;
    document.getElementById('loginBtn')?.innerText = langData.login;
    document.getElementById('registerBtn')?.innerText = langData.register;

    // Salva la lingua selezionata nel localStorage
    localStorage.setItem('language', selectedLang);
}

// Carica la lingua salvata dal localStorage
window.onload = function() {
    const selectedLang = localStorage.getItem('language') || 'en';  // Imposta 'en' come predefinito se non c'è lingua salvata
    document.getElementById('language')?.value = selectedLang;
    changeLanguage();
};

// Funzione per registrarsi
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (email && username && password) {
        // Salva l'utente nel localStorage
        localStorage.setItem('user', JSON.stringify({ email, username, password }));
        alert('Registrazione avvenuta con successo!');
        closeModal('registerModal');
    } else {
        alert('Compila tutti i campi.');
    }
});

// Funzione per login
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Login effettuato con successo!');
        window.location.href = 'profile.html';  // Reindirizza alla pagina del profilo
    } else {
        alert('Nome utente o password errati!');
    }
});

// Funzione per mostrare/nascondere la password
function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.innerText = "🙈";
    } else {
        passwordField.type = "password";
        eyeIcon.innerText = "👁️";
    }
}

// Funzione per creare un progetto e reindirizzare alla pagina dei progetti
document.getElementById('newProjectForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const projectName = document.getElementById('projectName').value;
    const projectDescription = document.getElementById('projectDescription').value;

    if (projectName && projectDescription) {
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        const projectId = projects.length + 1;
        projects.push({ id: projectId, name: projectName, description: projectDescription });
        localStorage.setItem('projects', JSON.stringify(projects));

        alert(translations[document.getElementById('language').value].project_created);
        window.location.href = `projects.html`;  // Reindirizza alla lista progetti
    } else {
        alert('Compila tutti i campi per creare il progetto.');
    }
});
