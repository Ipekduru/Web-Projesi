// Vue.js ile form kontrolü
new Vue({
    el: '#contactForm',
    methods: {
        validateWithVue: function() {
            // İsim kontrolü
            var name = document.getElementById('name').value.trim();
            if (name === '') {
                alert('Lütfen isminizi girin.');
                return;
            }

            // E-posta kontrolü
            var email = document.getElementById('email').value.trim();
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Geçerli bir e-posta adresi girin.');
                return;
            }

            // Mesaj kontrolü
            var message = document.getElementById('message').value.trim();
            if (message === '') {
                alert('Lütfen bir mesaj girin.');
                return;
            }

            alert('Form başarıyla gönderildi.');
        }
    }
});
