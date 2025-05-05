window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('#preloader').classList.add('d-none');
    }
        , 0);
})

// add whatsapp btn to the page
document.body.innerHTML += `<button type="button" class="whatsApp-btn right" id="whatsApp" data-tooltip="Hold To Drag Or Dubble Click To Chat Us"><i class="bi bi-whatsapp icon"></i></button>`
 // WhatsApp contact btn link


const icon = document.getElementById('whatsApp');

let isDragging = false;
let offsetX, offsetY;
// whatsApp link 
  icon. addEventListener('dblclick', () => {
    window.open('https://wa.me/966532950543', '_blank');
  })
  icon.addEventListener('mousedown', (e) => {
    isDragging = true;
    icon.style.cursor = 'grabbing';
    icon.style.transition = 'none'; // Disable transition while dragging
    document.body.classList.add('no-select');

    offsetX = e.clientX - icon.getBoundingClientRect().left;
    offsetY = e.clientY - icon.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;

    icon.style.cursor = 'default';
    document.body.classList.remove('no-select');

    // Enable transition again for smooth snapping
    icon.style.transition = 'left 0.4s ease, top 0.4s ease';

    const windowWidth = window.innerWidth / 100 * 99 ;
    const iconWidth = icon.offsetWidth;
    const snapLeft = 0;
    const snapRight = windowWidth - iconWidth;
    const maxtop = window.innerHeight - icon.offsetHeight -25;
    const mintop = 25;

    const currentLeft = icon.getBoundingClientRect().left;
    const currentTop = icon.getBoundingClientRect().top;

    if (currentTop > mintop && currentTop < maxtop) {
      icon.style.top = `${currentTop}px`;
    }else if (currentTop < mintop) {
      icon.style.top = `${mintop}px`;
    }
    else if (currentTop > maxtop) {
      icon.style.top = `${maxtop}px`;
    }
    // Snap to the closest side
    if (currentLeft + iconWidth / 2 < windowWidth / 2) {
      icon.style.left = `${snapLeft}px`;
      icon.classList.remove('right');
      icon.classList.add('left');
    } else {
      icon.style.left = `${snapRight}px`;
        icon.classList.remove('left');
        icon.classList.add('right');
    }
  });

  // Add touch events for mobile
icon.addEventListener('touchstart', (e) => {
  isDragging = true;
  icon.style.cursor = 'grabbing';
  icon.style.transition = 'none';
  document.body.classList.add('no-select');

  const touch = e.touches[0];
  offsetX = touch.clientX - icon.getBoundingClientRect().left;
  offsetY = touch.clientY - icon.getBoundingClientRect().top;
});

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault(); // Prevent scrolling while dragging

  const touch = e.touches[0];
  const x = touch.clientX - offsetX;
  const y = touch.clientY - offsetY;

  icon.style.left = `${x}px`;
  icon.style.top = `${y}px`;
}, { passive: false });

document.addEventListener('touchend', () => {
  if (!isDragging) return;
  isDragging = false;

  icon.style.cursor = 'default';
  document.body.classList.remove('no-select');
  icon.style.transition = 'left 0.4s ease, top 0.4s ease';

  const windowWidth = window.innerWidth / 100 * 99;
  const iconWidth = icon.offsetWidth;
  const snapLeft = 0;
  const snapRight = windowWidth - iconWidth;
  const maxtop = window.innerHeight - icon.offsetHeight - 25;
  const mintop = 25;


  const currentLeft = icon.getBoundingClientRect().left;
  const currentTop = icon.getBoundingClientRect().top;

  if (currentTop > mintop && currentTop < maxtop) {
    icon.style.top = `${currentTop}px`;
  }else if (currentTop < mintop) {
    icon.style.top = `${mintop}px`;
  }
  else if (currentTop > maxtop) {
    icon.style.top = `${maxtop}px`;
  }
  // Snap to the closest side
  if (currentLeft + iconWidth / 2 < windowWidth / 2) {
    icon.style.left = `${snapLeft}px`;
    icon.classList.remove('right');
    icon.classList.add('left');
  } else {
    icon.style.left = `${snapRight}px`;
      icon.classList.remove('left');
      icon.classList.add('right');
  }
}
);

// Add tap handler for mobile
let tapTimer;
let lastTap = 0;

icon.addEventListener('touchend', (e) => {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;
  
  if (tapLength < 500 && tapLength > 0) {
    // Double tap detected
    window.open('https://wa.me/966532950543', '_blank');
    e.preventDefault();
  }
  lastTap = currentTime;
});
