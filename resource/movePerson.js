// move the person around
const button = document.getElementById('clickMe');
const boundary = document.getElementById('boundary');

button.addEventListener('mouseover', moveButton);

function sit() {
    button.innerHTML = '<img src="resource/images/sit.svg" id="me">'
}

function moveButton(event) {
    button.innerHTML = `<img src="resource/images/run.svg" id="me" onclick="sit()">catch me!`
    const buttonRect = button.getBoundingClientRect();
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    const distance = 110;

    const deltaX = cursorX - buttonRect.left - buttonRect.width / 2;
    const deltaY = cursorY - buttonRect.top - buttonRect.height / 2;

    const angle = Math.atan2(deltaY, deltaX);
    const newX = cursorX - distance * Math.cos(angle) - buttonRect.width / 2;
    const newY = cursorY - distance * Math.sin(angle) - buttonRect.height / 2;

    // Ensure the button stays within the boundary
    const maxX = boundary.offsetWidth - buttonRect.width;
    const maxY = boundary.offsetHeight - buttonRect.height;

    button.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
    button.style.top = `${Math.max(0, Math.min(newY, maxY))}px`;
}


