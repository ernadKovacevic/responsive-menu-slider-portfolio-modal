//let pictures = document.querySelectorAll("img");
let rightButton = document.querySelector("#right-btn");
let leftButton = document.querySelector("#left-btn");
let pictures = rightButton.parentNode.querySelectorAll("img");

let index = 1;
let menuOpen = false;

rightButton.addEventListener('click',(event)=>{

    if(index < 3)
        pictures[0].setAttribute('src',`img/slide${++index}.jpg`)

})

leftButton.addEventListener('click', (event) => {

    if(index > 1)
        pictures[0].setAttribute('src',`img/slide${--index}.jpg`)
    

})

const mobileMenu = () => {
    let menu = document.querySelector("ul");
    if ( menuOpen == false){
        menu.style.display = "block";
        menuOpen = !menuOpen;
    }else{
        menu.style.display = "";
        menuOpen = !menuOpen;
    }
}

const portfolioSort = (event) =>{
    let select = event.getAttribute('data-category');
    let slides = document.querySelectorAll(".portfolio-single-item");

    slides.forEach((element) => {
        element.style.display = "none";
    })

    slides.forEach((element) =>{
       let category = element.getAttribute('data-category');
       if (select == 'sve'){
            element.removeAttribute('style');
       }
       else if (category.includes(select)){
            element.style.display = 'block'
            console.log(element);
       }
    })

}

const openModal = () =>{
    let modal = document.querySelector('.popup-modal');
    modal.style.display = "block";
}

const closeModal = () =>{
    let modal = document.querySelector('.popup-modal');
    modal.style.display = "none";
}