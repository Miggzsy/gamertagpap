"use strict";
var EventHandler = {
    ShowHideSideBar: function () {
        if (document.getElementById("side-panel").className.indexOf("open") !== -1) {
            document.getElementById("side-panel").className = "side-panel";
            document.getElementById("side-panel").className += " close";
            document.getElementById('show_hide').childNodes[0].className = "fa fa-user";
            return;
        }
        document.getElementById("side-panel").className = "side-panel";
        document.getElementById("side-panel").className += " open";
        document.getElementById('show_hide').childNodes[0].className = "fa fa-user";
    }
};
window.onload = function () {
    document.getElementById('show_hide').onclick = EventHandler.ShowHideSideBar;
};

(function(){
  $('.menu-right').click(function(){$('#menu-right').toggleClass('active')})
})()