// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
  }
  
  // Close menu when clicking a link
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu').classList.remove('show');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

document.querySelectorAll('.card-career[data-email-subject]').forEach(card => {
  card.addEventListener('click', function() {
    const subject = this.getAttribute('data-email-subject');
    const recipients = 'kareoprojects@gmail.com,motake.beauty75@gmail.com';
    const encodedSubject = encodeURIComponent(subject);
    window.location.href = `mailto:${recipients}?subject=${encodedSubject}`;
  });
  card.style.cursor = 'pointer';
});
