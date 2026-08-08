// Close the mobile nav after a link is tapped
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var links = document.querySelectorAll('.nav__links a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      if (toggle) toggle.checked = false;
    });
  });

  // Auto-update footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Click-to-copy email on the contact page
  var emailLink = document.getElementById('email-copy');
  if (emailLink) {
    emailLink.addEventListener('click', function (e) {
      var address = emailLink.dataset.email;
      if (navigator.clipboard && address) {
        e.preventDefault();
        navigator.clipboard.writeText(address).then(function () {
          var hint = document.getElementById('copy-hint');
          if (hint) {
            hint.textContent = 'Copied to clipboard';
            setTimeout(function () { hint.textContent = 'Click to copy'; }, 2000);
          }
        }).catch(function () {
          window.location.href = 'mailto:' + address;
        });
      }
    });
  }
});


