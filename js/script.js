"use strict"

window.onload = function (){

	$("#apps").bind("click",function(){
		if(googleApps.style.display == "block" && event.target == document.getElementById("app")){
			style("#googleAppsAfters", "display", "none")
			style("#googleApps", "display", "none")
		}
		else if(googleApps.style.display == "" || googleApps.style.display == "none" || event.type == "click"){
			style("#googleAppsAfters", "display", "block")
			style("#googleApps", "display", "block")
		}
	})

	
	$.get("https://ipinfo.io", function(response) {
	   let countrys = response.country;
	   let xhr = new XMLHttpRequest();
		xhr.open("get","names.json",true)
		xhr.send()
		xhr.onload = function(){
			let names = JSON.parse(this.response)
				for(let key in names){
					if(key == countrys){
						$("#country").html(names[key])
					}
				}
		}

	 }, "jsonp")



	$("body").click(function(e) {
	if($(e.target).closest("#googleApps").length==0 && event.target != document.getElementById("app")){	
		 style("#googleAppsAfters", "display", "none")
		 style("#googleApps", "display", "none")
	}
});



	$("#dopApps").bind("click", function(){
		style("#dopApps", "display", "none")
		style("#line", "display", "block")
		style("#dopAppsGoogle", "display", "block")

		//let vrem = googleApps.getBoundingClientRect()


		let vrem = -10;
		let smoothTransition = setInterval(function(){
			
			if(googleApps.scrollTop >= vrem){
				vrem = googleApps.scrollTop
				googleApps.scrollTop +=20
			}
			else{clearInterval(smoothTransition)}
		},20)
		//googleApps.scrollTop = vrem.height
	})


	$("#googleApps").bind("wheel", function(){

		if($("#googleApps").css("display") == "block" && event.deltaY > 0){
			style("#dopApps", "display", "none")
			style("#line", "display", "block")
			style("#dopAppsGoogle", "display", "block")
		}


		else if(googleApps.scrollTop == 0){
			style("#dopApps", "display", "block")
			style("#line", "display", "none")
			style("#dopAppsGoogle", "display", "none")
		}


		else if($("#dopApps").scrollTop == 0){
			style("#dopApps", "display", "block")
			style("#line", "display", "none")
			style("#dopAppsGoogle", "display", "none")
		}
		
	})

	function style(id, tag, value){
		$(id).css(tag, value)
	}

}