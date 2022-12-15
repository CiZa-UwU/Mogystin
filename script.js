var panel = document.querySelectorAll(".panel");
panel.forEach(function (e) {
  e.addEventListener("click", function () {
    removeclass();
    e.classList.add("active");

    document.querySelectorAll(".panel-descr").forEach(function (panelDescr) {
      panelDescr.classList.remove("panel-descr_active");
    });

    const handler = e.dataset.handler;
    document
      .querySelector(`[data-target="${handler}"]`)
      .classList.add("panel-descr_active");
  });
});

function removeclass() {
  panel.forEach(function (e) {
    e.classList.remove("active");
  });
}
