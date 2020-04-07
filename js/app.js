import "../scss/main.scss";

const $newGameBtn = $('#new-game-btn');
const $optionsBtn = $('#options-btn');
const $exitBtn = $('#exit-btn');

const $containerGame = $('.container');
const $cardList =$('.card-list')


const dogsTable = [
    "/dogs/01.jpg",
    "/dogs/02.jpg",
    "/dogs/03.jpg",
    "/dogs/04.jpg",
    "/dogs/05.jpg",
    "/dogs/06.jpg",
    "/dogs/07.jpg",
    "/dogs/08.jpg",
]

$newGameBtn.click(()=>{
    $cardList.empty();
    console.log("działa klik")
    $('.main-menu').css("display","none");
    $('.game').css("display","block");
    let paryliczb = tableRandomNumbers();
    paryliczb.map((e,i)=>{
        const $card = $(`
        <li>
            <div class="flip-container">
                        <div class="flipper">
                            <div class="front">
                                <img src="/dogs/reversecard.jpg" alt="reverse" class="img">
                            </div>
                            <div class="back">
                                <img src="${dogsTable[e-1]}" alt="${e}" class="img">
                            </div>
                        </div>
                    </div>
        </li>`)

        $cardList.append($card)

    })
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

    return pairsOfNumbers
}

//drugi argument dla .on
let card1 = 0;
let card2 = 0;

$('.game').on('click', '.flip-container', function(){

    this.classList.toggle('hover');
    $(this).find('.back').find('img').addClass('uncovered');
    console.log($(this).find('.back').find('img').attr('alt'));
    let atrybut = $(this).find('.back').find('img').attr('alt');
    // let numItems = $('.hover').length;
    if (numItems === 1){
        card1 = atrybut;
    }
    if (numItems === 2 ){
        card2 = atrybut;
        card1 === card2 ? alert('brawo') : null
    }
    if (numItems > 2){
        $('.flip-container').removeClass('hover');
        $('.flip-container').find('.back').find('img').removeClass('uncovered');


    }

    console.log('card1',card1);
    console.log('card2',card2);
});

console.log('card1',card1);
console.log('card2',card2);

// console.log(paryliczb)
// for (let i = 0; i < 3; i++) {
//     const $row = $(`
//     <div class="row">
//
//     </div>
// `)
//     $containerGame.append($row);
//     for (let j = 0; j < 4; j++) {
//         const min = 1;
//         const max = 6;
//         let random = Math.floor(Math.random() * (max - min + 1) + min);
//
//
//         const $col = $(`
//         <div class="col">
//             <div class="flip-container" onclick="this.classList.toggle('hover');">
//                 <div class="flipper">
//                     <div class="front">
//                         <img src="/dogs/reversecard.jpg" alt="reverse" class="img">
//                     </div>
//                     <div class="back">
//                         <img src="${dogsTable[random]}" alt="${random}" class="img">
//                     </div>
//                 </div>
//             </div>
//         </div>
//
//
// `)
//         $row.append($col)
//
//     }
//     console.log("tworzy wiersze")
// }




















