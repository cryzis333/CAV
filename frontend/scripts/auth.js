const formReg = document.getElementById("formReg");
const formLogin = document.getElementById('formLogin');

const regEmail = formReg.elements.email;
const regUsername = formReg.elements.username;
const regPassword = formReg.elements.password;
const regPasswordRepeat = formReg.elements.passwordRepeat;

const loginUsername = formLogin.elements.username;
const loginPassword = formLogin.elements.password;

function createNotification(message, type = 'success') {
    const notification = document.createElement('section');
    notification.classList.add('notification', `notification-${type}`);
    notification.innerHTML = `
                <span class="notification-text">${"invalid email"}</span>
                <button class="notification-close">&times;</button>
                `;
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
    document.body.appendChild(notification);
}


    formReg.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = regEmail.value;
        const username = regUsername.value;
        const password = regPassword.value;
        const passwordRepeat = regPasswordRepeat.value;

        if (!email.includes('@')) {
            createNotification('invalid email', 'error');
        } else if (password !== passwordRepeat) {
            alert('The password do not match.')
        } else {
            const data = {
                email,
                username,
                password
            };
            await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) createNotification('registered');
            else createNotification('registration failed', 'error');
        }
    });