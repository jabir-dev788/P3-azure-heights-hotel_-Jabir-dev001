// ========================================
// CONFIGURATION & CONSTANTS
// ========================================
const CONFIG = {
    SCROLL_THRESHOLD: 50,
    SMOOTH_SCROLL_OFFSET: 80,
    ANIMATION_DURATION: 0.3,
    SCROLL_DEBOUNCE_DELAY: 100
};

const VALIDATION_RULES = {
    name: {
        required: true,
        minLength: 2,
        pattern: null,
        message: 'Name is required (minimum 2 characters)'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    message: {
        required: true,
        minLength: 10,
        message: 'Message is required (minimum 10 characters)'
    }
};

// ========================================
// DOM UTILITIES
// ========================================
const DOM = {
    query: (selector) => document.querySelector(selector),
    queryAll: (selector) => document.querySelectorAll(selector),
    id: (id) => document.getElementById(id),
    on: (element, event, handler) => element?.addEventListener(event, handler),
    onAll: (elements, event, handler) => elements?.forEach(el => el.addEventListener(event, handler)),
    addClass: (element, className) => element?.classList.add(className),
    removeClass: (element, className) => element?.classList.remove(className),
    toggleClass: (element, className) => element?.classList.toggle(className),
    hasClass: (element, className) => element?.classList.contains(className)
};

// ========================================
// UTILITY FUNCTIONS
// ========================================
const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
};

// ========================================
// MOBILE MENU MODULE
// ========================================
const MobileMenu = (() => {
    const hamburger = DOM.query('.hamburger');
    const navLinks = DOM.query('.nav-links');
    const links = DOM.queryAll('.nav-links a');

    const closeMenu = () => {
        DOM.removeClass(hamburger, 'active');
        DOM.removeClass(navLinks, 'active');
    };

    const toggleMenu = () => {
        DOM.toggleClass(hamburger, 'active');
        DOM.toggleClass(navLinks, 'active');
    };

    const init = () => {
        if (!hamburger) return;
        
        DOM.on(hamburger, 'click', toggleMenu);
        links.forEach(link => DOM.on(link, 'click', closeMenu));
    };

    return { init };
})();

// ========================================
// HEADER SCROLL EFFECT MODULE
// ========================================
const HeaderScroll = (() => {
    const header = DOM.query('header');
    
    const handleScroll = debounce(() => {
        if (!header) return;
        DOM.toggleClass(header, 'scrolled', window.scrollY > CONFIG.SCROLL_THRESHOLD);
    }, CONFIG.SCROLL_DEBOUNCE_DELAY);

    const init = () => {
        if (!header) return;
        window.addEventListener('scroll', handleScroll);
    };

    return { init };
})();

// ========================================
// FORM VALIDATION MODULE
// ========================================
const FormValidator = (() => {
    const validateField = (fieldName, value) => {
        const rule = VALIDATION_RULES[fieldName];
        if (!rule) return { valid: true };

        if (rule.required && value.trim() === '') {
            return { valid: false, message: rule.message };
        }

        if (rule.minLength && value.trim().length < rule.minLength) {
            return { valid: false, message: rule.message };
        }

        if (rule.pattern && !rule.pattern.test(value)) {
            return { valid: false, message: rule.message };
        }

        return { valid: true };
    };

    const displayError = (input, message = '') => {
        const errorElement = input.nextElementSibling;
        if (!errorElement) return;

        if (message) {
            errorElement.textContent = message;
            DOM.addClass(errorElement, 'show');
        } else {
            DOM.removeClass(errorElement, 'show');
        }
    };

    const validate = (formElement) => {
        let isValid = true;
        const inputs = formElement.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            const fieldName = input.id;
            const { valid, message } = validateField(fieldName, input.value);
            
            if (!valid) {
                displayError(input, message);
                isValid = false;
            } else {
                displayError(input);
            }
        });

        return isValid;
    };

    return { validate, validateField, displayError };
})();

// ========================================
// CONTACT FORM MODULE
// ========================================
const ContactForm = (() => {
    const form = DOM.id('contactForm');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!FormValidator.validate(form)) {
            return;
        }

        try {
            // Collect form data
            const formData = {
                name: DOM.id('name').value.trim(),
                email: DOM.id('email').value.trim(),
                message: DOM.id('message').value.trim()
            };

            // Simulate API call (replace with actual endpoint)
            await simulateApiCall(formData);

            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            form.reset();
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('Failed to send message. Please try again.', 'error');
        }
    };

    const simulateApiCall = (data) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(data), 500);
        });
    };

    const init = () => {
        if (!form) return;
        DOM.on(form, 'submit', handleSubmit);
    };

    return { init };
})();

// ========================================
// SMOOTH SCROLL MODULE
// ========================================
const SmoothScroll = (() => {
    const handleAnchorClick = (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;

        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        e.preventDefault();

        const targetElement = DOM.query(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - CONFIG.SMOOTH_SCROLL_OFFSET,
                behavior: 'smooth'
            });
        }
    };

    const init = () => {
        document.addEventListener('click', handleAnchorClick);
    };

    return { init };
})();

// ========================================
// SWIPER GALLERY MODULE
// ========================================
const GallerySlider = (() => {
    let swiper = null;

    const init = () => {
        if (typeof Swiper === 'undefined') {
            console.warn('Swiper library not loaded');
            return;
        }

        swiper = new Swiper('.gallery-slider', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            speed: 500,
            loop: true,
            preloadImages: false,
            lazy: {
                loadPrevNext: true
            }
        });
    };

    return { init };
})();

// ========================================
// FEATHER ICONS & AOS INITIALIZATION
// ========================================
const InitializeLibraries = (() => {
    const init = () => {
        // Initialize Feather Icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }

        // Initialize AOS (Animate On Scroll)
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out-quart',
                once: true,
                offset: 100
            });
        }
    };

    return { init };
})();

// ========================================
// APP INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize all modules
        MobileMenu.init();
        HeaderScroll.init();
        ContactForm.init();
        SmoothScroll.init();
        GallerySlider.init();
        InitializeLibraries.init();

        console.log('✓ All modules initialized successfully');
    } catch (error) {
        console.error('Initialization error:', error);
    }
});