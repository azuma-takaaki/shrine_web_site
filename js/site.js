(() => {
  const root = document.documentElement.dataset.root || ".";
  const p = (path) => `${root}/${path}`.replace(/\/{2,}/g, "/");

  const header = `
    <header class="site-header">
      <div class="header-inner">
        <a class="logo" href="${p("index.html")}">
          <img src="${p("assets/crest.svg")}" alt="社紋">
          <span class="logo-text">
            <small>IZUMO TAISHA SAITAMA</small>
            <strong>出雲大社埼玉分院</strong>
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
          <h3>祈祷</h3>
          <a href="${p("kitou/index.html")}">祈祷</a>
          <a href="${p("reservation/index.html")}">祈祷のご予約フォーム</a>
          <a href="${p("enmusubi/index.html")}">縁むすび</a>
          <a href="${p("shichigosan/index.html")}">七五三詣</a>
          <a href="${p("girei/index.html")}">人生儀礼</a>
          <a href="${p("hatsumode/index.html")}">新年初祈祷</a>
        </div>
        <div class="nav-col">
          <h3>出張祭典</h3>
          <a href="${p("shucchou/index.html")}">出張祭典</a>
          <a href="${p("izumoyashiki/index.html")}">出雲屋敷</a>
          <a href="${p("shucchou-form/index.html")}">出張祭典のご予約フォーム</a>
          <h3>授与品</h3>
          <a href="${p("omamori/index.html")}">お守り・縁起物・おみくじ</a>
          <a href="${p("goshuin/index.html")}">御朱印</a>
        </div>
        <div class="nav-col">
          <h3>年間の祈り</h3>
          <a href="${p("otakiage/index.html")}">お焚き上げ</a>
          <a href="${p("oharae/index.html")}">大祓人形</a>
          <a href="${p("jinzaimode/index.html")}">神在詣</a>
          <a href="${p("usagi/index.html")}">うさぎ縁むすび祭</a>
          <a href="${p("calendar/index.html")}">年間行事</a>
          <a href="${p("yakudoshi/index.html")}">厄年・赤口詣・戌の日</a>
        </div>
        <div class="nav-col">
          <h3>当おやしろ</h3>
          <a href="${p("faith/index.html")}">出雲大社の信仰</a>
          <a href="${p("ryujashin/index.html")}">龍蛇神プロジェクト</a>
          <a href="${p("news/index.html")}">お知らせ</a>
          <a href="${p("recruit/index.html")}">採用情報</a>
          <a href="${p("media/index.html")}">メディアの方へ</a>
          <a href="${p("access/index.html")}">交通アクセス</a>
          <a href="${p("contact/index.html")}">お問い合わせ</a>
          <a href="${p("faq/index.html")}">よくある質問</a>
          <a href="${p("privacy/index.html")}">プライバシーポリシー</a>
          <a href="${p("yahashira/index.html")}">出雲大社埼玉分院 八柱支部</a>
        </div>
      </div>
    </nav>
  `;

  const footer = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-info">
          <h2>出雲大社埼玉分院</h2>
          <p>〒351-0011 埼玉県朝霞市本町2-20-18</p>
          <p>TEL：048-463-3720　FAX：048-463-3723</p>
          <p>MAIL：info@izumotaisha-saitama.com</p>
          <p>開門時間：8:30－17:00（年中無休）　受付時間：9:00－17:00</p>
        </div>
        <div class="footer-nav">
          <div>
            <h3>祈祷</h3>
            <a href="${p("kitou/index.html")}">祈祷</a>
            <a href="${p("reservation/index.html")}">祈祷のご予約フォーム</a>
            <a href="${p("enmusubi/index.html")}">縁むすび</a>
            <a href="${p("shichigosan/index.html")}">七五三詣</a>
            <a href="${p("girei/index.html")}">人生儀礼</a>
            <a href="${p("hatsumode/index.html")}">新年初祈祷</a>
          </div>
          <div>
            <h3>出張祭典・授与品</h3>
            <a href="${p("shucchou/index.html")}">出張祭典</a>
            <a href="${p("izumoyashiki/index.html")}">出雲屋敷</a>
            <a href="${p("omamori/index.html")}">お守り・縁起物・おみくじ</a>
            <a href="${p("goshuin/index.html")}">御朱印</a>
            <a href="${p("otakiage/index.html")}">お焚き上げ</a>
            <a href="${p("oharae/index.html")}">大祓人形</a>
          </div>
          <div>
            <h3>信仰・行事</h3>
            <a href="${p("faith/index.html")}">出雲大社の信仰</a>
            <a href="${p("ryujashin/index.html")}">龍蛇神プロジェクト</a>
            <a href="${p("jinzaimode/index.html")}">神在詣</a>
            <a href="${p("usagi/index.html")}">うさぎ縁むすび祭</a>
            <a href="${p("calendar/index.html")}">年間行事</a>
            <a href="${p("yakudoshi/index.html")}">厄年・赤口詣・戌の日</a>
          </div>
          <div>
            <h3>ご案内</h3>
            <a href="${p("news/index.html")}">お知らせ</a>
            <a href="${p("access/index.html")}">交通アクセス</a>
            <a href="${p("contact/index.html")}">お問い合わせ</a>
            <a href="${p("faq/index.html")}">よくある質問</a>
            <a href="${p("recruit/index.html")}">採用情報</a>
            <a href="${p("privacy/index.html")}">プライバシーポリシー</a>
            <a href="${p("yahashira/index.html")}">八柱支部</a>
          </div>
        </div>
        <p class="copy">© Izumo Taisha Saitama Branch</p>
      </div>
    </footer>
    <button class="to-top" type="button" aria-label="ページ上部へ">↑</button>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);

  const menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
  document.querySelector(".to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const shakko = {
    1: [2, 8, 14, 19, 25, 31],
    2: [6, 12, 22, 28],
    3: [6, 12, 18, 23, 29],
    4: [4, 10, 16, 20, 26],
    5: [2, 8, 14, 19, 25, 31],
    6: [6, 12, 16, 22, 28],
    7: [4, 10, 14, 20, 26],
    8: [1, 7, 18, 24, 30],
    9: [5, 15, 21, 27],
    10: [3, 9, 14, 20, 26],
    11: [1, 7, 11, 17, 23, 29],
    12: [5, 10, 16, 22, 28],
  };
  const inu = {
    1: [12, 24],
    2: [5, 17],
    3: [1, 13, 25],
    4: [6, 18, 30],
    5: [12, 24],
    6: [5, 17, 29],
    7: [11, 23],
    8: [4, 16, 28],
    9: [9, 21],
    10: [3, 15, 27],
    11: [8, 20],
    12: [2, 14, 26],
  };

  const calRoot = document.querySelector("[data-calendar]");
  if (calRoot) {
    let year = 2026;
    let month = 8;
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
        let cls = dow === 0 ? "sun" : "";
        let inner = String(d);
        if ((shakko[month] || []).includes(d)) {
          inner = `<span class="shakko">${d}</span>`;
        } else if ((inu[month] || []).includes(d)) {
          inner = `<span class="inu">${d}</span>`;
        }
        html += `<td class="${cls}">${inner}</td>`;
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

  document.querySelectorAll("form[data-fake-submit]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("デモサイトのため送信は行われません。後ほど実フォームへ差し替えできます。");
    });
  });
})();
