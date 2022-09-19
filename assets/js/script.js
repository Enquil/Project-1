
/**
 * Opens modal with contact info, when pressing link to webshop 
 * Or when trying to manipulate the bookingform
 */
function openModal() {
    let modal = document.getElementById("modal-window");
    modal.style.display = "block";
    modal.innerHTML += `<div id="modal-box">
                            <span style="color: black" class="close-modal" onclick="closeModal">X</span>
                        </div>`;
}

function closeModal() {
    modal.style.display = "none";
}
