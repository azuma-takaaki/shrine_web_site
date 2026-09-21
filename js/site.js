(() => {
  const root = document.documentElement.dataset.root || ".";
  const p = (path) => `${root}/${path}`.replace(/\/{2,}/g, "/");

  const hideLoader = () => {
    document.documentElement.classList.add("is-hiding-loader");
    window.setTimeout(() => {
      document.documentElement.classList.add("is-ready");
      document.documentElement.classList.remove("is-hiding-loader");
    }, 1000);
  };
  const startLoader = () => window.setTimeout(hideLoader, 1000);
  if (document.readyState === "complete") startLoader();
  else window.addEventListener("load", startLoader);

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
        <button class="menu-btn" type="button" aria-label="メニュー">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <nav class="nav-overlay" aria-label="サイトメニュー">
      <div class="nav-grid">
        <div class="nav-col">
          <h3>当おやしろ</h3>
          <a href="${p("deities/index.html")}">御祭神</a>
          <a href="${p("about/index.html")}">分院について</a>
          <a href="${p("izumo/index.html")}">出雲大社について</a>
          <a href="${p("precinct/index.html")}">境内のご案内</a>
        </div>
        <div class="nav-col">
          <h3>ご祈祷・授与</h3>
          <a href="${p("kitou/index.html")}">ご祈祷</a>
          <a href="${p("reservation/index.html")}">ご予約フォーム</a>
          <a href="${p("izumoyashiki/index.html")}">出雲屋敷</a>
          <a href="${p("omamori/index.html")}">お守り・縁起物・おみくじ</a>
        </div>
        <div class="nav-col">
          <h3>お知らせ</h3>
          <a href="${p("news/index.html")}">お知らせ</a>
          <a href="${p("calendar/index.html")}">年間スケジュール</a>
        </div>
        <div class="nav-col">
          <h3>ご案内</h3>
          <a href="${p("access/index.html")}">交通アクセス</a>
          <a href="${p("contact/index.html")}">お問い合わせ</a>
          <a href="${p("privacy/index.html")}">プライバシーポリシー</a>
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
            <h3>当おやしろ</h3>
            <a href="${p("deities/index.html")}">御祭神</a>
            <a href="${p("about/index.html")}">分院について</a>
            <a href="${p("precinct/index.html")}">境内のご案内</a>
            <a href="${p("izumo/index.html")}">出雲大社について</a>
          </div>
          <div>
            <h3>ご祈祷・授与</h3>
            <a href="${p("kitou/index.html")}">ご祈祷</a>
            <a href="${p("reservation/index.html")}">ご予約フォーム</a>
            <a href="${p("izumoyashiki/index.html")}">出雲屋敷</a>
            <a href="${p("omamori/index.html")}">お守り・縁起物・おみくじ</a>
          </div>
          <div>
            <h3>お知らせ</h3>
            <a href="${p("news/index.html")}">お知らせ</a>
            <a href="${p("calendar/index.html")}">年間スケジュール</a>
          </div>
          <div>
            <h3>ご案内</h3>
            <a href="${p("access/index.html")}">交通アクセス</a>
            <a href="${p("contact/index.html")}">お問い合わせ</a>
            <a href="${p("privacy/index.html")}">プライバシーポリシー</a>
          </div>
        </div>
        <p class="copy">© Izumo Taisha Sanuki Branch</p>
      </div>
    </footer>
    <button class="to-top" type="button" aria-label="ページ上部へ">↑</button>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  document.querySelector(".menu-btn").addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
  document.querySelector(".to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

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
        const inner = marked ? `<span class="shakko">${d}</span>` : String(d);
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

  const typeMap = {
    enmusubi: "縁むすび",
    jichinsai: "地鎮祭",
    wedding: "神前結婚式",
    toshikae: "年変年戻し",
    iebarai: "家祓い",
    izumoyashiki: "出雲屋敷",
  };
  const typeSelect = document.querySelector("select[name='type']");
  if (typeSelect) {
    const type = new URLSearchParams(location.search).get("type");
    if (type && typeMap[type]) {
      typeSelect.value = typeMap[type];
      const banner = document.querySelector("[data-prefill-note]");
      if (banner) {
        banner.hidden = false;
        banner.textContent = `「${typeMap[type]}」で申し込み内容を入れています。`;
      }
    }
  }

  document.querySelectorAll("form[data-fake-submit]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("デモのため送信は行われません。受け入れ態勢が整い次第、本番の予約につなげます。");
    });
  });
})();
