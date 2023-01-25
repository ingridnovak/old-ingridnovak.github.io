'use strict';
let first = 0;


[...document.querySelectorAll('.image-content')].forEach(item => {
    item.style.display = 'none';
    if(first === 0) {
        item.style.display = 'flex';
        first++;
    }
});
[...document.querySelectorAll('.tabs-title')].forEach(btn => {


    btn.addEventListener('click', (event) => {
        [...document.querySelectorAll('.image-content')].forEach(item => {
            item.style.display = 'none';
            [...document.querySelectorAll('.tabs-title')].forEach(button => {
                button.classList.remove('active');
            });
            [...document.querySelectorAll('.pseudo')].forEach(pseudo => {
                pseudo.classList.remove('active');
            });
            btn.classList.toggle('active');
            let pseudoEL = document.getElementById('pseudo-' + btn.id);
            pseudoEL.classList.toggle('active');
            let content = document.getElementById('content-' + btn.id);
            content.style.display = 'flex';
        })
    })
});
let imgWorks = document.getElementById('image-works');
const imgs = ['imgP/picNull.jpg','imgP/picOne.jpg','imgP/picTwo.jpg','imgP/picThree.jpg','imgP/picFour.jpg','imgP/picFifth.jpg','imgP/picSix.jpg','imgP/picSeven.jpg','imgP/picEight.jpg',
    'imgP/picNinth.jpg','imgP/picTen.jpg','imgP/picEleven.jpg'];
const dataset = ["web-design","graphic-design","graphic-design","web-design","graphic-design","landing-pages","wordpress","wordpress",
    "web-design","graphic-design","wordpress","landing-pages"];
const loads = ['imgP/load1.jpg','imgP/load2.jpg','imgP/load3.jpg','imgP/load4.jpg','imgP/load5.jpg','imgP/load6.jpg','imgP/load7.jpg',
    'imgP/load8.jpg','imgP/load9.jpg','imgP/load10.jpg','imgP/load11.jpg','imgP/load12.jpg']
const loadsMore = ['imgP/wordpress1.jpg','imgP/wordpress2.jpg',
    'imgP/wordpress3.jpg','imgP/wordpress4.jpg','imgP/wordpress5.jpg','imgP/wordpress6.jpg','imgP/wordpress7.jpg','imgP/wordpress8.jpg',
    'imgP/wordpress9.jpg','imgP/wordpress10.jpg','imgP/wordpress11.jpg','imgP/wordpress12.jpg'];
const datasetLoad = ["graphic-design","web-design","landing-pages","graphic-design","landing-pages","web-design","landing-pages","graphic-design","web-design",
    "wordpress","graphic-design","wordpress"];
for(let i =0; i < 12; i++) {
    //---------------------------------------------------
    let div = document.createElement('div');
    div.classList.add('blocks', 'image', 'hide');
    div.dataset.item = dataset[i];
    let flipDiv = document.createElement('div');
    flipDiv.classList.add("flip-block");
    let blockOne = document.createElement('div');
    blockOne.classList.add("block_one");
    const img = document.createElement('img');
    img.src = imgs[i];
    blockOne.append(img);
    let textBlock = document.createElement('div');
    let icons = document.createElement('div');
    textBlock.classList.add("text_block");
    icons.classList.add("icons_block");
    textBlock.prepend(icons);
    let pOne = document.createElement('p');
    pOne.innerHTML = 'creative design';
    pOne.classList.add('title_block_one');
    let pTwo = document.createElement('p');
    pTwo.innerHTML = 'Web Design';
    pTwo.classList.add("text_block_one");
    textBlock.append(pOne);
    textBlock.append(pTwo);
    flipDiv.prepend(blockOne);
    flipDiv.append(textBlock);
    div.appendChild(flipDiv);
    imgWorks.append(div);
    //-----------------------------------------LOAD MORE --------------------------
    let divLoads = document.createElement('div');
    divLoads.classList.add("load_more", "image", "hide");
    divLoads.dataset.item = datasetLoad[i];


    let flipDivLoad = document.createElement('div');
    flipDivLoad.classList.add("flip-block");

    let blockOneLoad = document.createElement('div');
    blockOneLoad.classList.add("block_one");

    const imgLoad = document.createElement('img');
    imgLoad.src = loads[i];
    blockOneLoad.append(imgLoad);
    let textBlockLoad = document.createElement('div');
    let iconsLoad = document.createElement('div');
    textBlockLoad.classList.add("text_block");
    iconsLoad.classList.add("icons_block");
    textBlockLoad.prepend(iconsLoad);
    let pOneLoad = document.createElement('p');
    pOneLoad.innerHTML = 'creative design';
    pOneLoad.classList.add('title_block_one');
    let pTwoLoad = document.createElement('p');
    pTwoLoad.innerHTML = 'Web Design';
    pTwoLoad.classList.add("text_block_one");
    textBlockLoad.append(pOneLoad);
    textBlockLoad.append(pTwoLoad);
    flipDivLoad.prepend(blockOneLoad);
    flipDivLoad.append(textBlockLoad);
    divLoads.append(flipDivLoad);
    const divLoad = document.getElementById('load_more_img');
    divLoad.append(divLoads);
    imgWorks.append(divLoad);

//------------------------------------------------------------LOADS +12
    let divLoadsMore = document.createElement('div');
    divLoadsMore.classList.add("load_more_blocks", "image", "hide");
    divLoadsMore.dataset.item = datasetLoad[i];


    let flipLoadMore = document.createElement('div');
    flipLoadMore.classList.add("flip-block");

    let blockLoadMore = document.createElement('div');
    blockLoadMore.classList.add("block_one");

    const imgLoadMore = document.createElement('img');
    imgLoadMore.src = loadsMore[i];
    blockLoadMore.append(imgLoadMore);
    let textBlockLoadMore = document.createElement('div');
    let iconsLoadMore = document.createElement('div');
    textBlockLoadMore.classList.add("text_block");
    iconsLoadMore.classList.add("icons_block");
    textBlockLoadMore.prepend(iconsLoadMore);
    let pOneLoadMore = document.createElement('p');
    pOneLoadMore.innerHTML = 'creative design';
    pOneLoadMore.classList.add('title_block_one');
    let pTwoLoadMore = document.createElement('p');
    pTwoLoadMore.innerHTML = 'Web Design';
    pTwoLoadMore.classList.add("text_block_one");
    textBlockLoadMore.append(pOneLoadMore);
    textBlockLoadMore.append(pTwoLoadMore);
    flipLoadMore.prepend(blockLoadMore);
    flipLoadMore.append(textBlockLoadMore);
    divLoadsMore.append(flipLoadMore);
    const divLoadMore = document.getElementById('load_more');
    divLoadMore.append(divLoadsMore);
    imgWorks.append(divLoadMore);
}



    const loadMore = document.getElementById('btn_load');
    let currentItems = 0;
    const divLoad = document.getElementById('load_more_img');
    divLoad.style.display = 'none';
    let bool = false;


    const divLoads = document.getElementById('load_more');
    divLoads.style.display = 'none';
    const loader = document.getElementById('loader');
        loader.classList.add('hide');
    loadMore.addEventListener('click', (e) => {
            e.target.classList.add('hide');
        loader.classList.remove('hide')
        window.setTimeout(function () {
               loader.classList.add('hide')
            }, 2000);
        window.setTimeout(function () {
        const elements = [...document.querySelectorAll('.load_more')];
        for (let i = currentItems; i < currentItems + 12; i++) {
            if (elements[i]) {

                divLoad.style.cssText = ` display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;`;
                divLoad.append(elements[i]);
            }
        }


        currentItems += 12;
        if (divLoad) {
            e.target.classList.remove('hide');
        }
                if(bool === true){
                const items = [...document.querySelectorAll('.load_more_blocks')];
                for (let i = 0; i < currentItems; i++) {
                    if (items[i]) {
                        divLoads.style.cssText = ` display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;`;
                        divLoads.append(items[i]);
                        e.target.classList.add('hide');
                    }
                }
            }

            bool = true;
                currentItems += 12;
        }, 2000);





    });



    const buttons = document.querySelectorAll('.tabs-title-works');
    const images = document.querySelectorAll('.image');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;
            filter(currentCategory, images);
        })
    })
    window.onload = function () {
        document.getElementById("first").click();
    }

    function filter(category, items) {
        items.forEach((item) => {
            const isShowAll = category.toLowerCase() === 'all';

            if (item.dataset.item === category || isShowAll) {
                item.classList.remove('hide');


            } else {
                item.classList.add('hide');


            }
        })
    }

const news = ['imgP/news1.jpg','imgP/news2.jpg','imgP/news3.jpg','imgP/news4.jpg','imgP/news5.jpg','imgP/news6.jpg','imgP/news7.jpg','imgP/news8.jpg'];
    for(let i = 0; i < news.length; i++){
        let newsDiv = document.createElement('div');
        newsDiv.classList.add('news');
        let photo = document.createElement('div');
        photo.classList.add('photo');
        let date = document.createElement('div');
        date.classList.add('date');
        let feb = document.createElement('div');
        feb.classList.add('Feb');
        let firstP = document.createElement('p');
        firstP.innerHTML = '12';
        let secondP = document.createElement('p');
        secondP.innerHTML = 'Feb';
        feb.append(firstP);
        feb.append(secondP);
        date.append(feb);
        photo.append(date);
        const imgNews = document.createElement('img');
        imgNews.src = news[i];
        const a = document.createElement('a');
        a.href = '#';
        a.innerHTML = imgNews.outerHTML;
        photo.append(a);
        newsDiv.append(photo);
        const desc = document.createElement('div');
        desc.classList.add('desc');
        desc.innerHTML = '<h1>Amazing Blog Post</h1>';
        const admin = document.createElement('div');
        admin.classList.add('admin');
        admin.innerHTML = '<p>By admin &nbsp; | &nbsp; 2 comment</p>';
        newsDiv.append(desc);
        newsDiv.append(admin);
        const newsImg = document.getElementById('news_images');
        newsImg.append(newsDiv);

    }








let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_dot", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active_dot";
}
document.addEventListener("keydown", changeSlide);
function changeSlide(e){
    if(e.key === "ArrowLeft"){
        plusSlides(-1)
    } else if(e.key === "ArrowRight"){
        plusSlides(1);
    }
}

document.addEventListener("DOMContentLoaded", function (){
    document.querySelectorAll('.nav_menu').forEach(link => {
        link.addEventListener('click', function(event){
            event.preventDefault();
            document.querySelectorAll('.section').forEach(content =>{
                if(link.dataset.section === content.dataset.section){
                    let top = content.offsetTop;
                    window.scroll({
                        top: top,
                        behavior: 'smooth'
                    })
                }
            })
        })
    })
})


