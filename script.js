// Small enhancements: set year and enable smooth scrolling
document.addEventListener('DOMContentLoaded', function(){
  // Year
  const yearSpan = document.getElementById('year');
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Basic client-side validation messaging for contact form
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      // HTML5 will handle required checks; optionally provide custom UX here
      // Allow normal submit for services like FormSubmit.co
      // If you want to intercept and POST via fetch, implement here.
    });
  }
});
