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

document.getElementById("loginButton").onclick = function () {
    location.href = "home.html";
};

jQuery(document).ready(function(){
    jQuery('.timepicker').timepicker({
      twelveHour: false
    });
  });