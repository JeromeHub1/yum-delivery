//Hamburger// 
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    //Success Message//
    const paymentForm = document.getElementById('payment-form');
    const paymentSection = document.getElementById('payment');
    const successSection = document.getElementById('success');

    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      paymentSection.style.display = 'none';
      successSection.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });