document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // // Get form elements
    // const nameInput = document.getElementById('name');
    // const emailInput = document.getElementById('email');
    // const messageInput = document.getElementById('message');
    // const submitBtn = document.getElementById('submitBtn');
    // const formStatus = document.getElementById('formStatus');
    
    // // Handle form submission
    // submitBtn.addEventListener('click', function() {
    //     // Basic validation
    //     if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
    //         formStatus.textContent = 'Please fill out all fields';
    //         formStatus.className = 'form-status error';
    //         formStatus.classList.remove('hidden');
    //         return;
    //     }
        
    //     // Email validation
    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailPattern.test(emailInput.value.trim())) {
    //         formStatus.textContent = 'Please enter a valid email address';
    //         formStatus.className = 'form-status error';
    //         formStatus.classList.remove('hidden');
    //         return;
    //     }
        
    //     // Get form data
    //     const name = nameInput.value;
    //     const email = emailInput.value;
    //     const message = messageInput.value;
        
    //     // Construct mailto URL
    //     const subject = `Contact from ${name}`;
    //     const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    //     const mailtoUrl = `mailto:kevyn@kevynmalpass.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
    //     // Show success message
    //     formStatus.textContent = 'Opening your email client...';
    //     formStatus.className = 'form-status success';
    //     formStatus.classList.remove('hidden');
        
    //     // Open email client after a short delay
    //     setTimeout(() => {
    //         window.location.href = mailtoUrl;
            
    //         // Reset form after a delay
    //         setTimeout(() => {
    //             nameInput.value = '';
    //             emailInput.value = '';
    //             messageInput.value = '';
    //             formStatus.classList.add('hidden');
    //         }, 3000);
    //     }, 1000);
    // });
    
    // Create modal for "Coming Soon" message
    const modal = document.createElement('div');
    modal.className = 'modal hidden';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Blog Coming Soon</h3>
            <p>My blog is currently under development. Check back soon for updates!</p>
            <button class="modal-close-btn">OK</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Handle Blog link click
    const blogLink = document.querySelector('nav a[href="#"]');
    blogLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('hidden');
    });
    
    // Handle modal close button click
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    modalCloseBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
    });
    
    // Close modal when clicking outside the modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
