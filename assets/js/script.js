let modal = document.getElementById("modal-window");

/**
 * Opens modal with contact info, when pressing link to webshop 
 * Or when trying to manipulate the bookingform
 */
function openModal() {
    modal.style.display = "block";
    modal.innerHTML += `<div id="modal-box">
                            <h2 style="font-size: 3rem">Ooops..<span class="close-modal" onclick="closeModal()">X</span></h2>
                            <p style="font-size: 1.5rem; margin-left:5%; margin-right:5%; line-height: 1.5">Looks like this is broken, ask my LAZY web developer why that is :)<br>
                            In the meantime, i am reachable in any of the following ways: <br>
                            Phone: 070-123 45 67<br>
                            OR <br>
                            Almen-Ink@gmail.com
                            </p>
                        </div>`;
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
