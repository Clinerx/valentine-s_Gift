// Function to open the modal only when a card is clicked
function openModal(id) {
    let modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "flex";
    }
}

// Function to close the modal
function closeModal(id) {
    let modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
    }
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Ensure all modals are hidden when the page reloads
window.onload = function() {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.style.display = "none";
    });
};
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

