let LargerText
(function () {
    window.onload = function(){
        var frameName = new ds07o6pcmkorn({
            openElementId: "#shielded-logo"
        });
        frameName.init();

        M.AutoInit();

        //Init modal
        $('.modal').modal();

        //Init sidenav
        $(".button-collapse").sideNav();

        //Init drop-down forms
        $('select').formSelect();
    }
})();

document.getElementById("biggerButton").onclick = function(){
	if (LargerText === false) {
		document.body.style.fontSize = "1.2rem";
		LargerText = true;
	} else {
		document.body.style.fontSize = "2.4rem";
		LargerText = false;
	}		
};

jQuery(document).ready(function(){
    jQuery('.timepicker').timepicker({
      twelveHour: false
    });
  });
