/* legendsbigsmoke.com (final production, WP page 180) enhancement layer — 2026-07-20.
   Adds ONLY what Christian's build is missing: real client photos in the crowd grid,
   PCA magazine cover above "As Seen In", cigar smoke wisps in the hero, the charity
   section, and removal of the stale non-lineup product trio.
   It deliberately does NOT touch: the hero video, pricing, the Woo checkout button,
   or the brand wall. */
(function () {
  var UP = 'https://legendsbigsmoke.com/wp-content/uploads/2026/07/';
  var CSS = [
    '.smoke-wisps{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:1;mix-blend-mode:screen}',
    '.wisp{position:absolute;bottom:-30%;border-radius:50%;background:radial-gradient(closest-side,rgba(226,214,188,.16),rgba(226,214,188,.06) 45%,transparent 72%);filter:blur(26px);opacity:0;will-change:transform,opacity}',
    '.wisp.w1{left:-6%;width:52vmax;height:34vmax;animation:wispDrift 34s linear infinite}',
    '.wisp.w2{left:34%;width:44vmax;height:30vmax;animation:wispDrift 41s linear -14s infinite;background:radial-gradient(closest-side,rgba(231,200,112,.13),rgba(231,200,112,.05) 45%,transparent 72%)}',
    '.wisp.w3{left:62%;width:48vmax;height:32vmax;animation:wispDrift 47s linear -29s infinite}',
    '.wisp.w4{left:16%;width:36vmax;height:24vmax;animation:wispDrift 39s linear -7s infinite;filter:blur(34px)}',
    '@keyframes wispDrift{0%{transform:translate3d(-6%,12%,0) scale(.72) skewX(0deg);opacity:0}12%{opacity:.55}45%{transform:translate3d(9%,-46%,0) scale(1.02) skewX(6deg);opacity:.38}75%{opacity:.22}100%{transform:translate3d(22%,-105%,0) scale(1.3) skewX(11deg);opacity:0}}',
    '@media(prefers-reduced-motion:reduce){.smoke-wisps{display:none}}',
    '.press-cover{margin:0 auto 1.6rem;max-width:340px;padding:0 18px}',
    '.press-cover img{width:100%;height:auto;border-radius:10px;box-shadow:0 18px 50px rgba(0,0,0,.5);border:1px solid rgba(200,162,74,.25)}',
    '.charities{display:grid;grid-template-columns:repeat(2,1fr);gap:26px;max-width:980px;margin:0 auto}',
    '@media(max-width:820px){.charities{grid-template-columns:1fr;max-width:480px}}',
    '.charity-card{display:block;background:rgba(255,255,255,.03);border:1px solid rgba(200,162,74,.22);border-radius:18px;overflow:hidden;text-decoration:none;color:inherit;transition:transform .35s ease,border-color .35s ease}',
    '.charity-card:hover{transform:translateY(-6px);border-color:rgba(200,162,74,.55)}',
    '.charity-card .ch-ph{aspect-ratio:16/9;overflow:hidden}',
    '.charity-card .ch-ph img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease}',
    '.charity-card:hover .ch-ph img{transform:scale(1.04)}',
    '.charity-card .ch-meta{padding:1.2rem 1.3rem 1.4rem}',
    '.charity-card h3{font-family:"DM Serif Display",serif;font-weight:400;font-size:1.25rem;margin-bottom:.45rem;color:#f2e9d6}',
    '.charity-card p{font-size:.95rem;color:#b9ac93;margin-bottom:.7rem}',
    '.charity-card .ch-link{font-size:.8rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#c8a24a}'
  ].join('');

  function apply() {
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    // Real client photos in the crowd grid
    var i1 = document.querySelector('img[src*="crowd-crowd-young-woman-cigar"]');
    if (i1) { i1.src = UP + 'crowd-guest-cigar-champagne.jpg'; i1.alt = 'Guest enjoying a premium cigar and champagne at Cuban Creations'; }
    var i2 = document.querySelector('img[src*="crowd-crowd-toast-men"]');
    if (i2) { i2.src = UP + 'cuban-creations-lounge-interior.jpg'; i2.alt = 'Inside the Cuban Creations lounge, leather seating beneath the historic fireplace'; }

    // PCA magazine cover above "As Seen In"
    var lbl = document.querySelector('.press-block .press-label');
    if (lbl && !document.querySelector('.press-cover')) {
      var fig = document.createElement('figure');
      fig.className = 'press-cover';
      var img = document.createElement('img');
      img.src = UP + 'pca-magazine-cuban-creations-cover.jpg';
      img.alt = 'PCA The Magazine cover featuring Cuban Creations, A Taste of New Orleans';
      img.loading = 'lazy';
      fig.appendChild(img);
      lbl.parentNode.insertBefore(fig, lbl);
    }

    // Cigar smoke wisps in the hero
    var hero = document.querySelector('section.hero');
    if (hero && !hero.querySelector('.smoke-wisps')) {
      var w = document.createElement('div');
      w.className = 'smoke-wisps';
      w.setAttribute('aria-hidden', 'true');
      w.innerHTML = '<span class="wisp w1"></span><span class="wisp w2"></span><span class="wisp w3"></span><span class="wisp w4"></span>';
      hero.insertBefore(w, hero.querySelector('.wrap'));
    }

    // Charity section before Tickets
    var tickets = document.querySelector('#tickets');
    if (tickets && !document.querySelector('#charity')) {
      var sec = document.createElement('section');
      sec.className = 'sec dark';
      sec.id = 'charity';
      sec.innerHTML = '<div class="wrap"><div class="sec-head center"><p class="eyebrow on-dark">A Night That Gives Back</p><h2>Every ticket supports <span class="gtx shimmer">Louisiana.</span></h2><p class="lead">Legends Big Smoke proudly supports two hometown causes. Part of the night goes to the kids and communities that make Louisiana what it is.</p></div><div class="charities"><a class="charity-card" href="https://bgcmetrolouisiana.org/" target="_blank" rel="noopener"><div class="ch-ph"><img src="' + UP + 'charity-boys-girls-clubs.jpg" alt="Kids at the Boys and Girls Clubs of Metro Louisiana" loading="lazy"></div><div class="ch-meta"><h3>Boys &amp; Girls Clubs of Metro Louisiana</h3><p>Empowering youth across metro Louisiana with safe places to learn, grow, and lead.</p><span class="ch-link">bgcmetrolouisiana.org</span></div></a><a class="charity-card" href="https://www.splitsecondfoundation.org/" target="_blank" rel="noopener"><div class="ch-ph"><img src="' + UP + 'charity-split-second.jpg" alt="Split Second Foundation - transforming hope into action" loading="lazy"></div><div class="ch-meta"><h3>Split Second Foundation</h3><p>Transforming hope into action for people living with disabilities across Louisiana.</p><span class="ch-link">splitsecondfoundation.org</span></div></a></div></div>';
      tickets.parentNode.insertBefore(sec, tickets);
    }

    // Remove the stale product trio (Arturo Fuente / Padron / My Father are not the confirmed giveaway makers)
    var trio = document.querySelector('.cigartrio');
    if (trio && /Arturo Fuente|Padr/i.test(trio.textContent)) trio.remove();
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', apply); } else { apply(); }
})();
