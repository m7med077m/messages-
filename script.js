document.addEventListener('DOMContentLoaded', (event) => {
    const scrollTopBtn = document.getElementById('scrollTop');
    const chatContainer = document.getElementById('chatContainer');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Scroll to top button functionality
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        chatContainer.classList.toggle('dark-mode');
    });
});
