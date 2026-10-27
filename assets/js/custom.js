document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: '.main h1, .profile h1',
    translateY: [-20, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1200
  });

  anime({
    targets: '.menu a',
    opacity: [0, 1],
    translateY: [-10, 0],
    delay: anime.stagger(100, {start: 400}),
    easing: 'easeOutQuad'
  });
});
