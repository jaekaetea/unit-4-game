var char = {
    one : {
        name: "Obi-Wan Kenobi",
        pic: "assets/images/cat_01.jpg",
        healthPoints: 120,
        attackPower: 15,
        counterAttack: 10
    },
    two : {
        name: "Luke",
        pic: "assets/images/cat_02.jpg",
        healthPoints: 100,
        attackPower: 30,
        counterAttack: 5
    },
    three: {
        name: "Darth Sidious",
        pic: "assets/images/cat_03.jpg",
        healthPoints: 150,
        attackPower: 9,
        counterAttack: 20
    },
    four: {
        name: "Darth Maul",
        pic: "assets/images/cat_04.jpg",
        healthPoints: 180,
        attackPower: 5,
        counterAttack: 25
    }
}

var zero = 0;
var cName = "";
var cHealth = 0;
var cPowerInitial;
var cPower = 0;
var dName = "";
var exp = 0;

var dCounter = 0;
var dHealth = 0;
var enemies = 0;
var gameOver = false; 
var defenderChoosen = false; 
var mySound = new Audio();

function setUp() {
    zero = 0;
    cName = "";
    cHealth = 0;
    cPowerInitial;
    cPower = 0;
    dName = "";
    exp = 0;

    dCounter = 0;
    dHealth = 0;
    enemies = 0;
    gameOver = false; 
    defenderChoosen = false; 

    $("#prompts").html("");
    $("#char1").show();
    $("#char2").show();
    $("#char3").show();
    $("#char4").show();
    $("#char").css('visibility','hidden');
    $("#def1").css('display','none');
    $("#def2").css('display','none');
    $("#def3").css('display','none');
    $("#defender").css('visibility','hidden');
    $("#Restart").css('visibility','hidden');

    $("#charPic1").attr("src", char.one.pic);
    document.getElementById("charName1").textContent = char.one.name;
    document.getElementById("charHealthPoints1").textContent = char.one.healthPoints;

    $("#charPic2").attr("src", char.two.pic);
    document.getElementById("charName2").textContent = char.two.name;
    document.getElementById("charHealthPoints2").textContent = char.two.healthPoints;

    $("#charPic3").attr("src", char.three.pic);
    document.getElementById("charName3").textContent = char.three.name;
    document.getElementById("charHealthPoints3").textContent = char.three.healthPoints;

    $("#charPic4").attr("src", char.four.pic);
    document.getElementById("charName4").textContent = char.four.name;
    document.getElementById("charHealthPoints4").textContent = char.four.healthPoints;
}

document.getElementById("charPic1").onclick = function() {
    charChoosen1();
    startMusic();
};

document.getElementById("charPic2").onclick = function() {
    charChoosen2();
    startMusic();
};

document.getElementById("charPic3").onclick = function() {
    charChoosen3();
    startMusic();
};

document.getElementById("charPic4").onclick = function() {
    charChoosen4();
    startMusic();
};

function startMusic() {
    mySound.src = "assets/music/playStart.aac";
    mySound.currentTime = 0;  
    mySound.play();
}

function charChoosen1 () {
    cName = char.one.name;
    cHealth = char.one.healthPoints;
    cPowerInitial = char.one.attackPower;
    cPower = char.one.attackPower;
    $("#charPic").attr("src", char.one.pic);
    $("#charName").text(char.one.name);
    $("#charHealthPoints").text(char.one.healthPoints);

    
    $("#defPic1").attr("src", char.two.pic);
    document.getElementById("defName1").textContent = char.two.name;
    document.getElementById("defHealthPoints1").textContent = char.two.healthPoints;
    document.getElementById("counter1").textContent = char.two.counterAttack;

    $("#defPic2").attr("src", char.three.pic);
    document.getElementById("defName2").textContent = char.three.name;
    document.getElementById("defHealthPoints2").textContent = char.three.healthPoints;
    document.getElementById("counter2").textContent = char.three.counterAttack;

    $("#defPic3").attr("src", char.four.pic);
    document.getElementById("defName3").textContent = char.four.name;
    document.getElementById("defHealthPoints3").textContent = char.four.healthPoints;
    document.getElementById("counter3").textContent = char.four.counterAttack;

    display();
}

function charChoosen2 () {
    cName = char.two.name;
    cHealth = char.two.healthPoints;
    cPowerInitial = char.two.attackPower;
    cPower = char.two.attackPower;
    $("#charPic").attr("src", char.two.pic);
    document.getElementById("charName").textContent = char.two.name;
    document.getElementById("charHealthPoints").textContent = char.two.healthPoints;


    $("#defPic1").attr("src", char.one.pic);
    document.getElementById("defName1").textContent = char.one.name;
    document.getElementById("defHealthPoints1").textContent = char.one.healthPoints;
    document.getElementById("counter1").textContent = char.one.counterAttack;

    $("#defPic2").attr("src", char.three.pic);
    document.getElementById("defName2").textContent = char.three.name;
    document.getElementById("defHealthPoints2").textContent = char.three.healthPoints;
    document.getElementById("counter2").textContent = char.three.counterAttack;

    $("#defPic3").attr("src", char.four.pic);
    document.getElementById("defName3").textContent = char.four.name;
    document.getElementById("defHealthPoints3").textContent = char.four.healthPoints;
    document.getElementById("counter3").textContent = char.four.counterAttack;

    display();
}

function charChoosen3 () {
    cName = char.three.name;
    cHealth = char.three.healthPoints;
    cPowerInitial = char.three.attackPower;
    cPower = char.three.attackPower;
    $("#charPic").attr("src", char.three.pic);
    document.getElementById("charName").textContent = char.three.name;
    document.getElementById("charHealthPoints").textContent = char.three.healthPoints;

    
    $("#defPic1").attr("src", char.one.pic);
    document.getElementById("defName1").textContent = char.one.name;
    document.getElementById("defHealthPoints1").textContent = char.one.healthPoints;
    document.getElementById("counter1").textContent = char.one.counterAttack;

    $("#defPic2").attr("src", char.two.pic);
    document.getElementById("defName2").textContent = char.two.name;
    document.getElementById("defHealthPoints2").textContent = char.two.healthPoints;
    document.getElementById("counter2").textContent = char.two.counterAttack;

    $("#defPic3").attr("src", char.four.pic);
    document.getElementById("defName3").textContent = char.four.name;
    document.getElementById("defHealthPoints3").textContent = char.four.healthPoints;
    document.getElementById("counter3").textContent = char.four.counterAttack;

    display();
}

function charChoosen4 () {
    cName = char.four.name;
    cHealth = char.four.healthPoints;
    cPowerInitial = char.four.attackPower;
    cPower = char.four.attackPower;
    $("#charPic").attr("src", char.four.pic);
    document.getElementById("charName").textContent = char.four.name;
    document.getElementById("charHealthPoints").textContent = char.four.healthPoints;
 
    $("#defPic1").attr("src", char.one.pic);
    document.getElementById("defName1").textContent = char.one.name;
    document.getElementById("defHealthPoints1").textContent = char.one.healthPoints;
    document.getElementById("counter1").textContent = char.one.counterAttack;

    $("#defPic2").attr("src", char.two.pic);
    document.getElementById("defName2").textContent = char.two.name;
    document.getElementById("defHealthPoints2").textContent = char.two.healthPoints;
    document.getElementById("counter2").textContent = char.two.counterAttack;

    $("#defPic3").attr("src", char.three.pic);
    document.getElementById("defName3").textContent = char.three.name;
    document.getElementById("defHealthPoints3").textContent = char.three.healthPoints;
    document.getElementById("counter3").textContent = char.three.counterAttack;

    display();
}

function display() {
    $("#char1").css('display','none');
    $("#char2").css('display','none');
    $("#char3").css('display','none');
    $("#char4").css('display','none');
    $("#char").css('visibility','initial');
    $("#def1").show();
    $("#def2").show();
    $("#def3").show();
}

document.getElementById("defPic1").onclick = function() {
    if ((!defenderChoosen) && (!gameOver)) {
        var x = document.getElementById("defPic1").src;
        pic = document.getElementById("defenderPic");
        pic.src = x;
        document.getElementById("defenderName").textContent = document.getElementById("defName1").textContent;
        document.getElementById("defenderHealthPoints").textContent = document.getElementById("defHealthPoints1").textContent;
        dName = document.getElementById("defenderName").textContent;
        dHealth = document.getElementById("defenderHealthPoints").textContent;
        dCounter = document.getElementById("counter1").textContent;
        $("#defender").css('visibility','initial');
        console.log(dCounter);
        $("#def1").css('display','none');

        defenderChoosen = true;
    }
};

document.getElementById("defPic2").onclick = function() {
    if ((!defenderChoosen) && (!gameOver)) {
        var x = document.getElementById("defPic2").src;
        pic = document.getElementById("defenderPic");
        pic.src = x;
        document.getElementById("defenderName").textContent = document.getElementById("defName2").textContent;
        document.getElementById("defenderHealthPoints").textContent = document.getElementById("defHealthPoints2").textContent;
        dName = document.getElementById("defenderName").textContent;
        dHealth = document.getElementById("defenderHealthPoints").textContent;
        dCounter = document.getElementById("counter2").textContent;
        $("#defender").css('visibility','initial');
        console.log(dCounter);
        $("#def2").css('display','none');

        defenderChoosen = true;
    }
};

document.getElementById("defPic3").onclick = function() {
    if ((!defenderChoosen) && (!gameOver)) {
        var x = document.getElementById("defPic3").src;
        pic = document.getElementById("defenderPic");
        pic.src = x;
        document.getElementById("defenderName").textContent = document.getElementById("defName3").textContent;
        document.getElementById("defenderHealthPoints").textContent = document.getElementById("defHealthPoints3").textContent;
        dName = document.getElementById("defenderName").textContent;
        dHealth = document.getElementById("defenderHealthPoints").textContent;
        dCounter = document.getElementById("counter3").textContent;
        $("#defender").css('visibility','initial');
        console.log(dCounter);
        $("#def3").css('display','none');

        defenderChoosen = true;
    }
};


document.getElementById("Attack").onclick = function() {
    if ((defenderChoosen) && (!gameOver)) {  
        mySound.src = "assets/music/lightsaber.aac";
        mySound.currentTime = 0;  
        mySound.play();
        
        cHealth = cHealth - dCounter;
        exp++;
        cPower = cPowerInitial * exp;
        dHealth = dHealth - cPower;
        console.log(cPower + " " + dHealth);
        $('#prompts').html("<span>" + " You attacked " + dName + " for " + cPower + " damage. "+ "</span>" + 
             "<br>" + "<span>" + dName + " attacked you back for " + dCounter + " damage. " + "</span>");
        document.getElementById("charHealthPoints").textContent = cHealth;
        document.getElementById("defenderHealthPoints").textContent = dHealth;
        
        next();
        loser();
    }
    else if ((!defenderChoosen) && (gameOver)) {
        $("#prompts").append("<p>" + " Please press Restart to play again! " + "</p>");
    }
    else if (!defenderChoosen) {
        $("#prompts").html("<p>" + " No enemy here. " + "</p>");
    }
};

function next() {
    if (dHealth <= 0)
    {   
        $("#prompts").html("");
        $("#prompts").html("<p>" + " You have defeated " + dName + ". You can choose to fight another enemy. " + "</p>");
        $("#defender").css('visibility','hidden');
        defenderChoosen = false; 
        enemies++;
        if (enemies === 3) {
            winner();
        }
    }
}

function loser() {
    if (cHealth <=0) {
        mySound.src = "assets/music/loser.aac";
        mySound.currentTime = 0;  
        mySound.play();

        //Because no one has negative health
        document.getElementById("charHealthPoints").textContent = zero;
        $("#prompts").html("<p>" + " You have been defeated.  GAME OVER!!! " + "</p>");
        defenderChoosen = false;
        gameOver = true;

        $("#Restart").css('visibility','initial');
    }
}

function winner() {
    mySound.src = "assets/music/win.aac";
    mySound.currentTime = 0;  
    mySound.play();

    $("#prompts").html("<p>" + " You Won!!!  GAME OVER!!! " + "</p>");
    defenderChoosen = false;
    gameOver = true;

    $("#Restart").css('visibility','initial');
}


document.getElementById("Restart").onclick = function() {
    setUp();
};

$( document ).ready(function() {
    setUp();
});

/*I really, REALLY tried to make my code more efficient,
but I could not figure out the .each function and how to 
incorporate it in my code :( */


