function addListeners(parentClass){
    var focusableItems = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', '[tabindex="0"]'];
    for (i = 0, leni = focusableItems.length; i < leni; i++) {
        var focusableElements = document.querySelectorAll("." + parentClass + " " + focusableItems[i]);
        for (j = 0, lenj = focusableElements.length; j < lenj; j++) {
            focusableElements[j].addEventListener("focus", function() {
              document.querySelector("." + parentClass).classList.add("focus-within");
            });
            focusableElements[j].addEventListener("blur", function() {
              document.querySelector("." + parentClass).classList.remove("focus-within");
            });
        }
    }
}
addListeners("flip-card");