const btn = document.querySelector(".newtask");
const list = document.querySelector(".tasklist");
var count = 2;

function insertHtml() {
    const html = `
    <div class="d-flex justify-content-center m-2 model new-element">
    <input
      class="form-control w-75"
      type="text"
      placeholder="Write here..."
    />
    <input type="checkbox" class="m-2" />
  </div>`
    return html;
  }

    btn.addEventListener("click", () => {
    count ++;
    const div = insertHtml(count);
    list.insertAdjacentHTML("beforeend", div);
  });