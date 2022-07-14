                                                // With love - Quentinn

const cards = {Two:2,Three:3,Four:4,Five:5,Six:6,Seven:7,Eight:8,Nine:9,Ten:10,J:10,Q:10,K:10,A:[11,1]};
const cardsIDK = ["C1","C2","C3","C4","C5","C6"];
const cardsIDP = ["D1","D2","D3","D4","D5","D6"];
const cardsIDPAdditive = ["D1a","D1b","D1c","D1d"]
const typeCards = ["Cards_images/BG/2S.svg","Cards_images/BG/3S.svg","Cards_images/BG/4S.svg","Cards_images/BG/5S.svg","Cards_images/BG/6S.svg","Cards_images/BG/7S.svg","Cards_images/BG/8S.svg","Cards_images/BG/9S.svg","Cards_images/BG/10S.svg","Cards_images/BG/JS.svg","Cards_images/BG/QS.svg","Cards_images/BG/KS.svg","Cards_images/BG/AS.svg"];
const typeCards2 = ["Cards_images/BB/2C.svg","Cards_images/BB/3C.svg","Cards_images/BB/4C.svg","Cards_images/BB/5C.svg","Cards_images/BB/6C.svg","Cards_images/BB/7C.svg","Cards_images/BB/8C.svg","Cards_images/BB/9C.svg","Cards_images/BB/10C.svg","Cards_images/BB/JC.svg","Cards_images/BB/QC.svg","Cards_images/BB/KC.svg","Cards_images/BB/AC.svg"];
const typeCards3 = ["Cards_images/RG/2H.svg","Cards_images/RG/3H.svg","Cards_images/RG/4H.svg","Cards_images/RG/5H.svg","Cards_images/RG/6H.svg","Cards_images/RG/7H.svg","Cards_images/RG/8H.svg","Cards_images/RG/9H.svg","Cards_images/RG/10H.svg","Cards_images/RG/JH.svg","Cards_images/RG/QH.svg","Cards_images/RG/KH.svg","Cards_images/RG/AH.svg"];
const typeCards4 = ["Cards_images/RB/2D.svg","Cards_images/RB/3D.svg","Cards_images/RB/4D.svg","Cards_images/RB/5D.svg","Cards_images/RB/6D.svg","Cards_images/RB/7D.svg","Cards_images/RB/8D.svg","Cards_images/RB/9D.svg","Cards_images/RB/10D.svg","Cards_images/RB/JD.svg","Cards_images/RB/QD.svg","Cards_images/RB/KD.svg","Cards_images/RB/AD.svg"];



let twoCards = [];

//console.log(Object.keys(cards)[x]+" And its value is "+Object.values(cards)[x]);
let message = "Welcome to the Blackjack game !";
let output = "";

let counter = 0;
let bulseye = 0;
var hit = document.getElementById("Hit");
var stand = document.getElementById("Stand");
var reset = document.getElementById("Reset");
var dd = document.getElementById("dd");
var split = document.getElementById("split");
var start = document.getElementById("Start")

var output1 = document.getElementById("ba").value;
var output2 = document.getElementById("ca").value;

let cardsIDKCounter = 0;
let cardsIDPCounter = 0;

function nextCard(){
    let x = Math.floor(Math.random()*Object.keys(cards).length);
    return x;
}

function nextType(){
    let x = Math.floor(Math.random()*4)+1;
    return x;
}


function reset_animation(x) {
    var el = document.getElementById(x);
    el.style.animation = 'none';
    el.offsetHeight; 
    el.style.animation = null; 
  }

start.onclick = function(){
    for(let i =0;i<2;i++){
        let x = nextCard();
        let y = nextType();
        document.getElementById(cardsIDP[cardsIDPCounter]).width = "100";
        document.getElementById(cardsIDP[cardsIDPCounter]).height = "150";
        switch(y){
            case 1:
                document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards[x];
                break;
            case 2:
                document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards2[x];
                break;
            case 3:
                document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards3[x];
                break;
            case 4:
                document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards4[x];
                break;
        }
        document.getElementById(cardsIDP[cardsIDPCounter]).style.marginLeft = "-15px";
        document.getElementById(cardsIDP[cardsIDPCounter]).style.animation = "fade 0.3s"
        cardsIDPCounter += 1;
        bulseye += 1;
        if(Object.keys(cards)[x] == 'A' && counter+11 <= 21){
            counter += Object.values(cards)[x][0];
            twoCards.push(Object.values(cards)[x][0]);
            //console.log("You picked card: "+Object.keys(cards)[x]+" And its value is "+Object.values(cards)[x]);
        } 
        
        else if(Object.keys(cards)[x] == 'A' && counter+11 > 21){
            counter += Object.values(cards)[x][1];
            twoCards.push(Object.values(cards)[x][1]);
            //console.log("You picked card: "+Object.keys(cards)[x]+" And its value is "+Object.values(cards)[x]);
        } 
        else{
            counter += Object.values(cards)[x];
            twoCards.push(Object.values(cards)[x]);
            //console.log("You picked card: "+Object.keys(cards)[x]+" And its value is "+Object.values(cards)[x]);
        }
        reset_animation(cardsIDP[cardsIDPCounter]);
    }
    document.getElementById("ba").innerHTML = counter;
    if(bulseye == 2 && counter == 21){
        document.getElementById("ba").innerHTML = counter;
        document.getElementById("winner").innerHTML = "Blackjack, You won !";
        hit.disabled = true;
        stand.disabled = true;
        start.disabled = true;
        reset.disabled = false;
        dd.disabled = true;
        split.disabled = true;
    }
    else{
        hit.disabled = false;
        stand.disabled = false;
        reset.disabled = true;
        dd.disabled = false;
        split.disabled = false;
        start.disabled = true;
    }
    let x = nextCard();
    let y = nextType();
    document.getElementById(cardsIDK[cardsIDKCounter]).width = "100";
    document.getElementById(cardsIDK[cardsIDKCounter]).height = "150";
    switch(y){
        case 1:
            document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards[x];
            break;
        case 2:
            document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards2[x];
            break;
        case 3:
            document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards3[x];
            break;
        case 4:
            document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards4[x];
            break;
    }
    document.getElementById(cardsIDK[cardsIDKCounter]).style.animation = "fade 0.2s"
    document.getElementById("C2").width = "100"
    document.getElementById("C2").height = "150"
    document.getElementById("C2").src = "Cards_images/Card_back_10.svg"
    document.getElementById("C2").style.animation = "fade 0.2s"
    cardsIDKCounter += 1;
    if(x == 12)
        dealer += Object.values(cards)[x][0];
    else
        dealer += Object.values(cards)[x];
    document.getElementById("ca").innerHTML = dealer;
    reset_animation(cardsIDK[cardsIDKCounter]);
}

let counter2 = 0;
hit.onclick = function(){
    if(check == 1){
        hit2();
        return;
    }
    split.disabled = true;
    let x = nextCard();
    let y = nextType();
    document.getElementById(cardsIDP[cardsIDPCounter]).width = "100";
    document.getElementById(cardsIDP[cardsIDPCounter]).height = "150";
    switch(y){
        case 1:
            document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards[x];
            break;
        case 2:
            document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards2[x];
            break;
        case 3:
            document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards3[x];
            break;
        case 4:
            document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards4[x];
            break;
    }
    document.getElementById(cardsIDP[cardsIDPCounter]).style.animation = "fade 0.2s"
    cardsIDPCounter += 1;
    bulseye += 1;
    if(Object.keys(cards)[x] == 'A' && counter+11 <= 21){
        counter += Object.values(cards)[x][0];
        //console.log("You picked card: "+Object.keys(cards)[x]+" And its value is "+Object.values(cards)[x]);
    } 
    else if(Object.keys(cards)[x] == 'A' && counter+11 > 21){
        counter += Object.values(cards)[x][1];
        //console.log("You picked card: "+Object.keys(cards)[x]+" And its value is "+Object.values(cards)[x]);
    } 
    else{
        counter += Object.values(cards)[x];
        //console.log("You picked card: "+Object.keys(cards)[x]+" And its value is "+Object.values(cards)[x]);
    }
    if(bulseye == 2 && counter == 21){
        document.getElementById("ba").innerHTML = counter;
        document.getElementById("winner").innerHTML = "Blackjack, You won !"
        r();
    }
    if(counter > 21 && markSplit == false){
        document.getElementById("winner").innerHTML = "You bust !";
        hit.disabled = true;
        stand.disabled = true;
        reset.disabled = false;
        dd.disabled = true;
    }
    else if(counter > 21 && markSplit == true){
        markSplit = false;
        document.getElementById("winner").innerHTML = "You bust your (first) hand!";
        check = 1;

    }  
    document.getElementById("ba").innerHTML = counter;
    output1 = document.getElementById("ba").value
    reset_animation(cardsIDP[cardsIDPCounter]);
};

let check = 0;
let dealer = 0;
let repetition = 1;

stand.onclick = function st(win){
    split.disabled = true;
    if(markSplit == true){
        markSplit = false;
        twoCards = [];
        check = 1;
        return;
    }
    hit.disabled = true;
    stand.disabled = true;
    while(dealer < 17){
        let x = nextCard();
        let y = nextType();
        document.getElementById(cardsIDK[cardsIDKCounter]).width = "100";
        document.getElementById(cardsIDK[cardsIDKCounter]).height = "150";
        switch(y){
            case 1:
                document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards[x];
                break;
            case 2:
                document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards2[x];
                break;
            case 3:
                document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards3[x];
                break;
            case 4:
                document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards4[x];
                break;
        }
        document.getElementById(cardsIDK[cardsIDKCounter]).style.animation = "fade 0.2s"
        cardsIDKCounter += 1;
        if(Object.keys(cards)[x] == 'A' && dealer+11 <= 21)
            dealer += Object.values(cards)[x][0];
        else if(Object.keys(cards)[x] == 'A' && dealer+11 > 21)
            dealer += Object.values(cards)[x][1];
        else
            dealer += Object.values(cards)[x];
    }
    output2 = document.getElementById("ca");
    document.getElementById("ca").innerHTML = dealer;
    if((counter > dealer || dealer > 21)  && counter < 22){
        document.getElementById("winner").innerHTML = "You win !";
        if(intAnswer == 1 && counter < 22){
            document.getElementById("winner").innerHTML = "You win your second hand !";

        }
        if(win == 1)
            document.getElementById("winner").innerHTML = "You win 2x of your bet!";
    }
    else if(counter == dealer  && counter < 22){
        document.getElementById("winner").innerHTML = "Push !";
        if(intAnswer == 1){
            document.getElementById("winner").innerHTML = "Push at second hand !";
        }
    }
    else{
        if(counter < 22)
            document.getElementById("winner").innerHTML = "You lost !";
        split.disabled = true;
        if(intAnswer == 1 && counter < 22){
            document.getElementById("winner").innerHTML = "You lost your second hand!";
        }
        if(win == 1)
        document.getElementById("winner").innerHTML = "Your loss is 2x of your bet!";
    }
    if(markSplit2 == true){
        sts2();
    }
    reset.disabled = false;
    dd.disabled = true;
    win =0;
    reset_animation(cardsIDP[cardsIDPCounter]);
};

reset.onclick = function r(){
    intAnswer = 0;
    twoCards = [];
    document.getElementById("ba").innerHTML = 0;
    document.getElementById("ca").innerHTML = 0;
    document.getElementById("ba2").innerHTML = "X";
    document.getElementById("winner").innerHTML = "";
    document.getElementById("winner2").innerHTML = "";

    for(let xxx =0;xxx<cardsIDP.length;xxx++){
        document.getElementById(cardsIDP[xxx]).src = "";
        document.getElementById(cardsIDP[xxx]).width = "";
        document.getElementById(cardsIDP[xxx]).height = "";
        document.getElementById(cardsIDK[xxx]).src = "";
        document.getElementById(cardsIDK[xxx]).width = "";
        document.getElementById(cardsIDK[xxx]).height = "";
    }

    for(let xxx =0;xxx<cardsIDPAdditive.length;xxx++){
        document.getElementById(cardsIDPAdditive[xxx]).src = "";
        document.getElementById(cardsIDPAdditive[xxx]).width = "";
        document.getElementById(cardsIDPAdditive[xxx]).height = "";
    }
    document.getElementById("D2").style.margin = "auto 0px auto auto"; 
    reset_animation(cardsIDP[cardsIDPCounter]);
    counter = 0;
    counter2 =0;
    dealer = 0;
    bulseye = 0;
    win = 0;
    markSplit = false;
    markSplit2 = false;
    check = 0;
    hit.disabled = true;
    stand.disabled = true;
    start.disabled = false;
    reset.disabled = true;
    cardsIDKCounter = 0;
    cardsIDPCounter = 0;
    additiveCardCounter = 0;
}

let win = 0;
dd.onclick = function(){
    dd.disabled = true;
    let win = 1;
    let x = nextCard();
    let y = nextType();
        document.getElementById(cardsIDP[cardsIDPCounter]).width = "100";
        document.getElementById(cardsIDP[cardsIDPCounter]).height = "150";
        switch(y){
            case 1:
                document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards[x];
                break;
            case 2:
                document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards2[x];
                break;
            case 3:
                document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards3[x];
                break;
            case 4:
                document.getElementById(cardsIDP[cardsIDPCounter]).src = typeCards4[x];
                break;
        }
    document.getElementById(cardsIDP[cardsIDPCounter]).style.animation = "fade 0.2s"
    cardsIDPCounter += 1;
    if(Object.keys(cards)[x] == 'A' && counter+11 <= 21)
            counter += Object.values(cards)[x][0];
        else if(Object.keys(cards)[x] == 'A' && counter+11 > 21)
            counter += Object.values(cards)[x][1];
        else
            counter += Object.values(cards)[x];
    document.getElementById("ba").innerHTML = counter;
    if(counter > 21){
        document.getElementById("winner").innerHTML = "You bust your 2x bet !"
        dd.disabled = true;
        split.disabled = true;
        hit.disabled = true;
        stand.disabled = true;
        reset.disabled = false;
        }
    else
        sts(win);
    reset_animation(cardsIDP[cardsIDPCounter]);
}

function sts(win){
    hit.disabled = true;
    stand.disabled = true;
    while(dealer < 17){
        let x = nextCard();
        let y = nextType();
        document.getElementById(cardsIDK[cardsIDKCounter]).width = "100";
        document.getElementById(cardsIDK[cardsIDKCounter]).height = "150";
        switch(y){
            case 1:
                document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards[x];
                break;
            case 2:
                document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards2[x];
                break;
            case 3:
                document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards3[x];
                break;
            case 4:
                document.getElementById(cardsIDK[cardsIDKCounter]).src = typeCards4[x];
                break;
        }
        document.getElementById(cardsIDP[cardsIDKCounter]).style.animation = "fade 0.2s"
        cardsIDKCounter += 1;
        reset_animation(cardsIDP[cardsIDPCounter]);
        if(Object.keys(cards)[x] == 'A' && dealer+11 <= 21)
            dealer += Object.values(cards)[x][0];
        else if(Object.keys(cards)[x] == 'A' && dealer+11 > 21)
            dealer += Object.values(cards)[x][1];
        else
            dealer += Object.values(cards)[x];
    }
    output2 = document.getElementById("ca");
    document.getElementById("ca").innerHTML = dealer;
    if(counter > dealer || dealer > 21 && counter < 22){
        document.getElementById("winner").innerHTML = "You win your second hand !";
        if(win == 1){
            document.getElementById("winner").innerHTML = "You win 2x of your bet!";
            dd.disabled = true;
            split.disabled = true;
        }
    }
    else if(counter == dealer && counter < 22)
        document.getElementById("winner").innerHTML = "Push at first hand !";
    else{
        document.getElementById("winner").innerHTML = "You lost your second hand!";
        if(win == 1){
        document.getElementById("winner").innerHTML = "Your loss is 2x of your bet!";
        dd.disabled = true;
        split.disabled = true;
        }
    }
    reset.disabled = false;
    win =0;
};
let markSplit = false;
let markSplit2 = false;
let intAnswer = 0;

split.onclick = function(){
    document.getElementById("D2").style.margin = "0px 0px 0px 300px"; 
    intAnswer = 1;
    markSplit = true;
    markSplit2 = true;
    twoCards.push(1);
    split.disabled = true;
    dd.disabled = true;
    document.getElementById("ba").innerHTML = twoCards[1];
    document.getElementById("ba2").innerHTML = twoCards[0];
    counter = twoCards[1];
    counter2 = twoCards[0]; 
    
};

let additiveCardCounter = 0;
function hit2(){
    split.disabled = true;
    let x = nextCard();
    let y = nextType();
    document.getElementById(cardsIDPAdditive[additiveCardCounter]).width = "100";
    document.getElementById(cardsIDPAdditive[additiveCardCounter]).height = "150";
    switch(y){
        case 1:
            document.getElementById(cardsIDPAdditive[additiveCardCounter]).src = typeCards[x];
            break;
        case 2:
            document.getElementById(cardsIDPAdditive[additiveCardCounter]).src = typeCards2[x];
            break;
        case 3:
            document.getElementById(cardsIDPAdditive[additiveCardCounter]).src = typeCards3[x];
            break;
        case 4:
            document.getElementById(cardsIDPAdditive[additiveCardCounter]).src = typeCards4[x];
            break;
    }
    document.getElementById(cardsIDPAdditive[additiveCardCounter]).style.animation = "fade 0.2s"
    additiveCardCounter += 1;
    bulseye += 1;
    reset_animation(cardsIDPAdditive[additiveCardCounter]);
    if(Object.keys(cards)[x] == 'A' && counter2+11 <= 21){
        counter2 += Object.values(cards)[x][0];
        //console.log("You picked card: "+Object.keys(cards)[x]+" And its value is "+Object.values(cards)[x]);
    } 
    else if(Object.keys(cards)[x] == 'A' && counter2+11 > 21){
        counter2 += Object.values(cards)[x][1];
        //console.log("You picked card: "+Object.keys(cards)[x]+" And its value is "+Object.values(cards)[x]);
    } 
    else{
        counter2 += Object.values(cards)[x];
        //console.log("You picked card: "+Object.keys(cards)[x]+" And its value is "+Object.values(cards)[x]);
    }
    if(bulseye == 2 && counter2 == 21){
        document.getElementById("ba2").innerHTML = counter2;
        document.getElementById("winner2").innerHTML = "Blackjack on the second hand, You won !"
        r();
    }
    if(counter2 > 21){
        document.getElementById("winner2").innerHTML = "You bust your second hand !";
        hit.disabled = true;
        stand.disabled = true;
        reset.disabled = false;
        dd.disabled = true;
        document.getElementById("ba2").innerHTML = counter2;
        sts();
    }
    else
        document.getElementById("ba2").innerHTML = counter2;
    output1 = document.getElementById("ba2").value
};

function sts2(){
    hit.disabled = true;
    stand.disabled = true;
    let x = nextCard();
    while(dealer < 17){
        x = nextCard();
        if(Object.keys(cards)[x] == 'A' && dealer+11 <= 21)
            dealer += Object.values(cards)[x][0];
        else if(Object.keys(cards)[x] == 'A' && dealer+11 > 21)
            dealer += Object.values(cards)[x][1];
        else
            dealer += Object.values(cards)[x];
    }
    output2 = document.getElementById("ca");
    document.getElementById("ca").innerHTML = dealer;
    if(counter2 > dealer || dealer > 21){
        document.getElementById("winner2").innerHTML = "You win your first hand !";
    }
    else if(counter2 == dealer)
        document.getElementById("winner2").innerHTML = "Push on the first hand !";
    else{
        document.getElementById("winner2").innerHTML = "You lost your first hand !";
    }
    reset.disabled = false;
};