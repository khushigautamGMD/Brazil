/**
 * PORTAL BRASIL RESPONSÁVEL - INTERACTIVE JAVASCRIPT
 * Standalone and Elementor Widget Compatible
 */

(function () {
  'use strict';

  function initLandingPage() {
    // 1. Modern Web Guidance: Exclusive Accordion fallback for older browsers
    if (!Object.hasOwn(HTMLDetailsElement.prototype, "name")) {
      document.addEventListener("toggle", event => {
        const details = event.target;
        if (!(details instanceof HTMLDetailsElement) || !details.open || !details.hasAttribute("name")) return;
        const name = CSS.escape(details.getAttribute("name"));
        for (const other of document.querySelectorAll(`details[name="${name}"]`)) {
          if (other !== details) other.open = false;
        }
      }, { capture: true });
    }

    // 2. Accessible Dialog Back-drop Click to Close
    document.querySelectorAll('.br-modal').forEach(dialog => {
      dialog.addEventListener('click', (event) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
          dialog.close();
        }
      });
    });

    // 3. Smooth Anchor Link Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLandingPage);
  } else {
    initLandingPage();
  }
})();
