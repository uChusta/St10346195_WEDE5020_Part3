// Sidebar active link tracking
document.addEventListener('DOMContentLoaded', function () {
    var sidebarLinks = document.querySelectorAll('.sidebar a');
    
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove active class from all links
            sidebarLinks.forEach(function (l) {
                l.classList.remove('active');
            });
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Optional: Set active link based on current page hash on page load
    var currentHash = window.location.hash;
    if (currentHash) {
        sidebarLinks.forEach(function (link) {
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active');
            }
        });
    }

    // Sidebar collapse/expand toggle for smaller screens
    // ADDED: The following block implements a hamburger toggle for tablet/mobile.
    // - The menu receives the `collapsible` class so CSS can animate height.
    // - On desktop widths (>1024px) we force the sidebar to remain open by
    //   adding the `.open` class; on smaller widths it's closed by default.
    var sidebar = document.querySelector('.sidebar');
    var toggle = document.querySelector('.sidebar-toggle');
    var sidebarMenu = document.getElementById('sidebarMenu');

    if (sidebar && toggle && sidebarMenu) {

        // mark the menu as collapsible so CSS can hide/show it
        sidebarMenu.classList.add('collapsible');

        // Ensure correct default state depending on screen size: keep open on desktop
        // ADDED: setSidebarStateForWidth keeps the sidebar open on desktop and
        // closed on smaller screens. It's called on load and on resize.
        function setSidebarStateForWidth() {
            if (window.innerWidth > 1024) {
                sidebar.classList.add('open');
                toggle.setAttribute('aria-expanded', 'true');
            } else {
                sidebar.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        }

        // Set initial state
        setSidebarStateForWidth();

        // Update on resize
        window.addEventListener('resize', function () {
            setSidebarStateForWidth();
        });

        // Toggle open/closed when the hamburger button is clicked (mobile/tablet)
        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            var isOpen = sidebar.classList.toggle('open');
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when a sidebar link is clicked (useful on mobile)
        sidebarLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 1024) {
                    sidebar.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close the sidebar if user clicks outside it
        document.addEventListener('click', function (ev) {
            if (window.innerWidth <= 1024 && sidebar.classList.contains('open')) {
                var inside = sidebar.contains(ev.target);
                if (!inside) {
                    sidebar.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
});
// Product filtering: show/hide product cards based on selected category
function filterProducts(category) {
    var cards = document.querySelectorAll('.products-grid .card');
    if (!cards) return;
    cards.forEach(function(card) {
        var cat = card.getAttribute('data-category') || '';
        if (category === 'all' || category === '' || cat === category) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize the filter control whether the script runs before or after DOMContentLoaded
(function initProductFilter() {
    function setup() {
        var filter = document.getElementById('productFilter');
        if (!filter) return;
        // initialize to show all (or current value)
        filterProducts(filter.value || 'all');
        filter.addEventListener('change', function(e) {
            filterProducts(e.target.value);
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }
})();

//contactform validation
function validateContactForm() {
    // Get form values
    var name = document.getElementById("name1").value.trim();
    var surname = document.getElementById("surname1").value.trim();
    var email = document.getElementById("email1").value.trim();
    var phone = document.getElementById("phone1").value.trim();
    var subject = document.getElementById("subject1").value.trim();
    var details = document.getElementById("details1").value.trim();

    // Check required fields
    if (name === "") {
        alert("Name is required.");
        return false;
    }
    if (surname === "") {
        alert("Surname is required.");
        return false;
    }
    if (email === "") {
        alert("Email is required.");
        return false;
    }
    if (subject === "") {
        alert("Subject is required.");
        return false;
    }
    if (details === "") {
        alert("Message is required.");
        return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate phone if provided (optional, but if entered, check for 10 digits)
    if (phone !== "" && !/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // If all validations pass
    // Return true so calling code can proceed (submit or simulated send)
    return true;
}

function validateRepairForm() {
    // Get form values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var service = document.getElementById("service").value;
    var message = document.getElementById("message").value.trim();

    // Check required fields
    if (name === "") {
        alert("Name is required.");
        return false;
    }
    if (email === "") {
        alert("Email is required.");
        return false;
    }
    if (service === "") {
        alert("Please select a service.");
        return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate phone if provided (optional, but if entered, check for 10 digits)
    if (phone !== "" && !/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // If all validations pass
    // Return true so calling code can proceed
    return true;
}

// Attach form submit handlers to process forms via JavaScript (prevent default submission)
// Initialize form handlers and email sending helpers
(function initFormHandlers() {
    // Configuration: choose provider and fill credentials/endpoint if using a third-party service.
    // Options for provider:'formspree'
    var emailConfig = {
        provider: 'formspree', // change to 'emailjs' or 'formspree' when configured
        emailjs: {
            userID: 'YOUR_EMAILJS_USER_ID', // e.g. user_xxx
            serviceID: 'YOUR_SERVICE_ID',   // e.g. service_xxx
            templateID: 'YOUR_TEMPLATE_ID'  // e.g. template_xxx
        },
        formspreeContactEndpoint: 'https://formspree.io/f/xyzozade', // replace with your contact form Formspree endpoint
        formspreeRepairEndpoint: 'https://formspree.io/f/mrbjbvwy' // repair form endpoint
    };

    function showFormMessage(form, message, isError) {
        if (!form) return;
        var existing = form.querySelector('.form-message');
        if (!existing) {
            existing = document.createElement('div');
            existing.className = 'form-message';
            existing.style.marginTop = '8px';
            existing.style.fontWeight = '600';
            form.appendChild(existing);
        }
        existing.textContent = message;
        existing.style.color = isError ? '#ff5555' : '#1E90FF';
    }

    // Separate email sending functions for contact form
    function sendContactEmail(data, provider) {
        var name = data.get('name1') || '';
        var surname = data.get('surname1') || '';
        var email = data.get('email1') || '';
        var phone = data.get('phone1') || '';
        var subject = data.get('subject1') || 'Contact form submission';
        var message = data.get('details1') || '';

        if (provider === 'emailjs') {
            return sendViaEmailJS(emailConfig.emailjs, { name: name, surname: surname, email: email, phone: phone, subject: subject, message: message });
        }
        if (provider === 'formspree') {
            return sendViaFormspree(emailConfig.formspreeContactEndpoint, data);
        }
        // Fallback: mailto
        var body = 'Name: ' + name + '\nSurname: ' + surname + '\nPhone: ' + phone + '\n\n' + message;
        sendViaMailto(subject, body, '');
        return Promise.resolve(); // mailto doesn't return a promise, but we can resolve immediately
    }

    // Separate email sending functions for repair form
    function sendRepairEmail(data, provider) {
        var name = data.get('name') || '';
        var email = data.get('email') || '';
        var phone = data.get('phone') || '';
        var service = data.get('service') || '';
        var details = data.get('message') || '';

        if (provider === 'emailjs') {
            return sendViaEmailJS(emailConfig.emailjs, { name: name, email: email, phone: phone, service: service, details: details });
        }
        if (provider === 'formspree') {
            return sendViaFormspree(emailConfig.formspreeRepairEndpoint, data);
        }
        // Fallback: mailto
        var subject = 'Repair request: ' + service;
        var body = 'Name: ' + name + '\nPhone: ' + phone + '\n\n' + details;
        sendViaMailto(subject, body, '');
        return Promise.resolve();
    }

    function sendViaMailto(subject, body, to) {
        to = to || 'support@cloudtech.local'; // fallback email
        var mailtoLink = 'mailto:' + encodeURIComponent(to) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        // Create a temporary link and click it to open mail client
        var link = document.createElement('a');
        link.href = mailtoLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function sendViaFormspree(endpoint, formData) {
        return fetch(endpoint, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        }).then(function(resp){
            if (!resp.ok) throw new Error('Network response was not ok');
            return resp.json().catch(function(){ return {}; });
        });
    }

    function loadEmailJSSDK() {
        return new Promise(function(resolve, reject){
            if (window.emailjs) return resolve(window.emailjs);
            var s = document.createElement('script');
            s.src = 'https://cdn.emailjs.com/sdk/2.3.2/email.min.js';
            s.onload = function(){
                if (window.emailjs) return resolve(window.emailjs);
                reject(new Error('EmailJS SDK failed to load'));
            };
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }

    function sendViaEmailJS(cfg, templateParams) {
        return loadEmailJSSDK().then(function(emailjs){
            if (!emailjs.initCalled) {
                try { emailjs.init(cfg.userID); } catch (e) { /* ignore */ }
                emailjs.initCalled = true;
            }
            return emailjs.send(cfg.serviceID, cfg.templateID, templateParams);
        });
    }

    function setupContact() {
        var form = document.getElementById('contactForm');
        if (!form) return;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!validateContactForm()) return;
            var submitBtn = form.querySelector('input[type=submit]');
            if (submitBtn) submitBtn.disabled = true;

            var data = new FormData(form);
            var name = data.get('name1') || '';
            var surname = data.get('surname1') || '';
            var email = data.get('email1') || '';
            var phone = data.get('phone1') || '';
            var subject = data.get('subject1') || 'Contact form submission';
            var message = data.get('details1') || '';

            sendContactEmail(data, emailConfig.provider).then(function(){
                showFormMessage(form, 'Thank you — your message was sent.', false);
                form.reset();
            }).catch(function(err){
                showFormMessage(form, 'Sending failed — please try again or contact us directly.', true);
                console.error(err);
            }).finally(function(){ if (submitBtn) submitBtn.disabled = false; });
        });
    }

    function setupRepair() {
        var form = document.getElementById('repairFormForm');
        if (!form) return;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!validateRepairForm()) return;
            var submitBtn = form.querySelector('input[type=submit]');
            if (submitBtn) submitBtn.disabled = true;

            var data = new FormData(form);
            var name = data.get('name') || '';
            var email = data.get('email') || '';
            var phone = data.get('phone') || '';
            var service = data.get('service') || '';
            var message = data.get('message') || '';

            sendRepairEmail(data, emailConfig.provider).then(function(){
                showFormMessage(form, 'Repair request sent — we will contact you shortly.', false);
                form.reset();
            }).catch(function(err){
                showFormMessage(form, 'Sending failed — please try again.', true);
                console.error(err);
            }).finally(function(){ if (submitBtn) submitBtn.disabled = false; });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            setupContact();
            setupRepair();
        });
    } else {
        setupContact();
        setupRepair();
    }
})();
