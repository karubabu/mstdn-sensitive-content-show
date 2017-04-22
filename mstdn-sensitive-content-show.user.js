setInterval(function(){$(".status").map(function(){
	if($(this).children("div").length == 4)
    {
		var that = this;
		if($(that).find("div > div > a:not('[class]')").length == 0){$(that).children("div").eq(2).find("div").trigger("click")}

}
})},1000);
