var tabs = document.querySelectorAll(".tab__item");
var tabsContent = document.querySelectorAll(".tab__content");

console.log(tabs);

applyIndicatorClass(tabs[0]);
displaySelectedTab(tabsContent[0].dataset.index);


for (let tab of tabs) {
    tab.addEventListener("click", (event) => {
        applyIndicatorClass(event.target);
        displaySelectedTab(event.target.dataset.index);
    })
}

function applyIndicatorClass(target) {
    console.log("apply");
    for (let tab of tabs){
        if(tab.dataset.index == target.dataset.index) {
            tab.classList.add("tab__item--has-indicator");
        } else {
            tab.classList.remove("tab__item--has-indicator");
        }
    }
}

function displaySelectedTab(selectedTable) {
    for (let content of tabsContent){
        if (selectedTable == content.dataset.index) {
            content.style.display = "block"
        } else {
            content.style.display = "none"
        }
    }
}

     
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__card__close');
const closeBtn = document.querySelector('.modal__card__footer__close');

closeModal.addEventListener("click", () => {
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
  modal.classList.add("modal--is-hidden");
})

closeBtn.addEventListener("click", () => {
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
  modal.classList.add("modal--is-hidden");
})

document.querySelector("#openModal").addEventListener("click", () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
    modal.classList.remove("modal--is-hidden")
})
