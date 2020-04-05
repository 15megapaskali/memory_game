
import "../scss/main.scss";



const $newGameBtn = $('#new-game-btn');
const $optionsBtn = $('#options-btn');
const $exitBtn = $('#exit-btn');

$newGameBtn.click(()=>{
    console.log("działa klik")
    $('.main-menu').css("display","none")
    $('.game').css("display","block")
})

$(".back-btn").click(()=>{
    $('.game').css("display","none")
    $('.main-menu').css("display","block")
})