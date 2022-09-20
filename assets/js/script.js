let modal = document.getElementById("modal-window");

/**
 * Opens modal with contact info when pressing link to webshop 
 * Or when trying to manipulate the bookingform
 */
function openModal() {
    modal.style.display = "block";
    modal.innerHTML += `<div id="modal-box">
                            <h2 class="inline-block" style="font-size: 3rem">Ooops..</h2><button class="close-modal, inline-block" style="font-size: 3rem" onclick="closeModal()">X</button>
                            <p style="font-size: 1.5rem; margin-left:5%; margin-right:5%; line-height: 1.5">Looks like this is broken, ask my LAZY web developer why that is :)<br>
                            In the meantime, i am reachable in any of the following ways: <br>
                            Phone: 070-123 45 67<br>
                            OR <br>
                            Almen-Ink@gmail.com
                            </p>
                        </div>`;
}

/**
 * Closes modal on pressin the span X
 */
function closeModal() {
    modal.style.display = "none";
}

//All credit to https://www.w3schools.com/howto/howto_css_modals.asp for this function. 
/**
 * Function that closes the modal when clicking anywhere outside of the div #modal-box.
 */
window.onclick = function(event) { 
    if (event.target == modal) {
      modal.style.display = "none";
    }
};
