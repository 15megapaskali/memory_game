import "../scss/main.scss";

const smalltalk = require('smalltalk');

let today = new Date();
let date = today.getFullYear().toString().substr(-2) + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + ":" + today.getMinutes();
let dateTime = date + ' ' + time;

const $newGameBtn = $('#new-game-btn');
const $optionsBtn = $('#options-btn');
const $exitBtn = $('#exit-btn');
const $setCats = $('#set-cats')

const $containerGame = $('.container');
const $cardList = $('.card-list');

$(window).on('load',function() { document.getElementById('audioMenu').play() })

// setTimeout(function(){ document.getElementById('audioMenu').play() }, 1800);
let difflvl = "";

$exitBtn.click(() => {
    window.open('', '_self', ''); //bug fix
    window.close();
    open(location, '_self').close();
})

$optionsBtn.click(() => {
    $('.main-menu').css("display", "none");
    $('.options').css("display", "block");
    $('.back-btn').css("visibility","visible");
})

$setCats.click(() => {
    document.getElementById('audioMenu').pause();
    $('.container').empty();
    $('.options').css("display", "none");
    score = 0;
    count = 0;
    const $ul = $(`<ul class="card-list"></ul>`)
    $containerGame.append($ul);
    $cardList.empty();
    console.log("działa klik");
    scoreEl.innerText = 0;
    $(".theend").css("display", "none")
    $('.main-menu').css("display", "none");
    $('.game').css("display", "block");
    LosowanieIWklejanie(catTable,6)

})


const dogsTable = [
    "./images/01.jpg",
    "./images/02.jpg",
    "./images/03.jpg",
    "./images/04.jpg",
    "./images/05.jpg",
    "./images/06.jpg",
    "./images/07.jpg",
    "./images/08.jpg",
]

const catTable = [
    "./images/k01.jpg",
    "./images/k02.jpg",
    "./images/k03.jpg",
    "./images/k04.jpg",
    "./images/k05.jpg",
    "./images/k06.jpg",
    "./images/k07.jpg",
    "./images/k08.jpg",
    "./images/k09.jpg",
    "./images/k10.jpg",
]

function LosowanieIWklejanie(tableZdjec,ilosc) {
    let paryliczb = tableRandomNumbers(ilosc);
    paryliczb.map((e, i) => {
        const $card = $(`
        <li>
            <div class="flip-container">
                <div class="flipper">
                    <div class="front">
                        <img src="./images/tlo.jpg" alt="reverse" class="img">
                    </div>
                    <div class="back">
                        <div class="img">
                            <img src="${tableZdjec[e - 1]}" alt="${e}" id="${i}">
                        </div>
                    </div>
                </div>
            </div>
        </li>`)

        $('.card-list').append($card)

    })
}

function NewGame(level) {
    document.getElementById('audioMenu').pause();
    $('.container').empty();
    $('.options').css("display", "none");
    $('.game').css("display", "block");
    score = 0;
    count = 0;
    const $ul = $(`<ul class="card-list"></ul>`)
    $containerGame.append($ul);
    $cardList.empty();
    console.log("działa klik");
    scoreEl.innerText = 0;
    $(".theend").css("display", "none")
    $('.main-menu').css("display", "none");
    $('.game').css("display", "block");
    $('.back-btn').css("visibility","visible");
    LosowanieIWklejanie(dogsTable,level)
   
    if (level === 4){
        difflvl = "easy"
    }
    else if(level ===6){
        difflvl = "normal"
    }
    else if(level ===8){
        difflvl = "hard"
    }
}


$newGameBtn.click(() => {
  NewGame(6)

})


$(".back-btn").click(() => {
    $('.game').css("display", "none");
    $('.main-menu').css("display", "block");
    $('.options').css("display","none");
    $('.back-btn').css("visibility","hidden");
    $('.ranking').css("display", "none");
    $('.ranking').empty();
    document.getElementById('audioMenu').play()
    
})


function tableRandomNumbers(ilosc) {
    const min = 1;
    const max = ilosc;
    const arr1 = [];
    while (arr1.length < max) {
        let r = Math.floor(Math.random() * (max - min + 1) + min);
        if (arr1.indexOf(r) === -1) arr1.push(r);
    }
    const arr2 = [];
    while (arr2.length < max) {
        let r = Math.floor(Math.random() * (max - min + 1) + min);
        if (arr2.indexOf(r) === -1) arr2.push(r);
    }
    const pairsOfNumbers = arr1.concat(arr2);
    console.log(pairsOfNumbers);
    return pairsOfNumbers
}

const scoreEl = document.querySelector('.counter');

let score = 0;

function addScore(points) {
    score += points;
    scoreEl.innerText = score.toString().padStart(1, '0');


}

function removeScore(points) {
    score -= points;
    scoreEl.innerText = score.toString().padStart(1, '0');


}

//drugi argument dla .on
let card1 = 0;
let card2 = 0;
let count = 0;
let idCard1 = 0;
let idCard2 = 0;
$('.game').on('click', '.flip-container', function () {
    if (!$(this).hasClass("hover")) {
        document.getElementById('audioCheck').play();
        count += 1;
    }


    this.classList.toggle('hover');
    $(this).find('.back').find('img').addClass('uncovered');
    // console.log($(this).find('.back').find('img').attr('alt'));
    let atrybut = $(this).find('.back').find('img').attr('alt');
    let idImg = $(this).find('.back').find('img').attr('id');
    if (count === 1) {
        card1 = atrybut;
        idCard1 = idImg;
    }
    if (count === 2) {
        card2 = atrybut;
        idCard2 = idImg;
        this.classList.add('hover');
        // card1 === card2 ? addScore(5) : null;
        if (card1 === card2 && idCard1 !== idCard2) {
            addScore(10);
            document.getElementById('audioGood').play();
            count = 0;
            $('.uncovered').fadeOut("slow",()=>{});
            $('.uncovered').parent().parent().parent().remove();
        }
    }
    if (count > 2) {
        $('.flip-container').removeClass('hover');
        $('.flip-container').find('.back').find('img').removeClass('uncovered');
        count = 0;
        removeScore(5);

    }

    if ($('.flipper').length < 2) {
        $containerGame.empty();
        const $theEnd = $(`
                    <div class="theend">
                    <h1>The End</h1>
                    <h2>Your result: ${score} points</h2>
</div>
`);

        $containerGame.append($theEnd);
        $(".theend").css("display", "flex");
        // let playerName = prompt("Please enter your name", "Player");
        smalltalk.prompt('Congratulations! Game complete!', "Please enter your name", "Player")
            .then((value) => {
                // console.log(value);
                // playerName = value;
                Ranking(value,difflvl)

            })
            .catch(() => {
                console.log('cancel');
            });
        // localStorage.setItem('player', playerName);
        // localStorage.setItem('result', score);
        // Ranking(playerName)
    }
});


function Ranking(playerName,difflvl) {
    $('.ranking').css("display","block");
    $('.ranking').empty();
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    let dateTime = date + ' ' + time;
    let obj = {
        player:playerName,
        result:score,
        date:dateTime,
        lvl:difflvl
    };
    let localResults = localStorage.getItem("results");
    let results = [];
    if (localResults && localResults.length){
        results = JSON.parse(localResults)
    }
    results.push(obj);
    results.sort((a,b)=>{
        return (b.result - a.result)
    })

    localStorage.setItem('results',JSON.stringify(results));
    console.log(results)
    const $listResults = $(`
    <h2>Ranking: </h2>
        <table class="lista-ranking">
            

        </table>      
`)
    $('.ranking').append($listResults)
    results.map((e,i)=>{
        const $listElement = $(`
       
            <tr>
                <td>${i+1}. </td>
                <td><strong> ${e.player}</strong></td>
                <td>lvl: ${e.lvl} </td>
                <td>date: ${e.date} </td>
                <td>result: <strong>${e.result}</strong> </td>
            </tr>
       
`)
        $('.lista-ranking').append($listElement)
    })
    
}

function showRanking(){
    $containerGame.empty();
    $('.back-btn').css("visibility","visible");
    let localResults = localStorage.getItem("results");
    let results = [];
    if (localResults && localResults.length){
        results = JSON.parse(localResults)
    }
   
    results.sort((a,b)=>{
        return (b.result - a.result)
    })

    localStorage.setItem('results',JSON.stringify(results));
    console.log(results);
    
    const $listResults = $(`
    <h2>Ranking: </h2>
        <table class="lista-ranking">
            

        </table>      
`)
    $('.ranking').append($listResults)
    results.map((e,i)=>{
        const $listElement = $(`
       
            <tr>
                <td>${i+1}. </td>
                <td><strong> ${e.player}</strong></td>
                <td>lvl: ${e.lvl} </td>
                <td>date: ${e.date} </td>
                <td>result: <strong>${e.result}</strong> </td>
            </tr>
       
`)
        $('.lista-ranking').append($listElement)
    })


    $('.main-menu').css("display", "none");
    $('.ranking').css("display", "block");

}

const menuMusic = document.getElementById('audioMenu');

$('#easy').click(()=>{
    NewGame(4)
    console.log(difflvl)
})

$('#normal').click(()=>{
    NewGame(6)
    console.log(difflvl)
})

$('#hard').click(()=>{
    NewGame(8);
    
    console.log(difflvl)
})

$('#ranking').click(()=>{
    showRanking()
})

$(".mute").click(()=>{
    if (menuMusic.paused){
        menuMusic.play();
        
    }
    else {
        menuMusic.pause();
        
    }

    
})






