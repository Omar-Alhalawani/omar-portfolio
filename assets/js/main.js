/**
* Template Name: FolioOne
* Template URL: https://bootstrapmade.com/folioone-bootstrap-portfolio-website-template/
* Updated: Aug 23 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') &&
        !selectHeader.classList.contains('sticky-top') &&
        !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) mobileNavToogle();
    });
  });

  /**
   * Toggle mobile dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  scrollTop?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * AOS
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items').split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  document.querySelectorAll('.skills-animation').forEach(item => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function() {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => el.style.width = el.getAttribute('aria-valuenow') + '%');
      }
    });
  });

  /**
   * Pure Counter
   */
  new PureCounter();

  /**
   * Swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );
      new Swiper(swiperElement, config);
    });
  }
  window.addEventListener("load", initSwiper);

  /**
   * Isotope filters
   */
  document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(filterBtn => {
      filterBtn.addEventListener('click', function() {
        isotopeItem.querySelector('.filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({ filter: this.getAttribute('data-filter') });
        aosInit();
      });
    });
  });

  /**
   * glightbox
   */
  const glightbox = GLightbox({ selector: '.glightbox' });

  /* ------------------------------------------------------------------
      FORM HANDLER — UPDATED FOR FORMSPREE
  ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".php-email-form");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      let formData = new FormData(form);

      // UI elements
      let loading = form.querySelector(".loading");
      let errorMessage = form.querySelector(".error-message");
      let sentMessage = form.querySelector(".sent-message");

      loading.style.display = "block";
      errorMessage.style.display = "none";
      sentMessage.style.display = "none";

      try {
        const response = await fetch("https://formspree.io/f/xkgekqrw", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });

        loading.style.display = "none";

        if (response.ok) {
          // SUCCESS
          sentMessage.style.display = "block";
          form.reset();
        } else {
          const result = await response.json();
        
          // If Formspree responded with ok:true, treat as success
          if (result.ok) {
            sentMessage.style.display = "block";
            form.reset();
          } else {
            errorMessage.textContent = result.error || "Something went wrong.";
            errorMessage.style.display = "block";
          }
        }

      } catch (err) {
        loading.style.display = "none";
        errorMessage.textContent = "Error sending message. Please try again.";
        errorMessage.style.display = "block";
      }
    });
  }
});

