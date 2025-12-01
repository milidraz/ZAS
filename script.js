// Jahr im Footer automatisch setzen
document.getElementById("year").textContent = new Date().getFullYear();

// Kontaktformular – nur Demo, kein echtes Senden
function handleSubmit(event) {
  event.preventDefault();
  alert(
    "Vielen Dank für Ihre Nachricht! In dieser Demo-Version wird das Formular nicht wirklich versendet."
  );
}
