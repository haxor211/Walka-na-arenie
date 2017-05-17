// @ts-check
// Welcome Msg
$(document).ready(function () {

$('#okienko-lock .button').click(function () {
    $('#okienko').append('<div class="enter"<p>' + "Witaj na arenie Dragon Slayer dzisiaj bedzie gral jako " + player.name + '</p></div>')
    .find('.enter').fadeOut(3000);
    $('#okienko-lock').fadeOut('slow');
    nextFade();
})

// End of Welcome MSG



});

var faderIndex = 0,
    faders = $('.story');

var nextFade = function() {                                //Leci text story 1 po drugim
        $(faders[faderIndex]).fadeOut(3000, function() {
            faderIndex++;
            $(faders[faderIndex]).fadeIn(2000, nextFade);
        
        var body = $('body');                               
            body.one('click', function () {
                body.append('<div id="overlay"></div>');    // Dodaje diva overlay ktorego nie da rady klikac
                $('#overlay').fadeIn();                     
                //$(this).css("background-image", 'url("https://www.hackread.com/wp-content/uploads/2016/07/Amazon-kindle-servers-breached-hacked-2.png"')
                // @ts-ignore
                //$('.main').hide('drop', { direction: 'down' }, 'fast');
            });
        });
    }

var user = function (name, race, dmg, lvl, stamina, eq) {

    this.name = name;
    this.race = race;
    this.dmg = dmg;
    this.lvl = lvl;
    this.stamina = stamina;
    this.eq = eq;

};

var log = function (log) {
    $('#okienko').append('<p>' + log + '</p>');

};

    

var player = new user("Bolo");