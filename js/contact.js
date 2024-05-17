// Formu temizle
function clearForm() {
    document.getElementById('contactForm').reset();
}

// Vue.js ile form kontrolü
function validateWithVue() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Geçerli bir e-posta adresi girin.');
        return;
    }

    alert('Vue.js ile form kontrolü başarılı.');
}

// JavaScript ile form kontrolü
function validateWithJavaScript() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Geçerli bir e-posta adresi girin.');
        return;
    }

    alert('JavaScript ile form kontrolü başarılı.');
}
