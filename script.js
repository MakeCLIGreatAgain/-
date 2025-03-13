javascript:setInterval(() => [...document.all].map(e => {
    e.style.transition = 'transform 0.5s ease-in-out';
    e.style.transform = `translate(${Math.random() * 1 - 10}px, ${Math.random() * 1 - 10}px) rotate(${Math.random() * 360}deg)`;
  }), 300);
