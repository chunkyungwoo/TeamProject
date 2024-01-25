document.addEventListener("DOMContentLoaded", () => {
  const main_nav = document.querySelector("nav.main");
  main_nav.addEventListener("click", (e) => {
    const target = e.target;
    const tagName = target.tagName;

    if (tagName === "LI") {
      const menu_text = target.textContent;
      let url = "/";
      if (menu_text === "로그인") {
        url = "/user/login";
      }
      document.location.href = url;
    }
  });
});
