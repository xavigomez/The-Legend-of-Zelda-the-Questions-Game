window.addEventListener( "load", ready, false );


function ready(){

    ( activePlayer() )? activePlayerPanel(): noActivePlayerPanel();

    document.getElementById( 'add-player' ).addEventListener( 'click', addPlayer, false );
    document.getElementById( 'log-out' ).addEventListener( 'click', logOut, false );
    document.getElementById( 'start-game' ).addEventListener( 'click', startGame, false );

}

// Funciones

function startGame(){
    openGameWindow('game-window.html', 'Game Window', screen.width/2, screen.height/2)
}
function openGameWindow(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}
function logOut(){
    deleteCookie('playerName');
    ( activePlayer() )? activePlayerPanel(): noActivePlayerPanel();
}
function addPlayer(){
    setCookie('playerName', document.getElementById('player-name').value, 10);
    ( activePlayer() )? activePlayerPanel(): noActivePlayerPanel();
}
function activePlayer(){
    if( getCookie( 'playerName' ) === '' ){
        return false;
    }else{
        return true;
    }
}
function activePlayerPanel(){
    console.log( 'Hay jugador' );
    document.getElementById("input-player-name-container").className = 'hidden';
    document.getElementById("player-control-panel").className = 'visible';
    alert( '¡A jugar ' + getCookie('playerName') + '!');
}
function noActivePlayerPanel(){
    console.log( 'No hay jugador' );
    document.getElementById("input-player-name-container").className = 'visible';
    document.getElementById("player-control-panel").className = 'hidden';
}
function deleteCookie() {
    setCookie("playerName", "", -1);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0)
            return   c.substring(name.length, c.length);
    }
    return "";
}

// Preguntas

var questions = [
    ['En que reino vive Zelda?', [
        ['El reino de Zelda', '0']
        , ["El reino Champion", "0"]
        , ["El reino de Narnia", "0"]
        , ["El reino de Hyrule", "1"]
    ]
    ]
    , ["Que parte de la trifuerza porta Link?", [
        ["La trifuerza del valor ", "1"]
        , ["La trifuerza de la sabiduria", "0"]
        , ["La trifuerza de la temeridad", "0"]
        , ["La trifuerza del poder", "0"]
    ]
    ],
    ["Que poder tiene la Espada Maestra?", [
        ["El poder de cortar piedras", "0"]
        , ["El poder de repeler el mal", "1"]
        , ["El poder de controlar la trifuerza", "0"]
        , ["¡YOOO TENGOOO EL PODEEEEEER!", "0"]
    ]
    ]
    , ["Quien es el portador de la trifuerza del poder?", [
        ["Tingle", "0"]
        , ["Zelda", "0"]
        , ["Ganon", "1"]
        , ["Link", "0"]
    ]
    ]
    , ["Que mistica raza vive en los lagos de Hyrule? ", [
        ["Los Goron", "0"]
        , ["Los Zora", "1"]
        , ["Los Deku", "0"]
        , ["Los Hylianos", "0"]
    ]
    ]
    , ["Quien porta la Mascara de Majora?  ", [
        ["Link", "0"]
        , ["Skull Kid", "1"]
        , ["El mercader de máscaras", "0"]
        , ["Ganondorf", "0"]
    ]
    ]
    , ["Que tres diosas formaron el reino de Hyrule?  ", [
        ["Lin, Foroe y Nyanru", "0"]
        , ["Atena, Venus y Mercurio", "0"]
        , ["Din, Faroe y Naryu", "1"]
        , ["Sailor Moon, Sailor Marth y Sailor Mercury", "0"]
    ]
    ]
];