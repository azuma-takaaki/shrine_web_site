(() => {
  const root = document.documentElement.dataset.root || ".";
  const p = (path) => `${root}/${path}`.replace(/\/{2,}/g, "/");

  if (!document.querySelector('link[rel="icon"]')) {
    const icon = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/png";
    icon.href = p("assets/favicon-32.png");
    document.head.appendChild(icon);
  }
  if (!document.querySelector('link[rel="apple-touch-icon"]')) {
    const apple = document.createElement("link");
    apple.rel = "apple-touch-icon";
    apple.href = p("assets/apple-touch-icon.png");
    document.head.appendChild(apple);
  }

  const loaderStartedAt = performance.now();
  const MIN_LOADER_MS = 2000;
  const LOADER_FADE_MS = 1000;

  const hideLoader = () => {
    document.documentElement.classList.add("is-hiding-loader");
    window.setTimeout(() => {
      document.documentElement.classList.add("is-ready");
      document.documentElement.classList.remove("is-hiding-loader");
      window.dispatchEvent(new Event("site:ready"));
    }, LOADER_FADE_MS);
  };

  // 最低2秒表示。最大は画像などコンテンツの読み込み完了まで。
  const finishLoader = () => {
    const elapsed = performance.now() - loaderStartedAt;
    window.setTimeout(hideLoader, Math.max(0, MIN_LOADER_MS - elapsed));
  };

  if (document.readyState === "complete") finishLoader();
  else window.addEventListener("load", finishLoader, { once: true });

  const header = `
    <header class="site-header">
      <div class="header-inner">
        <a class="logo" href="${p("index.html")}">
          <img src="${p("assets/crest.png")}" alt="社紋 亀甲に大">
          <span class="logo-text">
            <small>IZUMO TAISHA SANUKI</small>
            <strong>出雲大社讃岐分院</strong>
          </span>
        </a>
        <nav class="header-nav" aria-label="主要メニュー">
          <a href="${p("deities/index.html")}">御祭神</a>
          <a href="${p("kitou/index.html")}">ご祈祷</a>
          <a href="${p("precinct/index.html")}">境内のご案内</a>
          <a href="${p("omamori/index.html")}">お守り</a>
          <a href="${p("news/index.html")}">お知らせ</a>
          <a href="${p("access/index.html")}">アクセス</a>
        </nav>
        <button class="menu-btn" type="button" aria-label="メニュー" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <nav class="nav-overlay" aria-label="サイトメニュー">
      <div class="nav-grid">
        <div class="nav-col">
          <h3>ご案内</h3>
          <a href="${p("deities/index.html")}">御祭神</a>
          <a href="${p("about/index.html")}">分院について</a>
          <a href="${p("precinct/index.html")}">境内のご案内</a>
          <a href="${p("access/index.html")}">交通アクセス</a>
        </div>
        <div class="nav-col">
          <h3>ご祈祷・授与</h3>
          <a href="${p("kitou/index.html")}">ご祈祷</a>
          <a href="${p("izumoyashiki/index.html")}">出雲屋敷</a>
          <a href="${p("omamori/index.html")}">お守り・縁起物・おみくじ</a>
        </div>
        <div class="nav-col">
          <h3>お知らせ</h3>
          <a href="${p("news/index.html")}">お知らせ</a>
          <a href="${p("calendar/index.html")}">年間スケジュール</a>
        </div>
        <div class="nav-col">
          <h3>その他</h3>
          <a href="${p("privacy/index.html")}">プライバシーポリシー</a>
          <a href="${p("bouhai/index.html")}">反社会的勢力に対する基本方針</a>
        </div>
      </div>
    </nav>
  `;

  const footer = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-info">
          <h2>出雲大社讃岐分院</h2>
          <p>〒769-1501 香川県三豊市豊中町比地大3142</p>
          <p>TEL：0875-62-2008</p>
          <p>受付時間：9:00－17:00</p>
        </div>
        <div class="footer-nav">
          <div>
            <h3>ご案内</h3>
            <a href="${p("deities/index.html")}">御祭神</a>
            <a href="${p("about/index.html")}">分院について</a>
            <a href="${p("precinct/index.html")}">境内のご案内</a>
            <a href="${p("access/index.html")}">交通アクセス</a>
          </div>
          <div>
            <h3>ご祈祷・授与</h3>
            <a href="${p("kitou/index.html")}">ご祈祷</a>
            <a href="${p("izumoyashiki/index.html")}">出雲屋敷</a>
            <a href="${p("omamori/index.html")}">お守り・縁起物・おみくじ</a>
          </div>
          <div>
            <h3>お知らせ</h3>
            <a href="${p("news/index.html")}">お知らせ</a>
            <a href="${p("calendar/index.html")}">年間スケジュール</a>
          </div>
          <div>
            <h3>その他</h3>
            <a href="${p("privacy/index.html")}">プライバシーポリシー</a>
            <a href="${p("bouhai/index.html")}">反社会的勢力に対する基本方針</a>
          </div>
        </div>
      </div>
      <p class="copy">© Izumo Taisha Sanuki Branch</p>
    </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  const menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && document.body.classList.contains("nav-open")) {
      document.body.classList.remove("nav-open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  const revealTargets = document.querySelectorAll([
    ".about-block",
    ".intro-pair",
    ".news-cal > *",
    ".section-title",
    ".guide-card",
    ".page-hero h1",
    ".content > *",
    ".feature-card",
    ".photo-block",
    ".photo-pair",
    ".photo-trio",
    ".spot-block",
    ".precinct-cta",
  ].join(","));

  if (revealTargets.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach((el) => el.classList.add("reveal"));
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          revealIo.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );
    revealTargets.forEach((el) => revealIo.observe(el));
  }

  const calRoot = document.querySelector("[data-calendar]");
  if (calRoot) {
    let year = 2026;
    let month = 9;
    const title = calRoot.querySelector("[data-cal-title]");
    const body = calRoot.querySelector("[data-cal-body]");
    const render = () => {
      title.textContent = `${year}年 ${month}月`;
      const first = new Date(year, month - 1, 1).getDay();
      const days = new Date(year, month, 0).getDate();
      let html = "<tr>";
      for (let i = 0; i < first; i += 1) html += "<td></td>";
      for (let d = 1; d <= days; d += 1) {
        const dow = (first + d - 1) % 7;
        const marked = d === 15 || d === 30;
        const cls = marked ? "cal-day shakko" : "cal-day";
        const inner = `<span class="${cls}">${d}</span>`;
        html += `<td class="${dow === 0 ? "sun" : ""}">${inner}</td>`;
        if (dow === 6) html += "</tr><tr>";
      }
      html += "</tr>";
      body.innerHTML = html;
    };
    calRoot.querySelector("[data-prev]").addEventListener("click", () => {
      month -= 1;
      if (month < 1) {
        month = 12;
        year -= 1;
      }
      render();
    });
    calRoot.querySelector("[data-next]").addEventListener("click", () => {
      month += 1;
      if (month > 12) {
        month = 1;
        year += 1;
      }
      render();
    });
    render();
  }

  const heroRoot = document.querySelector("[data-hero-slides]");
  if (heroRoot) {
    const slides = Array.from(heroRoot.querySelectorAll(".hero-slide"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (slides.length > 1 && !reduceMotion) {
      let index = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
      const INTERVAL_MS = 6000;
      window.setInterval(() => {
        const prev = slides[index];
        const frozen = getComputedStyle(prev).transform;
        prev.style.animation = "none";
        if (frozen && frozen !== "none") prev.style.transform = frozen;
        prev.classList.remove("is-active");

        index = (index + 1) % slides.length;
        const next = slides[index];
        next.style.removeProperty("transform");
        next.style.animation = "none";
        void next.offsetWidth;
        next.style.removeProperty("animation");
        next.classList.add("is-active");

        window.setTimeout(() => {
          if (!prev.classList.contains("is-active")) {
            prev.style.removeProperty("transform");
            prev.style.removeProperty("animation");
          }
        }, 1500);
      }, INTERVAL_MS);
    }
  }
  const notice = document.querySelector("[data-notice]");
  if (notice) {
    const openNotice = () => {
      notice.hidden = false;
      requestAnimationFrame(() => notice.classList.add("is-open"));
    };

    const showAfterReady = () => window.setTimeout(openNotice, 1100);
    if (document.documentElement.classList.contains("is-ready")) showAfterReady();
    else window.addEventListener("site:ready", showAfterReady, { once: true });
  }
})();
