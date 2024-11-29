<script type="text/javascript">
        (function() {
            emailjs.init('brahbong@gmail.com'); // Replace with your EmailJS user ID
    
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent form from submitting the traditional way
    
                // Collect form data
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    message: document.getElementById('message').value,
                };
    
                // Send the email using EmailJS
                emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
                    .then(function(response) {
                        console.log('Message sent successfully:', response);
                        alert('Votre message a été envoyé avec succès!');
                    }, function(error) {
                        console.error('Error sending message:', error);
                        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
                    });
            });
        })();
    </script>