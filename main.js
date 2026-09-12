document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const burger = document.querySelector('.burger');
  const overlay = document.querySelector('.mobile-overlay');
  const menu = document.querySelector('.mobile-menu');
  const body = document.body;
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-sign-in');

  function toggleMenu() {
    const isExpanded = burger.getAttribute('aria-expanded') === 'true';
    const newState = !isExpanded;
    
    burger.setAttribute('aria-expanded', newState);
    
    if (newState) {
      overlay.classList.remove('hidden');
      menu.classList.remove('hidden');
      // small delay to allow display:block to apply before opacity transition
      setTimeout(() => {
        overlay.classList.add('active');
        menu.classList.add('active');
        body.classList.add('menu-open');
      }, 10);
    } else {
      overlay.classList.remove('active');
      menu.classList.remove('active');
      body.classList.remove('menu-open');
      setTimeout(() => {
        overlay.classList.add('hidden');
        menu.classList.add('hidden');
      }, 380);
    }
  }

  if (burger) {
    burger.addEventListener('click', toggleMenu);
  }
  
  if (overlay) {
    overlay.addEventListener('click', () => {
      if (burger.getAttribute('aria-expanded') === 'true') toggleMenu();
    });
  }
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (burger.getAttribute('aria-expanded') === 'true') toggleMenu();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && burger && burger.getAttribute('aria-expanded') === 'true') {
      toggleMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && burger && burger.getAttribute('aria-expanded') === 'true') {
      toggleMenu();
    }
  });

  // Count-up stats
  const stats = document.querySelectorAll('.stat-value');
  
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          
          // Find index among stats
          const index = Array.from(stats).indexOf(entry.target);
          
          const targetValue = parseFloat(entry.target.getAttribute('data-target'));
          const suffix = entry.target.getAttribute('data-suffix') || '';
          const decimals = parseInt(entry.target.getAttribute('data-decimals')) || 0;
          
          const duration = 1500 + index * 80;
          const delay = 480 + index * 90;
          
          setTimeout(() => {
            let startTime = null;
            
            const updateCount = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = timestamp - startTime;
              
              let percentage = Math.min(progress / duration, 1);
              percentage = easeOutCubic(percentage);
              
              const currentValue = percentage * targetValue;
              
              if (decimals === 0) {
                entry.target.textContent = Math.floor(currentValue) + suffix;
              } else {
                entry.target.textContent = currentValue.toFixed(decimals) + suffix;
              }
              
              if (progress < duration) {
                requestAnimationFrame(updateCount);
              } else {
                if (decimals === 0) {
                  entry.target.textContent = targetValue + suffix;
                } else {
                  entry.target.textContent = targetValue.toFixed(decimals) + suffix;
                }
              }
            };
            
            requestAnimationFrame(updateCount);
          }, delay);
        }
      });
    }, { threshold: 0.25 });
    
    stats.forEach(stat => {
      observer.observe(stat);
    });
  } else {
    // Fallback for missing IntersectionObserver
    stats.forEach(stat => {
      const targetValue = parseFloat(stat.getAttribute('data-target'));
      const suffix = stat.getAttribute('data-suffix') || '';
      const decimals = parseInt(stat.getAttribute('data-decimals')) || 0;
      if (decimals === 0) {
        stat.textContent = targetValue + suffix;
      } else {
        stat.textContent = targetValue.toFixed(decimals) + suffix;
      }
    });
  }
});
