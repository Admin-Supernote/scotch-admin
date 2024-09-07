// Funzione per aprire il modale di registrazione
function openRegister() {
    document.getElementById('registerModal').style.display = 'flex';
}

// Funzione per aprire il modale di login
function openLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Funzione per chiudere i modali
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Gestione della registrazione
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Salva l'utente nel localStorage
    localStorage.setItem('user', JSON.stringify({ email, username, password }));
    
    alert('Registrazione avvenuta con successo!');
    
    closeModal('registerModal');
});

// Gestione del login
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

// Gestione creazione progetto
document.getElementById('newProjectForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const projectName = document.getElementById('projectName').value;
    const projectDescription = document.getElementById('projectDescription').value;

    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.push({ name: projectName, description: projectDescription });
    localStorage.setItem('projects', JSON.stringify(projects));

    alert('Progetto creato con successo!');
    window.location.href = 'projects.html';
});
