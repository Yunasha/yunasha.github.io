
    // JavaScript for showing the content based on hover
    const skypeButton = document.querySelector('.skype');
    const youtubeButton = document.querySelector('.youtube');
    const githubButton = document.querySelector('.github');
    
    const navbarInfoContent = document.querySelector('.navbar-info-content');

    // Show content when Skype button is hovered
    skypeButton.addEventListener('mouseover', () => {
        // navbarInfoContent.style.display = 'block';
        navbarInfoContent.innerHTML = '<p class="navbar-info-content-text">do nothing actually</p>';
    });

    // Show content when YouTube button is hovered
    youtubeButton.addEventListener('mouseover', () => {
        // navbarInfoContent.style.display = 'block';
        navbarInfoContent.innerHTML = '<p class="navbar-info-content-text">My YouTube channel :3</p>';
    });

    githubButton.addEventListener('mouseover', () => {
        // navbarInfoContent.style.display = 'block';
        navbarInfoContent.innerHTML = '<p class="navbar-info-content-text">GitHub of my repositories</p>';
    });

    // Hide content when mouse leaves
    skypeButton.addEventListener('mouseout', () => {
        navbarInfoContent.innerHTML = '<p class="navbar-info-content-text">Hover on media social links to see info</p>'
        // navbarInfoContent.style.display = 'none';
    });

    youtubeButton.addEventListener('mouseout', () => {
        navbarInfoContent.innerHTML = '<p class="navbar-info-content-text">Hover on media social links to see info</p>'
        // navbarInfoContent.style.display = 'none';
    });

    githubButton.addEventListener('mouseout', () => {
        navbarInfoContent.innerHTML = '<p class="navbar-info-content-text">Hover on media social links to see info</p>'
        // navbarInfoContent.style.display = 'none';
    });

    // Get today's date
    const today = new Date();

    // Format the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' }; // Example: January 22, 2025
    const formattedDate = today.toLocaleDateString('en-AU', options);

    // Display the date
    document.getElementById('date').innerText = `Today's date is: ${formattedDate}`;
