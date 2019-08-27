//SpyScrolling Effect
const spyScrolling = ( ) => {
    const sections = document.querySelectorAll( '.section' );
  
    window.onscroll = ( ) => {
      const scrollPos = document.body.scrollTop + 90; //Hardcoded offset
      for ( let s in sections )
        if ( sections.hasOwnProperty( s ) && sections[ s ].getBoundingClientRect().top <= scrollPos ) {
          const id = sections[ s ].id;
          document.querySelector( '.active' ).classList.remove( 'active' );
          document.querySelector( `a[href*=${ id }]` ).classList.add( 'active' );
        }
    }  
  }

//SmoothScrolling Animation
  function smoothScroll(target, duration) {
      let newTarget = document.querySelector(target);
      let targetPosition = newTarget.getBoundingClientRect().top + newTarget.getBoundingClientRect().left + window.scrollY;
      let startPosition = window.pageYOffset;
      let distance = targetPosition - startPosition;
      let startTime = null;

      function animateScroll(currentTime) {
        if(startTime === null) {
            startTime = currentTime;
            }
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animateScroll);
        }
        requestAnimationFrame(animateScroll);

      function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
        };
  }

  let navLinks = document.querySelectorAll('.nav-link');

  for(let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function(e){
        let section = '';
        switch(navLinks[i].text) {
            case 'Home Page':
                section = '#section-one';
                break;
            case 'About Us':
                section = '#section-two';
                break;
            case 'Services':
                section = '#section-three';
                break;
            case 'Contact':
                section = '#section-four';
                break;
            default:
                section = '#section-one';
                break;
        }
        
        smoothScroll(section, 3000);
      });
  }
//Mobile Navigation
let mobileButton = document.querySelector('.mobile-button');
let mobileNav = document.querySelector('.mobile-nav');
mobileButton.addEventListener('click', function() {
  if(mobileButton.classList.contains('active') === true) {
    mobileButton.classList.remove('active');
    mobileNav.style.display = 'none';
  } else {
    mobileButton.classList.add('active');
    mobileNav.style.display = 'block';
  }
});

  spyScrolling()