// @ts-check
// @ts-ignore
// Welcome Msg

$(document).ready(function () {
    
});

var log = function (log) { 
    // @ts-ignore
    $('#okienko').append('<p>' + log + '</p>');

    };

var user = function (name, race, dmg, lvl, stamina, eq) {

    this.name = name;
    this.race = race;
    this.dmg = dmg;
    this.lvl = lvl;
    this.stamina = stamina;
    this.eq = eq;
};

var player = new user("Bolo", "Human", 100, 10, 50, "Gladiator's Sword");

log(player.name);