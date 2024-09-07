// Traduzioni per le diverse lingue
const translations = {
    it: {
        welcome: "Benvenuto su Scotch",
        create_project: "Crea un nuovo progetto",
        project_created: "Progetto creato con successo!",
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
    
    // Cambia i testi dinamicamente
    document.querySelector('h1').innerText = langData.welcome;
    document.getElementById('createProjectBtn').innerText = langData.create_project;

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
}

// Funzione per creare un progetto e reindirizzare alla pagina del progetto
document.getElementById('newProjectForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const projectName = document.getElementById('projectName').value;
    const projectDescription = document.getElementById('projectDescription').value;

    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    const projectId = projects.length + 1;
    projects.push({ id: projectId, name: projectName, description: projectDescription });
    localStorage.setItem('projects', JSON.stringify(projects));

    alert(translations[document.getElementById('language').value].project_created);

    // Reindirizza alla pagina del progetto appena creato
    window.location.href = `project.html?id=${projectId}`;
});
