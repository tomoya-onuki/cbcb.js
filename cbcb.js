const param = getScriptParams();
// console.log(param.color);

window.addEventListener('load', () => {
    // Set up Google Font
    const googleFontLinkElem = document.createElement('link');
    googleFontLinkElem.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
    googleFontLinkElem.setAttribute('rel', 'stylesheet');
    googleFontLinkElem.setAttribute('type', 'text/css');

    const headElem = document.querySelector('head');
    headElem.appendChild(googleFontLinkElem);


    document.querySelectorAll('pre').forEach(preElem => {

        // Create Copy button box
        const cpBtnElem = document.createElement('div');
        cpBtnElem.classList.add('cbcb-btn-box');
        cpBtnElem.style.color = param.color;

        // Create element showing copied message.
        const copiedTextElem = document.createElement('span');
        copiedTextElem.classList.add('cbcb-msg');
        copiedTextElem.textContent = 'copied!';

        // Create copy logo element
        const cpLogoElem = document.createElement('span');
        cpLogoElem.classList.add('cbcb-btn');
        cpLogoElem.classList.add('material-symbols-outlined');
        cpLogoElem.textContent = 'content_copy';

        cpBtnElem.appendChild(copiedTextElem);
        cpBtnElem.appendChild(cpLogoElem);

        // Click event listner
        const codeElem = preElem.querySelector('code');
        cpBtnElem.addEventListener('click', () => {
            copiedTextElem.style.display = 'inline-block';

            let ms = 1000;
            copiedTextElem.style.transition = "opacity " + ms + "ms";
            setTimeout(() => copiedTextElem.style.opacity = 0, 700);
            setTimeout(() => {
                copiedTextElem.style.opacity = 1;
                copiedTextElem.style.display = "none";
            }, ms);

            navigator.clipboard.writeText(codeElem.textContent);
        });
        preElem.insertBefore(cpBtnElem, codeElem);
        // preElem.insertAdjacentElement("beforebegin", cpBtnElem);
    });
});


function getScriptParams() {
    var scripts = document.getElementsByTagName('script');
    var src = scripts[scripts.length - 1].src;

    var query = src.substring(src.indexOf('?') + 1);
    var parameters = query.split('&');

    var result = new Object();
    for (var i = 0; i < parameters.length; i++) {
        var element = parameters[i].split('=');

        var paramName = decodeURIComponent(element[0]);
        var paramValue = decodeURIComponent(element[1]);

        result[paramName] = paramValue;
    }

    return result;
}