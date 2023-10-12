var boutonsOuvrirModal = document.querySelectorAll(".ouvrirModal");

// listening for clicks to open the modals
boutonsOuvrirModal.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        var modalId = this.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        console.log(modalId)
        console.log(modal)
        modal.style.display = "block";
    });
});

var boutonsFermerModal = document.querySelectorAll(".fermerModal");

// listening for clicks to close the modals
boutonsFermerModal.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        var modal = this.closest(".modal");
        modal.style.display = "none";
    });
});

// closing modal if clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});
