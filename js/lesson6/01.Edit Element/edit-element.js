function editElement(htmlElem, matcher, replacer) {
    let htmlContent = htmlElem.textContent;
    htmlContent = htmlContent.replaceAll(matcher, replacer);
    htmlElem.textContent = htmlContent;
    
}