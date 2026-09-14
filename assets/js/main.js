const apps = [
  {
    name: "Your App Name",
    slug: "your-app",
    status: "Coming soon",
    summary: "A short description of the app goes here.",
    appStoreUrl: "#",
    privacyUrl: "/privacy/your-app.html",
    supportUrl: "/support/your-app.html"
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
