const apps = [
  {
    name: "하루씩 · Day by Day",
    slug: "day-by-day",
    icon: "/assets/img/day-by-day.png",
    status: "Coming soon",
    summary: "시작하거나 끊은 지 며칠째인지 큰 숫자로 보여주고, 그 순간을 카드로 공유하는 앱. Count the days since you started, one big number at a time.",
    appStoreUrl: "#",
    privacyUrl: "/privacy/day-by-day.html",
    supportUrl: "/support/day-by-day.html"
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

      const identity = document.createElement("div");
      identity.className = "app-card__identity";
      if (app.icon) {
        const icon = document.createElement("img");
        icon.className = "app-card__icon";
        icon.src = app.icon;
        icon.alt = "";
        icon.loading = "lazy";
        icon.width = 56;
        icon.height = 56;
        identity.append(icon);
      }
      identity.append(titleWrap);

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

      header.appendChild(identity);
      item.append(header, summary, links);
      target.appendChild(item);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderAppList);
