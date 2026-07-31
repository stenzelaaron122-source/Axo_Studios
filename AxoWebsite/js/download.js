document.addEventListener('DOMContentLoaded', () => {
    // Deine IDs und Klassen aus der index.html
    const modal = document.getElementById('downloadModal');
    const closeBtn = document.querySelector('.close-download');
    const downloadTitle = document.getElementById('downloadTitle');
    const downloadDescription = document.getElementById('downloadDescription');
    const downloadButton = document.getElementById('downloadButton');
    const freeCards = document.querySelectorAll('.free-card');

    // 1. Modal öffnen und Daten dynamisch einsetzen
    freeCards.forEach(card => {
        card.addEventListener('click', () => {
            // Daten aus der geklickten Karte auslesen
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            const file = card.getAttribute('data-file');

            // Texte im Modal updaten
            if (title) downloadTitle.textContent = title;
            if (desc) downloadDescription.textContent = desc;
            
            // Klick auf den Download-Button lädt die richtige Datei herunter
            downloadButton.onclick = () => {
                // Bei echten Dateien startet window.location.href den Download
                window.location.href = file; 
            };

            // Modal sichtbar machen und Scrollen im Hintergrund blockieren
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; 
        });
    });

    // 2. Modal schließen (Klick auf das X)
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // 3. Modal schließen (Klick auf den verschwommenen Hintergrund)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});