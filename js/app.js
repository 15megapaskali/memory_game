import "../scss/main.scss";

const $newGameBtn = $('#new-game-btn');
const $optionsBtn = $('#options-btn');
const $exitBtn = $('#exit-btn');

$newGameBtn.click(()=>{
    console.log("działa klik")
    $('.main-menu').css("display","none")

})