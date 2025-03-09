document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    
    // Handle form submission
    submitBtn.addEventListener('click', function() {
        // Basic validation
        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            formStatus.textContent = 'Please fill out all fields';
            formStatus.className = 'error';
            formStatus.classList.remove('hidden');
            return;
        }
        
        // Get form data
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;
        
        // Construct mailto URL
        const subject = `Resume Request from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoUrl = `mailto:kevyn@kevynmalpass.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Show success message
        formStatus.textContent = 'Opening your email client...';
        formStatus.className = 'success';
        formStatus.classList.remove('hidden');
        
        // Open email client after a short delay
        setTimeout(() => {
            window.location.href = mailtoUrl;
            
            // Reset form after a delay
            setTimeout(() => {
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
                formStatus.classList.add('hidden');
            }, 3000);
        }, 1000);
    });
    
    // Add blinking cursor effect to inputs
    const inputs = document.querySelectorAll('.terminal-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('terminal-focus');
        });
        
        input.addEventListener('blur', function() {
            this.classList.remove('terminal-focus');
        });
    });
});
