
/**
 * Opens modal with contact info, when pressing link to webshop 
 * Or trying to manipulate the bookingform
 */
function openModal() {
    let modal = document.getElementById("modal-window");
    modal.style.display = "block";
    modal.innerHTML += `<div id="modal-box">
                            <span id="close-modal" style="property:value;">X</span>
                        </div>`;
}
