/* ============================================================
   ORA CARE DENTAL CLINIC - script.js
   ============================================================ */

/* ---- Navbar scroll effect -------------------------------- */
(function () {
  var navbar = document.getElementById('navbar');
  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ---- Mobile Menu ---------------------------------------- */
(function () {
  var hamburger   = document.getElementById('hamburger');
  var mobileMenu  = document.getElementById('mobile-menu');
  var overlay     = document.getElementById('mobile-overlay');
  var closeBtn    = document.getElementById('mobile-close');

  function openMenu() {
    mobileMenu.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (closeBtn)  closeBtn.addEventListener('click', closeMenu);
  if (overlay)   overlay.addEventListener('click', closeMenu);

  /* Close menu when a link is clicked */
  var mobileLinks = document.querySelectorAll('.mobile-nav-links a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();

/* ---- FAQ Accordion --------------------------------------- */
(function () {
  var questions = document.querySelectorAll('.faq-question');
  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isActive = btn.classList.contains('active');
      /* Close all */
      questions.forEach(function (q) {
        q.classList.remove('active');
        var ans = q.nextElementSibling;
        if (ans) ans.classList.remove('open');
      });
      /* Toggle clicked */
      if (!isActive) {
        btn.classList.add('active');
        var answer = btn.nextElementSibling;
        if (answer) answer.classList.add('open');
      }
    });
  });
  /* Open first FAQ by default */
  if (questions.length > 0) {
    questions[0].classList.add('active');
    var first = questions[0].nextElementSibling;
    if (first) first.classList.add('open');
  }
})();

/* ---- Contact Form ---------------------------------------- */
(function () {
  var form    = document.getElementById('contact-form');
  var success = document.getElementById('form-success');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name    = form.querySelector('[name="name"]').value.trim();
    var phone   = form.querySelector('[name="phone"]').value.trim();
    var email   = form.querySelector('[name="email"]').value.trim();
    var message = form.querySelector('[name="message"]').value.trim();

    /* Basic validation */
    if (!name || !phone || !message) {
      alert('Please fill in your name, phone number, and message.');
      return;
    }

    var btn = form.querySelector('.form-submit');
    btn.disabled = true;
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;animation:spin 1s linear infinite"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" opacity=".25"/><path d="M21 12a9 9 0 0 1-9 9"/></svg> Sending...';

    /* Send to backend API if it exists, otherwise open WhatsApp */
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, phone: phone, email: email, message: message })
    })
    .then(function (res) {
      if (!res.ok) throw new Error('Server error');
      return res.json();
    })
    .then(function () {
      form.style.display = 'none';
      success.style.display = 'block';
    })
    .catch(function () {
      /* Fallback: open WhatsApp with the message */
      var wa = 'https://wa.me/919405717515?text=' +
        encodeURIComponent('Hello, I am ' + name + ' (' + phone + '). ' + message);
      window.open(wa, '_blank');
      btn.disabled = false;
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Submit Request';
    });
  });

  /* CSS spin animation */
  var style = document.createElement('style');
  style.textContent = '@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }';
  document.head.appendChild(style);
})();

/* ---- Smooth scroll for anchor links ---------------------- */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
