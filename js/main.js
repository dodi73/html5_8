// Fő angular modul.
var cipobolt = angular,module("cipobolt", []);

// Termékek.
cipobolt.controller("termekCtrl", function ($scope) {
    console.log("A termék kontroller elindult");
});

// Téma módosítása.
$("#theme-selector a").click(function (e) {
    
    // Esemény megállítása.
    e.preventDefault();
    
    // A kiválasztott link url-je.
    var theme = this.href.replace(location.origin, "").replace(/\//g, "");
    
    // Fő css link keresése.
    // lib/bootswatch/cerulean/bootstrap.css
    
    
}) 