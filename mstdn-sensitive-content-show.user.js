// ==UserScript==
// @name         mstdn-sensitive-content-show
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ますとどんの不適切なコンテンツを表示を勝手に表示するやつ
// @author       karubabu
// @match        https://mstdn.maud.io/web/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function(){$(".status").map(function(){
	if($(this).children("div").length == 4)
    {
		var that = this;
		if($(that).find("div > div > a:not('[class]')").length == 0){$(that).children("div").eq(2).find("div").trigger("click");}

}
});},1000);

})();
