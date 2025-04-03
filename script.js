// DigitalAlchemy - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Sticky Navigation
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Chatbot Toggle
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const closeChat = document.querySelector('.close-chat');
    
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.style.display = 'block';
        });
    }
    
    if (closeChat) {
        closeChat.addEventListener('click', function() {
            chatbotContainer.style.display = 'none';
        });
    }
    
    // Simple Chatbot Functionality
    const chatInput = document.querySelector('.chatbot-input input');
    const chatSendBtn = document.querySelector('.chatbot-input button');
    const chatMessages = document.querySelector('.chatbot-messages');
    
    const botResponses = [
        "Thanks for your message! How can I help you with your AI needs today?",
        "That's interesting! Would you like to know more about our website creation services?",
        "Our AI consultancy team can help you implement cutting-edge solutions for your business.",
        "DigitalAlchemy specializes in transforming businesses through AI. How can we help you?",
        "Would you like to schedule a free consultation with one of our AI experts?",
        "Our social media management services can boost your online presence significantly."
    ];
    
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user' : 'bot');
        
        const messagePara = document.createElement('p');
        messagePara.textContent = message;
        
        messageDiv.appendChild(messagePara);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom of messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getRandomResponse() {
        return botResponses[Math.floor(Math.random() * botResponses.length)];
    }
    
    function handleUserMessage() {
        const message = chatInput.value.trim();
        if (message !== '') {
            addMessage(message, true);
            chatInput.value = '';
            
            // Simulate bot typing
            setTimeout(() => {
                addMessage(getRandomResponse());
            }, 1000);
        }
    }
    
    if (chatSendBtn) {
        chatSendBtn.addEventListener('click', handleUserMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleUserMessage();
            }
        });
    }
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simulate form submission
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you shortly.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .process-step, .portfolio-item, .testimonial-item, .pricing-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const elementsToAnimate = document.querySelectorAll('.service-card, .process-step, .portfolio-item, .testimonial-item, .pricing-card');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
});
