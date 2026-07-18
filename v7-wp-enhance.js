/* Legends Big Smoke — v7 revision layer for the WordPress build (2026-07-17).
   Applies: IG reel in hero card, real client photos in crowd grid, cigar smoke wisps,
   PCA magazine cover above "As Seen In". Hosted on the Netlify design source. */
(function () {
  var CSS = [
    '.hv-main.hv-ig{aspect-ratio:auto;height:clamp(560px,74vh,740px);background:#141109}',
    '.hv-main.hv-ig iframe{width:100%;height:100%;border:0;display:block;background:#141109}',
    '.hv-main.hv-ig::after{content:"";position:absolute;inset:0;pointer-events:none;border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(200,162,74,.18)}',
    '.hero-visual .hv-chip{top:-16px;right:-14px}',
    '.smoke-wisps{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:1;mix-blend-mode:screen}',
    '.wisp{position:absolute;bottom:-30%;border-radius:50%;background:radial-gradient(closest-side,rgba(226,214,188,.16),rgba(226,214,188,.06) 45%,transparent 72%);filter:blur(26px);opacity:0;will-change:transform,opacity}',
    '.wisp.w1{left:-6%;width:52vmax;height:34vmax;animation:wispDrift 34s linear infinite}',
    '.wisp.w2{left:34%;width:44vmax;height:30vmax;animation:wispDrift 41s linear -14s infinite;background:radial-gradient(closest-side,rgba(231,200,112,.13),rgba(231,200,112,.05) 45%,transparent 72%)}',
    '.wisp.w3{left:62%;width:48vmax;height:32vmax;animation:wispDrift 47s linear -29s infinite}',
    '.wisp.w4{left:16%;width:36vmax;height:24vmax;animation:wispDrift 39s linear -7s infinite;filter:blur(34px)}',
    '@keyframes wispDrift{0%{transform:translate3d(-6%,12%,0) scale(.72) skewX(0deg);opacity:0}12%{opacity:.55}45%{transform:translate3d(9%,-46%,0) scale(1.02) skewX(6deg);opacity:.38}75%{opacity:.22}100%{transform:translate3d(22%,-105%,0) scale(1.3) skewX(11deg);opacity:0}}',
    '@media(prefers-reduced-motion:reduce){.smoke-wisps{display:none}}',
    '@media(max-width:900px){.hv-main.hv-ig{height:clamp(520px,70vh,640px)}}',
    '.press-cover{margin:0 auto 1.6rem;max-width:340px;padding:0 18px}',
    '.press-cover img{width:100%;height:auto;border-radius:10px;box-shadow:0 18px 50px rgba(0,0,0,.5);border:1px solid rgba(200,162,74,.25)}'
  ].join('');
  var UP = 'https://legends.cubancreation.com/wp-content/uploads/2026/07/';

  function apply() {
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    var hv = document.querySelector('.hv-main');
    if (hv && !hv.classList.contains('hv-ig')) {
      hv.classList.add('hv-ig');
      var f = document.createElement('iframe');
      f.src = 'https://www.instagram.com/reel/Da6djQlOeH8/embed';
      f.title = 'Legends Big Smoke official Instagram reel';
      f.setAttribute('frameborder', '0');
      f.setAttribute('scrolling', 'no');
      f.setAttribute('allowtransparency', 'true');
      f.setAttribute('allow', 'encrypted-media; picture-in-picture; web-share');
      f.loading = 'lazy';
      hv.innerHTML = '';
      hv.appendChild(f);
    }

    var hero = document.querySelector('section.hero');
    if (hero && !hero.querySelector('.smoke-wisps')) {
      var w = document.createElement('div');
      w.className = 'smoke-wisps';
      w.setAttribute('aria-hidden', 'true');
      w.innerHTML = '<span class="wisp w1"></span><span class="wisp w2"></span><span class="wisp w3"></span><span class="wisp w4"></span>';
      hero.insertBefore(w, hero.querySelector('.wrap'));
    }

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

    var i1 = document.querySelector('img[src*="crowd-crowd-young-woman-cigar"]');
    if (i1) { i1.src = UP + 'crowd-guest-cigar-champagne.jpg'; i1.alt = 'Guest enjoying a premium cigar and champagne at Cuban Creations'; }
    var i2 = document.querySelector('img[src*="crowd-crowd-toast-men"]');
    if (i2) { i2.src = UP + 'cuban-creations-lounge-interior.jpg'; i2.alt = 'Inside the Cuban Creations lounge, leather seating beneath the historic fireplace'; }
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', apply); } else { apply(); }
})();

/* v8 owner round (Andrew, 2026-07-18): single $250 GA ticket, charity section, confirmed brands */
(function () {
  var NET = 'https://cdn.jsdelivr.net/gh/markspectralvision/legends-big-smoke-assets@main/';
  var CSS8 = [
    '.tiers-single{grid-template-columns:min(430px,100%);justify-content:center}',
    '.tiers-single .tier.featured{transform:none}',
    '.brandwall-six{grid-template-columns:repeat(3,1fr)}',
    '@media(max-width:680px){.brandwall-six{grid-template-columns:repeat(2,1fr)}}',
    '.brandcard.brandtxt{display:flex;align-items:center;justify-content:center;min-height:86px}',
    '.brandcard.brandtxt span{font-family:"DM Serif Display",serif;font-size:clamp(1.15rem,1.9vw,1.5rem);letter-spacing:.02em;white-space:nowrap;background:linear-gradient(115deg,#e7c870,#c8a24a 55%,#9a7830);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}',
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

  function v8() {
    var st = document.createElement('style');
    st.textContent = CSS8;
    document.head.appendChild(st);

    // Tickets: single $250 GA card
    var tickets = document.querySelector('#tickets');
    if (tickets) {
      var h2 = tickets.querySelector('.sec-head h2');
      if (h2) h2.textContent = 'One ticket. One price. Everything in.';
      var lead = tickets.querySelector('.sec-head .lead');
      if (lead) lead.textContent = 'No tiers, no upsells. Every guest gets the full night, and the terrace only holds so many. Tickets move fastest on opening weekend.';
      var tiers = tickets.querySelector('.tiers');
      if (tiers) {
        tiers.classList.add('tiers-single');
        tiers.innerHTML = '<div class="tier featured"><span class="tier-flag">All-Inclusive</span><h3>General Admission</h3><div class="t-sub">The full night, nothing held back</div><div class="price"><span class="now">$250</span></div><div class="per">per guest · limited to terrace capacity</div><ul><li>Full event access</li><li>$100+ in cigars to keep</li><li>7 hours open premium bar</li><li>Karl Malone live on the terrace</li><li>Part of the night supports two Louisiana charities</li></ul><a href="#checkout" class="btn btn-gold"><span class="shine"></span>Claim Your Ticket</a></div>';
      }
      var sc = tickets.querySelector('.scarcity span');
      if (sc) sc.textContent = 'Tickets are limited to what the terrace holds.';
    }

    // Value stack + steps + final CTA + sticky bar
    var vt = document.querySelector('.vt-now');
    if (vt) vt.textContent = '$250 all-inclusive';
    var step1 = document.querySelector('.steps .step h3');
    if (step1 && /pick your tier/i.test(step1.textContent)) {
      step1.textContent = 'Grab your ticket';
      var sp = step1.nextElementSibling;
      if (sp) sp.textContent = 'One all-inclusive $250 ticket. Check out in seconds with Apple Pay or any card.';
    }
    var fin = document.querySelector('.final .wrap > p.rise, .final .wrap > p:not(.eyebrow)');
    if (fin && /early-bird/i.test(fin.textContent)) fin.textContent = 'Tickets are $250, all-inclusive, and limited to what the terrace holds. When they are gone, they are gone.';
    var sticky = document.querySelector('.sticky-cta div');
    if (sticky) sticky.innerHTML = '<b>$250</b><small>General Admission · all-inclusive</small>';

    // Brand wall: confirmed lineup as gold text chips, drop stale product trio
    var bw = document.querySelector('.brandwall');
    if (bw) {
      bw.classList.add('brandwall-six');
      bw.innerHTML = ['El Septimo','Oliva','La Aurora','Bocock Cigars','Ed Reed Cigars','Casa De Suenos']
        .map(function (b) { return '<div class="brandcard brandtxt"><span>' + b + '</span></div>'; }).join('');
    }
    var trio = document.querySelector('.cigartrio');
    if (trio) trio.remove();
    var note = document.querySelector('.lineup-note');
    if (note) note.textContent = 'More makers join as they come onboard. The lineup keeps growing right up to event night.';
    var humLead = document.querySelector('#humidor .sec-head .lead');
    if (humLead) humLead.innerHTML = 'Your cigars come straight from the Cuban Creations humidor, the same selection that earned the lounge a place in <i>Cigar Aficionado</i>. The confirmed makers for the night:';

    // Charity section before #tickets
    if (tickets && !document.querySelector('#charity')) {
      var sec = document.createElement('section');
      sec.className = 'sec dark';
      sec.id = 'charity';
      sec.innerHTML = '<div class="wrap"><div class="sec-head center"><p class="eyebrow on-dark">A Night That Gives Back</p><h2>Every ticket supports <span class="gtx shimmer">Louisiana.</span></h2><p class="lead">Legends Big Smoke proudly supports two hometown causes. Part of the night goes to the kids and communities that make Louisiana what it is.</p></div><div class="charities"><a class="charity-card" href="https://bgcmetrolouisiana.org/" target="_blank" rel="noopener"><div class="ch-ph"><img src="' + NET + 'charity-boys-girls-clubs.jpg" alt="Kids at the Boys and Girls Clubs of Metro Louisiana" loading="lazy"></div><div class="ch-meta"><h3>Boys &amp; Girls Clubs of Metro Louisiana</h3><p>Empowering youth across metro Louisiana with safe places to learn, grow, and lead.</p><span class="ch-link">bgcmetrolouisiana.org</span></div></a><a class="charity-card" href="https://www.splitsecondfoundation.org/" target="_blank" rel="noopener"><div class="ch-ph"><img src="' + NET + 'charity-split-second.jpg" alt="Split Second Foundation - transforming hope into action" loading="lazy"></div><div class="ch-meta"><h3>Split Second Foundation</h3><p>Transforming hope into action for people living with disabilities across Louisiana.</p><span class="ch-link">splitsecondfoundation.org</span></div></a></div></div>';
      tickets.parentNode.insertBefore(sec, tickets);
    }
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', v8); } else { v8(); }
})();
