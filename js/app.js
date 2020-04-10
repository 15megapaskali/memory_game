import "../scss/main.scss";

const $newGameBtn = $('#new-game-btn');
const $optionsBtn = $('#options-btn');
const $exitBtn = $('#exit-btn');
const $setCats = $('#set-cats')

const $containerGame = $('.container');
const $cardList =$('.card-list')

$exitBtn.click(()=>{
    window.open('', '_self', ''); //bug fix
    window.close();
})

$optionsBtn.click(()=>{
    $('.main-menu').css("display","none");
    $('.options').css("display","block");
})

$setCats.click(()=>{
    $('.options').css("display","none");
    score = 0;
    count = 0;
    const $ul = $(`<ul class="card-list">

                    </ul>`)
    $containerGame.append($ul);
    $cardList.empty();
    console.log("działa klik");
    scoreEl.innerText = 0;

    $('.main-menu').css("display","none");
    $('.game').css("display","block");
    LosowanieIWklejanie(catTable)
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

function LosowanieIWklejanie(tableZdjec){
    let paryliczb = tableRandomNumbers();
    paryliczb.map((e,i)=>{
        const $card = $(`
        <li>
            <div class="flip-container">
                        <div class="flipper">
                            <div class="front">
                                <img src="./images/reversecard.jpg" alt="reverse" class="img">
                            </div>
                            <div class="back">
                                <img src="${tableZdjec[e-1]}" alt="${e}" class="img">
                            </div>
                        </div>
                    </div>
        </li>`)

        $cardList.append($card)

    })
}


$newGameBtn.click(()=>{
    score=0;
    count = 0;
    const $ul = $(`<ul class="card-list">

                    </ul>`)
    $containerGame.append($ul);
    $cardList.empty();
    console.log("działa klik");
    scoreEl.innerText = 0;
    $(".theend").css("display","none")
    $('.main-menu').css("display","none");
    $('.game').css("display","block");
    LosowanieIWklejanie(dogsTable);

})



$(".back-btn").click(()=>{
    $('.game').css("display","none");
    $('.main-menu').css("display","block")

})


function tableRandomNumbers() {
    const min = 1;
    const max = 6;
    const arr1 = [];
    while(arr1.length < 6){
        let r = Math.floor(Math.random() * (max - min + 1) + min);
        if(arr1.indexOf(r) === -1) arr1.push(r);
    }
    const arr2 = [];
    while(arr2.length < 6){
        let r = Math.floor(Math.random() * (max - min + 1) + min);
        if(arr2.indexOf(r) === -1) arr2.push(r);
    }
    const pairsOfNumbers = arr1.concat(arr2);
    console.log(pairsOfNumbers);
    return pairsOfNumbers
}

const scoreEl = document.querySelector('.counter');

let score = 0;
function addScore(points) {
    score += points;
    scoreEl.innerText = score.toString().padStart(1,'0');


}

function removeScore(points) {
    score -= points;
    scoreEl.innerText = score.toString().padStart(1,'0');


}




//drugi argument dla .on
let card1 = 0;
let card2 = 0;
let count = 0;
$('.game').on('click', '.flip-container', function(){
    if (!$(this).hasClass("hover")) {
        count += 1;
    }


    this.classList.toggle('hover');
    $(this).find('.back').find('img').addClass('uncovered');
    // console.log($(this).find('.back').find('img').attr('alt'));
    let atrybut = $(this).find('.back').find('img').attr('alt');

    if (count === 1){
        card1 = atrybut;
    }
    if (count === 2 ){
        card2 = atrybut;
        this.classList.add('hover');
        // card1 === card2 ? addScore(5) : null;
        if (card1 === card2){
            addScore(5);
            count = 0;
            $('.uncovered').fadeOut("slow");
            $('.uncovered').parent().parent().remove();
        }
    }
    if (count > 2){
        $('.flip-container').removeClass('hover');
        $('.flip-container').find('.back').find('img').removeClass('uncovered');
        count = 0;
        removeScore(5);

    }

    if ($('.flipper').length < 2){
        $containerGame.empty();
        const $theEnd = $(`
                    <div class="theend">
                    <h1>The End</h1>
                    <h2>Your result: ${score} points</h2>
</div>
`)

        $containerGame.append($theEnd)
        $(".theend").css("display","block")
    }


});













