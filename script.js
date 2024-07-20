
        function switchToDesktop() {
            document.body.classList.remove('mobile-view');
            document.body.classList.add('desktop-view');
        }

        function switchToMobile() {
            document.body.classList.remove('desktop-view');
            document.body.classList.add('mobile-view');
        }

        function validateEmail() {
            const emailInput = document.getElementById('email');
            const errorMessage = document.getElementById('error-message');
            const email = emailInput.value;

            if (!email || !validateEmailFormat(email)) {
                errorMessage.textContent = 'Please enter a valid email address.';
                return false;
            }

            errorMessage.textContent = '';
            alert('Email submitted successfully!');
            return true;
        }

        function validateEmailFormat(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        // Initially set the view based on screen size
        window.onload = function() {
            if (window.innerWidth <= 768) {
                switchToMobile();
            } else {
                switchToDesktop();
            }
        };

        // Listen for window resize and adjust the view accordingly
        window.onresize = function() {
            if (window.innerWidth <= 768) {
                switchToMobile();
            } else {
                switchToDesktop();
            }
        };
