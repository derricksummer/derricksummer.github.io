const apps = [
  {
    name: "또갈집 · Go Again",
    slug: "goagain",
    icon: "/assets/img/goagain.png",
    status: "Coming soon",
    summary: "별점 대신 ‘또 갈래 / 애매하긴 해 / 한 번이면 됐어’만 기록하는 나만의 맛집 다이어리. Remember only whether you'd go again.",
    appStoreUrl: "#",
    privacyUrl: "/privacy/goagain.html",
    supportUrl: "/support/goagain.html"
  },
  {
    name: "급식지킴이",
    slug: "meal-guardian",
    icon: "/assets/img/meal-guardian.png",
    status: "App Store review",
    summary: "학교 급식을 확인하고 아이의 알레르기·주의 식품이 들어간 메뉴를 미리 알려주는 앱",
    appStoreUrl: "#",
    privacyUrl: "/privacy/meal-guardian.html",
    supportUrl: "/support/meal-guardian.html"
  },
  {
    name: "하루씩 · Day by Day",
    slug: "day-by-day",
    icon: "/assets/img/day-by-day.png",
    status: "Coming soon",
    summary: "시작하거나 끊은 지 며칠째인지 큰 숫자로 보여주고, 그 순간을 카드로 공유하는 앱. Count the days since you started, one big number at a time.",
    appStoreUrl: "#",
    privacyUrl: "/privacy/day-by-day.html",
    supportUrl: "/support/day-by-day.html"
  },
  {
    name: "쉿컷 · shh.cut",
    slug: "shh-cut",
    icon: "/assets/img/shh-cut.png",
    status: "Coming soon",
    summary: "셔터 소리 없이 찍고, 내 문구를 도장처럼 남기고, 친구와 네컷을 만드는 감성 카메라. A silent camera: shoot quietly, stamp it, strip it.",
    appStoreUrl: "#",
    privacyUrl: "/privacy/shh-cut.html",
    supportUrl: "/support/shh-cut.html"
  },
  {
    name: "또알림",
    slug: "ddoalrim",
    icon: "/assets/img/ddoalrim.png",
    status: "Available on the App Store",
    summary: "머리 자르기, 렌즈 교체, 검진처럼 주기적으로 반복하는 생활 관리를 대신 기억해 다음 예정일을 알려주는 리마인더 앱",
    appStoreUrl: "https://apps.apple.com/app/id6814084090",
    privacyUrl: "/privacy/ddoalrim.html",
    supportUrl: "/support/ddoalrim.html"
  },
  {
    name: "수학 연산 도감 · Math Collector",
    slug: "math-collector",
    icon: "/assets/img/math-collector.png",
    status: "Available on the App Store",
    summary: "더하기·빼기·곱셈·나눗셈을 미션과 60초 번개 도전으로 풀고, 모은 별로 도감 친구를 찾는 숫자 놀이 앱",
    appStoreUrl: "https://apps.apple.com/app/id6811534604",
    privacyUrl: "/privacy/math-collector.html",
    supportUrl: "/support/math-collector.html"
  },
  {
    name: "퇴근까지",
    slug: "toegeunkkaji",
    icon: "/assets/img/toegeunkkaji.png",
    status: "Coming soon",
    summary: "오늘 번 돈과 퇴근까지 남은 시간을 실시간으로 확인하고, 귀여운 캐릭터와 함께 하루의 수고를 기록·공유하는 앱",
    appStoreUrl: "#",
    privacyUrl: "/privacy/toegeunkkaji.html",
    supportUrl: "/support/toegeunkkaji.html"
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
