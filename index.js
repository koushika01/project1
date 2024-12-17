const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', () => {
  carousel.scrollBy({ left: 200, behavior: 'smooth' }); // Scroll right by 200px
});

prev.addEventListener('click', () => {
  carousel.scrollBy({ left: -200, behavior: 'smooth' }); // Scroll left by 200px
});
carousel.addEventListener('scroll', () => {
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    if (carousel.scrollLeft > 0) {
      prev.style.visibility = 'visible'; // Show the previous button
    } else {
      prev.style.visibility = 'hidden'; // Hide the previous button
    }
    if(carousel.scrollLeft>=maxScrollLeft ){
        next.style.visibility='hidden';
    }
    else{
        next.style.visibility='visible';
        prev.style.visibility='hidden';
    }
    
  });
  document.querySelectorAll('.q1').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
  
      // Toggle active class
      faqItem.classList.toggle('active');
  
      // Close all other items
      document.querySelectorAll('.item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });
    });
  });
  