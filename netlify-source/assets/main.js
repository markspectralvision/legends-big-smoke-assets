/* Legends Big Smoke — interactions (v4) */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* QC capture mode: ?cap collapses the 100vh hero so a tall headless window captures the full page */
  var capMode = /[?&]cap/.test(location.search);
  if (capMode) {
    var h = document.querySelector('.hero');
    if (h) h.style.minHeight = '0';
    document.querySelectorAll('.rise').forEach(function (el) { el.classList.add('in'); });
  }

  /* nav + scroll progress */
  var nav = document.getElementById('nav');
  var prog = document.getElementById('scrollProg');
  var doc = document.documentElement;
  function onScroll() {
    var y = window.scrollY || doc.scrollTop;
    if (nav) nav.classList.toggle('scrolled', y > 40);
    if (prog) {
      var hh = doc.scrollHeight - doc.clientHeight;
      prog.style.width = (hh > 0 ? (y / hh) * 100 : 0) + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* mobile menu */
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', function () { links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* reveal on scroll (blur+rise) */
  var rises = document.querySelectorAll('.rise');
  if (reduce || capMode || !('IntersectionObserver' in window)) {
    rises.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          var el = e.target;
          setTimeout(function () { el.classList.add('in'); }, Math.min(i * 55, 220));
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    rises.forEach(function (el) { io.observe(el); });
  }

  /* count-up stats */
  var counters = document.querySelectorAll('[data-count]');
  function runCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var t0 = null, dur = 1400;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (counters.length) {
    if (reduce || capMode || !('IntersectionObserver' in window)) {
      counters.forEach(function (el) {
        el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
      });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  }

  /* FAQ accordion */
  document.querySelectorAll('.q button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var q = btn.parentElement;
      var a = q.querySelector('.a');
      var open = q.classList.toggle('open');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : 0;
    });
  });

  /* 3D tilt on the e-ticket */
  var tk = document.querySelector('.ticket-wrap');
  if (tk && !reduce) {
    tk.addEventListener('mousemove', function (ev) {
      var r = tk.getBoundingClientRect();
      var px = (ev.clientX - r.left) / r.width - 0.5;
      var py = (ev.clientY - r.top) / r.height - 0.5;
      tk.style.setProperty('--ry', (px * 10) + 'deg');
      tk.style.setProperty('--rx', (7 - py * 12) + 'deg');
    });
    tk.addEventListener('mouseleave', function () {
      tk.style.setProperty('--ry', '0deg');
      tk.style.setProperty('--rx', '7deg');
    });
  }

  /* ember particles in the hero */
  var cv = document.getElementById('embers');
  if (cv && !reduce && !capMode) {
    var ctx = cv.getContext('2d');
    var hero = cv.parentElement;
    var P = [], N = 42;
    function resize() { cv.width = hero.offsetWidth; cv.height = hero.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);
    function spawn(init) {
      return {
        x: Math.random() * cv.width,
        y: init ? Math.random() * cv.height : cv.height + 8,
        r: 0.6 + Math.random() * 1.9,
        vy: 0.18 + Math.random() * 0.5,
        vx: (Math.random() - 0.5) * 0.22,
        a: 0.08 + Math.random() * 0.5,
        tw: Math.random() * Math.PI * 2,
        hot: Math.random() < 0.18
      };
    }
    for (var i = 0; i < N; i++) P.push(spawn(true));
    (function loop() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (var i = 0; i < P.length; i++) {
        var p = P[i];
        p.y -= p.vy; p.x += p.vx + Math.sin(p.tw) * 0.12; p.tw += 0.018;
        if (p.y < -10) P[i] = p = spawn(false);
        var flick = 0.75 + 0.25 * Math.sin(p.tw * 3);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.hot
          ? 'rgba(230,120,60,' + (p.a * flick) + ')'
          : 'rgba(232,200,112,' + (p.a * flick) + ')';
        ctx.shadowColor = 'rgba(232,200,112,.8)';
        ctx.shadowBlur = 6;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      requestAnimationFrame(loop);
    })();
  }
})();
