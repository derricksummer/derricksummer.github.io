const apps = [
  {
    name: "급식지킴이",
    slug: "meal-guardian",
    status: "App Store review",
    summary: "학교 급식을 확인하고 아이의 알레르기·주의 식품이 들어간 메뉴를 미리 알려주는 앱",
    appStoreUrl: "#",
    privacyUrl: "/privacy/meal-guardian.html",
    supportUrl: "/support/meal-guardian.html"
  },
  {
    name: "하루씩 · Day by Day",
    slug: "day-by-day",
    status: "Coming soon",
    summary: "시작하거나 끊은 지 며칠째인지 큰 숫자로 보여주고, 그 순간을 카드로 공유하는 앱. Count the days since you started, one big number at a time.",
    appStoreUrl: "#",
    privacyUrl: "/privacy/day-by-day.html",
    supportUrl: "/support/day-by-day.html"  },
  {
    name: "쉿컷 · shh.cut",
    slug: "shh-cut",
    status: "Coming soon",
    summary: "셔터 소리 없이 찍고, 내 문구를 도장처럼 남기고, 친구와 네컷을 만드는 감성 카메라. A silent camera: shoot quietly, stamp it, strip it.",
    appStoreUrl: "#",
    privacyUrl: "/privacy/shh-cut.html",
    supportUrl: "/support/shh-cut.html"
  }
];

function renderAppList() {
  const targets = document.querySelectorAll("[data-app-list]");

  targets.forEach((target) => {
    target.innerHTML = "";

    apps.forEach((app) => {
      const item = document.createElement("article");
      item.className = "app-card";

      const header = document.createElement("div");
      header.className = "app-card__header";

      const titleWrap = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = app.name;

      const status = document.createElement("p");
      status.className = "app-card__status";
      status.textContent = app.status;

      titleWrap.append(title, status);

      const summary = document.createElement("p");
      summary.className = "app-card__summary";
      summary.textContent = app.summary;

      const links = document.createElement("div");
      links.className = "app-card__links";

      [
        ["App Store", app.appStoreUrl],
        ["Privacy Policy", app.privacyUrl],
        ["Support", app.supportUrl]
      ].forEach(([label, href]) => {
        const link = document.createElement("a");
        link.href = href;
        link.textContent = label;
        if (href.startsWith("http")) {
          link.rel = "noopener noreferrer";
        }
        links.appendChild(link);
      });

      header.appendChild(titleWrap);
      item.append(header, summary, links);
      target.appendChild(item);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderAppList);
