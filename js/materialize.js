(function () {
    window.onload = function(){
        var frameName = new ds07o6pcmkorn({
            openElementId: "#shielded-logo"
        });
        frameName.init();

        $('.modal').modal();

        $(".button-collapse").sideNav();
        
         $('select').formSelect();
    }
})();

document.getElementById("loginButton").onclick = function () {
    location.href = "home.html";
};
