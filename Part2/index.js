// Fonction pour ouvrir le panneau latéral
const openOffCanvas = () => {
    document.querySelector('.nav-offcanvas').classList.add('open');
    document.querySelector('.offcanvas-overlay').classList.add('on');
};

// Fonction pour fermer le panneau latéral
const closeOffCanvas = () => {
    document.querySelector('.nav-offcanvas').classList.remove('open');
    document.querySelector('.offcanvas-overlay').classList.remove('on');
};

// Gestionnaire d'événement au clic sur #offCanvas
document.querySelector('#offCanvas').addEventListener('click', openOffCanvas);

// Gestionnaire d'événement au clic sur #offCanvasClose
document.querySelector('#offCanvasClose').addEventListener('click', closeOffCanvas);

// Gestionnaire d'événement au clic sur .offcanvas-overlay
document.querySelector('.offcanvas-overlay').addEventListener('click', closeOffCanvas);
