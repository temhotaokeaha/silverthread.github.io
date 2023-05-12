//EXTREMELY USEFUL COMMENTS GUYS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const pink = "#c778b8" // pink
const red = "#c73a3a" // red
const dark_red = "#7b3e3c" // dark_red
const darker_red = "#442726" // darker_red

const green = "#42a67a" // green
const dark_green = "#2b785b" // dark_green

const light_cyan = "#85b3bd" // light cyan
const cyan = "#5c7e90" // cyan
const dark_cyan = "#3b5460" // dark cyan
const blue = "#312376" // blue
const dark_blue = "#1c1d3f" // dark blue

const white = "#b1b1b1" // white
const light_gray = "#737373" // light gray
const gray = "#404040" // gray or dark gray
const black = "#090909" // black

const ch1 = [

"screen",
"jungle",

"notepad",
"about recognition, it's about common sense. Naming IS design. Name a car banana and paint it blue -- that's a shitty design. Name a program VOLKSWIRT and ship it internationally and god bless you on explaining to japanese clerks what VOLKSWIRT is.<br><br>Man i really dont care at this point, ship has sailed, just get it out of my system plus -- its for MD to sort out anyway, im not touching anything there, have fun with your tanking sales. No clue why did they pushed Office so much, if this dogshit conveyor belt continues operating im walking out.<br><br><br><br>",

"notepad",
"[DAY 145]<br>",

"notepad",
"Not touching ANYTHING with mazer in its name for the next week :-)<br><br>",

//frog game deluxe
"notepad",
"Aside from some games and a PM or two -- I wanna get the frog game rom and talk to Owen. Preferably both at the same time. ",

"notepad",
"And pull the plug for this week. I'm literally seeing CRT lines by now.",

"screen",
"desktop",

"screen",
"desktop_start_menu",

"screen",
"desktop_start_menu_mnet",

"screen",
"browser_loading",

"screen",
"browser_login",

"captcha_or_welcome",
"<b>Warning</b><br>MazerNet is experiencing an unusual influx of requests from your MNP range. Please complete the following test before proceeding.",

"screen",
"browser_captcha_solved",

"screen",
"browser_captcha_pass",

"screen",
"contacts",

"out_u_n_owen",
"Hi 345t745674567"

];



const messageSources = [
"in_bogdan_janowski",
"in_captain_tamanegi",
"in_charles_zhang",
"in_christian_weiss",
"in_dmitry_lifshitz",
"in_jane_cooper",
"in_julia_shwartz",
"in_katrin_fischer",
"in_kpachoemope",
"in_nathan_kennedy",
"in_oliver_murphy",
"in_sample",
"in_sergey_temnov",
"in_sgttrs",
"in_simon_champion",
"in_smell_of_thunder",
"in_supersullivan",
"in_u_n_owen",
"in_wu_jifeng",
"in_yanyan",
"in_yiling_gao",
"in_yumekawa_xd",
"in_zipzap_lucky",
"out_bogdan_janowski",
"out_captain_tamanegi",
"out_charles_zhang",
"out_christian_weiss",
"out_dmitry_lifshitz",
"out_jane_cooper",
"out_julia_shwartz",
"out_katrin_fischer",
"out_kpachoemope",
"out_nathan_kennedy",
"out_oliver_murphy",
"out_sample",
"out_sergey_temnov",
"out_sgttrs",
"out_simon_champion",
"out_smell_of_thunder",
"out_supersullivan",
"out_u_n_owen",
"out_wu_jifeng",
"out_yanyan",
"out_yiling_gao",
"out_yumekawa_xd",
"out_zipzap_lucky"]




var inCombat = false;
var inMenu = false;
var chapter = ch1;
var chapterCounter = 1;
var page = 0;



function paintLines() {

    let scaleFactor = document.documentElement.style.getPropertyValue('--scale_factor') * 10;
    //garbage code alert
    document.getElementById("row1").style.color = "#737373";
    document.getElementById("row2").style.color = "#737373";
    document.getElementById("row3").style.color = "#737373";
    document.getElementById("row4").style.color = "#737373";
    document.getElementById("row5").style.color = "#737373";
    document.getElementById("row6").style.color = "#737373";
    document.getElementById("row7").style.color = "#737373";
    document.getElementById("row8").style.color = "#737373";
    document.getElementById("row9").style.color = "#737373";
console.log(scaleFactor);

    switch(scaleFactor) {

        // holy shit this is so stupid
        case 10:
            document.getElementById("row1").style.color = white;
            break;

        case 15:
            document.getElementById("row2").style.color = white;
            break;

        case 20:
            document.getElementById("row3").style.color = white;
            break;

        case 25:
            document.getElementById("row4").style.color = white;
            break;

        case 30:
            document.getElementById("row5").style.color = white;
            break;

        case 35:
            document.getElementById("row6").style.color = white;
            break;

        case 40:
            document.getElementById("row7").style.color = white;
            break;

        case 45:
            document.getElementById("row8").style.color = white;
            break;

        case 50:
            document.getElementById("row9").style.color = white;
            break;

        default:
            console.log(scaleFactor);
        };
    };


var biosCount = 0;

function initialize(chStart) {
        document.getElementById("main_screen").replaceChildren();
        document.getElementById('main_screen').style.backgroundImage="url(screens/" + chStart + ".png)";

};





function renewWordCounter() {
    document.getElementById("word_counter").innerHTML = ("reading disk: disk 1 / partition " + chapterCounter + " / block " + page);
};

function next() {

    if (inBios == true) {
        if (biosCount == 3) { initialize("partition_1"); inBios = false}
        if (biosCount == 2) {document.getElementById("bios_bar").innerHTML = "[#####][#####][#####]"; biosCount++;}
        if (biosCount == 1) {document.getElementById("bios_bar").innerHTML = "[#####][#####][_____]"; biosCount++;}
        if (biosCount == 0) {document.getElementById("bios_bar").innerHTML = "[#####][_____][_____]"; biosCount++;}
    }

    else {

    if (inCombat == false) {

    //this is shit
    page++;

    var structure = chapter[(page*2)];  //structure = what's going on on the screen
    var contents = chapter[(page*2+1)]; //contents
    var prevStructure = chapter[(page*2-2)]; //contents



        if (structure == "screen") {
            document.getElementById("main_screen").replaceChildren();
            document.getElementById('main_screen').style.backgroundImage="url(screens/" + contents + ".png)";
        }

        if (structure == "notepad") {

            if (structure !== prevStructure) {
                document.getElementById("main_screen").replaceChildren();
                let element = document.createElement("div");
                element.id = 'notepad';
                document.getElementById('main_screen').appendChild(element);
                document.getElementById('main_screen').style.backgroundImage="url(screens/notepad.png)";
                document.getElementById("notepad").innerHTML = contents;
            };

            if (structure == prevStructure) {
             document.getElementById("notepad").innerHTML += contents;
            };
        };



        if (messageSources.includes(structure)) {

            //if also message
            if (structure == prevStructure) {
                document.getElementById("msg").innerHTML = contents;
            };

            //if also message structure
            if (messageSources.includes(prevStructure)) {
                document.getElementById("msg").innerHTML = contents;
                document.getElementById("msg").style.backgroundImage="url(msg/" + structure + ".png)";
            };

            //if not message structure
            if (structure !== prevStructure) {
                document.getElementById("main_screen").replaceChildren();
                let element = document.createElement("div");
                element.id = 'msg';
                document.getElementById('main_screen').appendChild(element);
                document.getElementById("msg").innerHTML = contents;
                document.getElementById("msg").style.backgroundImage="url(msg/" + structure + ".png)";
            };
        };

        if (structure == "captcha_or_welcome") {
            let element = document.createElement("div");
            element.id = 'captcha_or_welcome';
            document.getElementById('main_screen').appendChild(element);
            document.getElementById("captcha_or_welcome").innerHTML = contents;
            document.getElementById("main_screen").style.backgroundImage="url(screens/browser_captcha.png)";
        };
    };

        let wordCounter = document.createElement("div");
        wordCounter.id = 'word_counter';
        document.getElementById('main_screen').appendChild(wordCounter);
        renewWordCounter();

};

};


function rootScale(factor) {
    document.querySelector(':root').style.setProperty('--scale_factor', factor);
    if (inBios == true) {
        paintLines();
    };
};

// make enter & space work like mouse clicks
document.addEventListener("keypress", logKey);
function logKey(e) {



    if (`${e.code}` == "Enter" || `${e.code}` == "Space") {
        next();
    };


    //alexa what is switch case
    if (`${e.code}` == "Digit1") {rootScale(1);};
    if (`${e.code}` == "Digit2") {rootScale(1.5);};
    if (`${e.code}` == "Digit3") {rootScale(2);};
    if (`${e.code}` == "Digit4") {rootScale(2.5);};
    if (`${e.code}` == "Digit5") {rootScale(3);};
    if (`${e.code}` == "Digit6") {rootScale(3.5);};
    if (`${e.code}` == "Digit7") {rootScale(4);};
    if (`${e.code}` == "Digit8") {rootScale(4.5);};
    if (`${e.code}` == "Digit9") {rootScale(5);};


    if (`${e.code}` == "KeyZ") {
        document.querySelector('body').style.color = 'red';
        console.log("HOLY SHIT");
    };
};




rootScale(2.5);
document.getElementById("row4").style.color = white;
var inMenu = true;
var inBios = true;



