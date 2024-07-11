function togClass(eleId, className) {
  $("#" + eleId).toggleClass(className);
}
function addClass(eleId, className) {
  $("#" + eleId).addClass(className);
}
function removeClass(eleId, className) {
  $("#" + eleId).removeClass(className);
}

function togClassAll(eleId, className) {
  $(`[id^=${eleId}]`).toggleClass(className);
}
function addClassAll(eleId, className) {
  $(`[id^=${eleId}]`).addClass(className);
}
function removeClassAll(eleId, className) {
  $(`[id^=${eleId}]`).removeClass(className);
}

function togClassSelf(event, className) {
  event.target.classList.toggle(className);
}
function addClassSelf(event, className) {
  event.target.classList.add(className);
}
function removeClassSelf(event, className) {
  event.target.classList.remove(className);
}

function createEle(classList = "") {
  var ele = document.createElement("div");
  ele.className = classList;
  return ele;
}

function locateTo(urlLink) {
  window.location.href = urlLink;
}

function scrollToElement(urlLink, offset = 0) {
  var element = document.getElementById(urlLink);
  var elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: elementPosition - offset,
    behavior: "smooth",
  });
}

function navScroll(navId, eleId, offset = 0) {
  scrollToElement(eleId, offset);
  removeClassAll("nav", "active");
  addClass(navId, "active");
}

window.onload = () => {
  const url = "menu.json";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.menu);
      data.menu.forEach((item) => {
        var ele = createEle("col-lg-4 col-sm-12 mb-4");
        ele.innerHTML = `
            <div class="container-fluid px-0 border border-3">
            <div class="container-fluid px-0 shadow">
              <div class="row m-0 p-0 fs-3">
                
                ${
                  item.note
                    ? `
                    <div class="col-8 bg-dblue ps-3 text-white py-3">
                  ${item.name}
                </div>
                    <div class="col-4 px-0 bg-dark position-relative">
                  <div class="text-center px-0 w-100 position-absolute top-50 start-50 translate-middle">
                    <div class="c-lblue fs-5">
                      ${item.note}
                    </div>
                  </div>
                </div>
                    `
                    : ` <div class="col-12 bg-dblue ps-3 text-white py-3">
                  ${item.name}
                </div>`
                }

                
              </div>
              <div class="container pb-2">
                ${
                  item.discount != 0
                    ? `<div><span class="fs-3 c-dblue text-decoration-line-through">${item.price}</span>
                        <span class="fs-4 ps-3">${item.discount}</span>
                       </div>`
                    : `<div><span class="fs-3">${item.price}</span></div>`
                }
                <div class="container-fluid px-0 pt-60 position-relative">
                  <img class="object-fit-cover w-100 h-100 position-absolute top-0 start-0" src="menuImage/image0.png" alt="" />
                </div>
              </div>
            </div>
          </div>
                        `;
        $("#menu").append(ele);
      });
    });

  scrollToElement("backToTop");
};

function showFooter() {
  removeClass("footer", "d-none");
  scrollToElement("footer");
  addClass("showFooter", "d-none");
}
