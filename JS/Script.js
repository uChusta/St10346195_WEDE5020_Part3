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
    alert("Hello " + name + " " + surname + ",\n\nThank you for reaching out! We have received your message and will get back to you at " + email + " shortly.\n\nBest regards,\nThe Team");
}

function validateRepairForm() {
    // Get form values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var service = document.getElementById("service").value;
    var details = document.getElementById("details").value.trim();

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
    alert("Hello " + name + ",\n\nThank you for submitting your repair request! We have received your details and will get back to you at " + email + " shortly.\n\nBest regards,\nThe Team");
    return true;
}
