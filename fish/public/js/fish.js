document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("table.fish tbody");
  tbody.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const parTR = target.closest("TR");
      const isbn = parTR.dataset.isbn;
      alert(isbn);

      //   document.location.href = `/fish/${isbn}/fish`;
    }
  });
});
