// Traduzioni per tutte le lingue
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
        say: "dì"
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
        say: "say"
    },
    fr: {
        welcome: "Bienvenue sur Scotch",
        create_project: "Créer un nouveau projet",
        project_created: "Projet créé avec succès!",
        project_list: "Vos Projets",
        settings: "Paramètres",
        back: "Retour",
        move_steps: "avance",
        steps: "pas",
        turn_right: "tourne à droite",
        turn_left: "tourne à gauche",
        say: "dis"
    },
    de: {
        welcome: "Willkommen bei Scotch",
        create_project: "Erstelle ein neues Projekt",
        project_created: "Projekt erfolgreich erstellt!",
        project_list: "Deine Projekte",
        settings: "Einstellungen",
        back: "Zurück",
        move_steps: "bewege",
        steps: "Schritte",
        turn_right: "drehe rechts",
        turn_left: "drehe links",
        say: "sage"
    },
    es: {
        welcome: "Bienvenido a Scotch",
        create_project: "Crear un nuevo proyecto",
        project_created: "Proyecto creado con éxito!",
        project_list: "Tus Proyectos",
        settings: "Ajustes",
        back: "Atrás",
        move_steps: "mover",
        steps: "pasos",
        turn_right: "gira a la derecha",
        turn_left: "gira a la izquierda",
        say: "decir"
    }
};

// Funzione per cambiare la lingua
function changeLanguage() {
    const selectedLang = document.getElementById('language').value;
    const langData = translations[selectedLang];
    
    // Cambia i testi in tutte le pagine
    document.querySelector('h1')?.innerText = langData.welcome;
    document.getElementById('createProjectBtn')?.innerText = langData.create_project;
    document.getElementById('projectListTitle')?.innerText = langData.project_list;
    document.getElementById('settingsTitle')?.innerText = langData.settings;
    document.getElementById('backBtn')?.innerText = langData.back;

    // Aggiorna i blocchi con la lingua selezionata
    Blockly.Blocks['move_steps'].init = function() {
        this.appendDummyInput()
            .appendField(langData.move_steps)
            .appendField(new Blockly.FieldNumber(10), "STEPS")
            .appendField(langData.steps);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(langData.move_steps + " " + langData.steps);
        this.setHelpUrl("");
    };

    Blockly.mainWorkspace.updateToolbox(document.getElementById('blocklyDiv'));

    // Salva la lingua selezionata nel localStorage
    localStorage.setItem('language', selectedLang);
}

// Funzione per caricare la lingua dal localStorage
window.onload = function() {
    const selectedLang = localStorage.getItem('language') || 'it';
    document.getElementById('language').value = selectedLang;
    changeLanguage();
};

// Funzione per creare un progetto e reindirizzare alla pagina dei progetti
document.getElementById('newProjectForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const projectName = document.getElementById('projectName').value;
    const projectDescription = document.getElementById('projectDescription').value;

    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    const projectId = projects.length + 1;
    projects.push({ id: projectId, name: projectName, description: projectDescription });
    localStorage.setItem('projects', JSON.stringify(projects));

    alert(translations[document.getElementById('language').value].project_created);

    // Reindirizza alla pagina dei progetti
    window.location.href = `projects.html`;
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
}creato
    
