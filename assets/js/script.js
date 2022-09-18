
function modal() {
    body = document.getElementsByTagName("body");
    body.innerHTML += `
    <div id="modal-window"><div id="modal-box">
    <p id="modal-contact">
    Sorry, this does not exist yet.
    If you want to book a session or buy other art, please use the info down below to contact me. <br>
    Email: Almen-Ink@gmail.com <br>
    Phone: 070-123 45 67
    </p>
    <span onclick="close" id="close-modal">X</span>
    </div></div>
    `;
}

function closeModal() {
    document.getElementById("modal-window");
    modal.remove();
}
