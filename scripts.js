document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Define your Discord webhook URL
    const webhookUrl = 'https://discord.com/api/webhooks/1262647673295601696/_utrwy83B9J5EmDcHlNQX_qyKq38ZFKZd6Xa9IsBgzhOfSf5W2pZM7Qoksv_GOpzh3km';

    // Create a FormData object from the form
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Construct the message payload
    const payload = {
        content: `**Contact Form Submission**\n**Name:** \`\`${name}\`\`\n**Email:** \`\`${email}\`\`\n**Message:** \`\`\`${message}\`\`\``
    };

    // Send the POST request to Discord
    fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message! We will get back to you soon.');
        } else {
            alert('There was a problem sending your message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem sending your message.');
    });
});
