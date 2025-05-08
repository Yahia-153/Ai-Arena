window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('#preloader').classList.add('d-none');
    }
        , 0);
})

// Hide preloader
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
      document.querySelector('#preloader')?.classList.add('d-none');
  }, 0);

  // Create and add WhatsApp button
  const whatsAppBtn = document.createElement('button');
  whatsAppBtn.type = 'button';
  whatsAppBtn.className = 'whatsApp-btn right';
  whatsAppBtn.id = 'whatsApp';
  whatsAppBtn.dataset.tooltip = 'Double Click To Chat With Us';
  whatsAppBtn.innerHTML = '<i class="bi bi-whatsapp icon"></i>';
  document.body.appendChild(whatsAppBtn);

  // Initialize WhatsApp functionality
  initWhatsApp();
});

function initWhatsApp() {
  const whatsApp = document.getElementById('whatsApp');
  if (!whatsApp) return;

  let dragState = {
      isDragging: false,
      offset: { x: 0, y: 0 },
      lastTap: 0
  };

  function handleDragStart(x, y, element) {
      dragState.isDragging = true;
      element.style.transition = 'none';
      element.style.cursor = 'grabbing';
      
      const rect = element.getBoundingClientRect();
      dragState.offset = {
          x: x - rect.left,
          y: y - rect.top
      };
  }

  function handleDragMove(x, y, element) {
      if (!dragState.isDragging) return;
      
      requestAnimationFrame(() => {
          element.style.left = `${x - dragState.offset.x}px`;
          element.style.top = `${y - dragState.offset.y}px`;
      });
  }

  function handleDragEnd(element) {
      if (!dragState.isDragging) return;
      
      dragState.isDragging = false;
      element.style.cursor = 'pointer';
      element.style.transition = 'left 0.3s ease, top 0.3s ease';
      
      snapElementToEdge(element);
  }

  // Mouse Events
  whatsApp.addEventListener('mousedown', (e) => {
      e.preventDefault();
      handleDragStart(e.clientX, e.clientY, whatsApp);
  }, { passive: false });

  window.addEventListener('mousemove', (e) => {
      if (dragState.isDragging) {
          e.preventDefault();
          handleDragMove(e.clientX, e.clientY, whatsApp);
      }
  }, { passive: false });

  window.addEventListener('mouseup', () => {
      handleDragEnd(whatsApp);
  });

  // Touch Events
  whatsApp.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      handleDragStart(touch.clientX, touch.clientY, whatsApp);
  }, { passive: false });

  window.addEventListener('touchmove', (e) => {
      if (dragState.isDragging) {
          e.preventDefault();
          const touch = e.touches[0];
          handleDragMove(touch.clientX, touch.clientY, whatsApp);
      }
  }, { passive: false });

  window.addEventListener('touchend', () => {
      handleDragEnd(whatsApp);
  });

  // Double click/tap handler
  function handleDoubleTap() {
      window.open('https://wa.me/966532950543', '_blank');
  }

  whatsApp.addEventListener('dblclick', handleDoubleTap);
  whatsApp.addEventListener('touchend', (e) => {
      const currentTime = Date.now();
      const tapLength = currentTime - dragState.lastTap;
      
      if (tapLength < 500 && tapLength > 0) {
          handleDoubleTap();
      }
      dragState.lastTap = currentTime;
  });
}

function snapElementToEdge(element) {
  const bounds = {
      window: {
          width: window.innerWidth * 0.99,
          height: window.innerHeight
      },
      element: {
          width: element.offsetWidth,
          height: element.offsetHeight
      }
  };

  const limits = {
      top: 25,
      bottom: bounds.window.height - bounds.element.height - 25,
      left: 0,
      right: bounds.window.width - bounds.element.width
  };

  const position = element.getBoundingClientRect();
  const centerX = position.left + (bounds.element.width / 2);

  // Vertical snap
  element.style.top = Math.min(Math.max(position.top, limits.top), limits.bottom) + 'px';

  // Horizontal snap
  if (centerX < bounds.window.width / 2) {
      element.style.left = limits.left + 'px';
      element.classList.remove('right');
      element.classList.add('left');
  } else {
      element.style.left = limits.right + 'px';
      element.classList.remove('left');
      element.classList.add('right');
  }
}