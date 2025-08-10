// DOM
const menu1DOM = document.getElementById('menu-1');
const containerDOM = document.getElementsByClassName('container')[0];
 
// property
let menu1DOMStyles = getComputedStyle(menu1DOM);
let menu1DOMWidth = parseInt(removePxPrefix(menu1DOMStyles['width']));
const containerDOMMarginLeft = parseInt(getComputedStyle(containerDOM)['marginLeft']);
 
// set handlers
window.onscroll = windowOnScrollHandler;
 
// handlers
function windowOnScrollHandler() {
    const thisElement = this;
    const scrollTop = thisElement.scrollY;
 
 
    const menu1DOMHeight = parseInt(removePxPrefix(menu1DOMStyles['height']));
 
    if (menu1DOMHeight - 10 <= scrollTop) {
 
        menu1DOM.classList.add("sticky");
        menu1DOMStyles = getComputedStyle(menu1DOM);
        const menu1DOMPaddingRL = 10;
        menu1DOM.style.width = menu1DOMWidth + "px";
        menu1DOM.style.right = (containerDOMMarginLeft - menu1DOMPaddingRL) + "px";
 
    } else {
        menu1DOM.classList.remove("sticky");
        menu1DOM.style.right = "auto";
    }
 
}
 
// helpers
function removePxPrefix(pxcss) {
    const tmpPxCss = pxcss.replace("px", '');
    return tmpPxCss;
}