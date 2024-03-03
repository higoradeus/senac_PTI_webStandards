document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validação do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        // Simulação de envio do formulário (pode ser substituído pelo código real de envio)
        setTimeout(function() {
            contactForm.reset();
            successMessage.style.display = 'block';
            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 3000); // Oculta a mensagem de sucesso após 3 segundos
        }, 1000); // Simula um atraso de 1 segundo para envio

    });
});