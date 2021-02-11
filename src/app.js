
// traversing through the tabs in the DOM
const tabs = document.querySelectorAll(".tab-item");
// traversing the DOM to get the tabs content
const tab_content = document.querySelectorAll(".tab-content-item");

// selecting item function
function selectItem(){
    removeBorder();
    removeShow();

    this.classList.add("tab-border");
    const content_item = document.querySelector(`#${this.id}-content`);
    
    content_item.classList.add("show");
}

// function to remove border from the previous element
function removeBorder(){
    tabs.forEach((event) => {
        event.classList.remove("tab-border");
    })
};

// function to remove content that belongs to a different tab
function removeShow(){
    tab_content.forEach((event) => {
        event.classList.remove("show");
    })
};

// add event listener for the tabs when clicked
// the tabs gives us a node list that we can loop through using forEach
tabs.forEach(event => event.addEventListener("click", selectItem));