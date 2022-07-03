const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const a = 123

var bodyWidthCurrent = $('body').clientWidth
// console.log(bodyWidthCurrent)
$('body').onresize = function (){
    if (bodyWidthCurrent != $('body').clientWidth){
        location.reload()
    }
}
var searchElement = $('.li-content')
var boxSearch = $('.box-search')
var curStatusClose = false
var widthWd = window.innerWidth
// seachInput.onclick = function(e){
//     e.stopPropagation()
// }
if (widthWd <= 740) {
    boxSearch.innerHTML = `<input type="text" class="search-wrap" placeholder="Muốn tìm cái giề?">
    <button class="search-btn find"></button>
    <div onclick="popUp('Chưa code cái này! Chưa xài được :v')" class="sub-search-btn"></div>
    <i onclick="popUp('Chưa code cái này! Chưa xài được :v')" class="fa-solid fa-magnifying-glass ic-search"></i>
    <button class="search-btn-close close"></button>
    <div  class="sub-search-btn-close cls"></div>
    <i class="fa-solid fa-xmark ic-close cls"></i>`
    var closeSearchs = $$('.cls')
    var seachInput = $('#header .search-wrap')
    var widInput = 0.8 * widthWd
    seachInput.style.width = `${widInput}px`;
    seachInput.onclick = function(e){
        e.stopPropagation()
    }
    
    if (closeSearchs){
        for (var index of closeSearchs){
            index.onclick = function(){
                boxSearch.style.animation = 'toDrop 0.5s ease-in'
                searchElement.innerHTML = '<i class="fa-solid fa-magnifying-glass icon-header"></i>Tìm kiếm'
                setTimeout(function(){
                    boxSearch.classList.toggle('block-display')
                },500)
                curStatusClose = false
            }
        }
    }
    var menuBtn = $('.menu-mobile')
    var navElm = $('#header .navigation')
    var liElms = $$('#header .navigation li')
    // console.log(liElms)
    for (var index of liElms){
        index.onclick = function(){
            navElm.classList.toggle('block-display')
        }
    }

    menuBtn.onclick = function(){
        navElm.classList.toggle('block-display')
    }
} else {
    boxSearch.innerHTML = `<input type="text" class="search-wrap" placeholder="Muốn tìm cái giề?">
    <button class="search-btn find"></button>
    <div onclick="popUp('Chưa code cái này! Chưa xài được :v')" class="sub-search-btn"></div>
    <i onclick="popUp('Chưa code cái này! Chưa xài được :v')" class="fa-solid fa-magnifying-glass ic-search"></i>`
}
searchElement.onclick = function () {
    if (!curStatusClose) {
        boxSearch.classList.toggle('block-display')
        boxSearch.style.animation = 'rightTo 0.5s ease-out'
        this.innerHTML = '<i class="fa-solid fa-xmark icon-header"></i>Đóng lại'
        curStatusClose = true
    } else {
        boxSearch.style.animation = 'toDrop 0.5s ease-in'
        this.innerHTML = '<i class="fa-solid fa-magnifying-glass icon-header"></i>Tìm kiếm'
        setTimeout(function(){
            boxSearch.classList.toggle('block-display')
        },500)
        curStatusClose = false
    }
}

const sections = $$('.box-section')
const boxTeamElms = $$('.box-info')
const wrapperTeam = $('#team')

window.onscroll = function(){
    const html = document.documentElement
    var curStatus = false
    if (html.scrollTop >=2800 && html.scrollTop<=3900 && !curStatus){
        boxTeamElms[2].style.animation = 'rightTo 1s ease'
        boxTeamElms[0].style.animation = 'leftTo 1s ease'
        curStatus = true
        // console.log(boxTeamElms[2])
    } else {
        boxTeamElms[2].style.animation = 'none'
        boxTeamElms[0].style.animation = 'none'
        curStatus = false
    }
}

const popUpContainer = $('.pop-up-container')
const popUpContents = $('.pop-up-contents')
const closeBtn = $('.close-btn')
const popUpBox = $('.pop-up-box')
function popUp (message){
    var widPopUp = 0.9 * bodyWidthCurrent
    if (widPopUp>=700){
        widPopUp = 700
    }
    popUpBox.style.width = `${widPopUp}px`
    popUpContents.innerHTML = `<i class="fa-solid fa-bullhorn"></i> : ${message}`
    popUpContainer.classList.toggle('flex-display')
    popUpBox.style.animation = 'scalePos 0.5s ease'
}
closeBtn.onclick = function(){
    popUpContainer.classList.toggle('flex-display')
}

