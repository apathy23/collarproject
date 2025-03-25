// ==UserScript==
// @name         millies collar
// @namespace    https://www.bondageprojects.com/
// @version      0.1
// @description  Collar for millie
// @author       Natalie
// @match        https://bondageprojects.elementfx.com/*
// @match        https://www.bondageprojects.elementfx.com/*
// @match        https://bondage-europe.com/*
// @match        https://www.bondage-europe.com/*
// @match        http://localhost:*/*
// @grant        none
// @updateURL    https://cdn.jsdelivr.net/gh/apathy23/milliescollar@main/loader.user.js
// @downloadURL  https://cdn.jsdelivr.net/gh/apathy23/milliescollar@main/loader.user.js
// ==/UserScript==

(function() {
    "use strict";
    const script = document.createElement("script");
    script.src = `https://cdn.jsdelivr.net/gh/apathy23/milliescollar@main/src/main.js?ts=${Date.now()}`;
    //script.type = "module";
    document.head.appendChild(script);
})();