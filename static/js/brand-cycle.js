(function () {
  var el = document.querySelector('[data-brand-suffix]');
  if (!el) return;

  var suffixes = [
    'llaborators',
    'mmunications',
    'mpanies',
    'mpanions',
    'mrades',
    'lleagues',
    ''
  ];

  var TYPE_MS = 80;
  var ERASE_MS = 38;
  var HOLD_MS = 1400;
  var BETWEEN_MS = 280;

  var i = 0;
  var c = 0;
  var typing = true;

  function tick() {
    var word = suffixes[i];

    if (typing) {
      if (c < word.length) {
        c++;
        el.textContent = word.slice(0, c);
        setTimeout(tick, TYPE_MS);
        return;
      }
      if (i === suffixes.length - 1) {
        el.textContent = '';
        return;
      }
      setTimeout(function () {
        typing = false;
        tick();
      }, HOLD_MS);
      return;
    }

    if (c > 0) {
      c--;
      el.textContent = word.slice(0, c);
      setTimeout(tick, ERASE_MS);
      return;
    }
    i++;
    typing = true;
    setTimeout(tick, BETWEEN_MS);
  }

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = '';
    return;
  }

  tick();
})();
