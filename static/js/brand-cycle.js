(function () {
  var word = document.querySelector('[data-brand-word]');
  if (!word) return;

  var suffixes = [
    'llaborators',
    'mmunications',
    'mpanies',
    'mpanions',
    'mrades',
    'nspirators',
    'ntractors',
    'nnoisseurs',
    'operatives',
    'creators',
    'lleagues',
    ''
  ];

  var HOLD_MS = 1500;
  var ANIM_MS = 470;
  var BETWEEN_MS = 90;

  var i = 0;

  function step() {
    var current = suffixes[i];

    word.style.transition = 'none';
    word.classList.remove('is-out');
    word.classList.remove('is-in');
    word.textContent = current;

    void word.offsetWidth;

    word.style.transition = '';

    requestAnimationFrame(function () {
      word.classList.add('is-in');
    });

    setTimeout(function () {
      if (i === suffixes.length - 1) {
        return;
      }
      word.classList.remove('is-in');
      word.classList.add('is-out');
      setTimeout(function () {
        i++;
        step();
      }, ANIM_MS + BETWEEN_MS);
    }, HOLD_MS);
  }

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    word.textContent = '';
    word.style.transform = 'translateY(0)';
    return;
  }

  step();
})();
