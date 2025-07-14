const infOpions = document.querySelectorAll('.Option');//la selection de tout les membres de la plateforme
const Presentation =document.querySelector('.presentation')
const navBar = document.querySelector('.toggle_bars');
const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const content =document.querySelector('.content')
const contentForm = document.querySelector('.contentForm');/*la selection de la form content*/
const notice = document.querySelector('.subscribeNotice');/*la selection de la notice*/
const Button = document.querySelector('.button')//la selection du button de la notice
const previousButton =document.querySelector('.indication1');//selection du button previous
const nextButton =document.querySelector('.indication2');//selection du button next
const sectionMaternelle=document.querySelector('.firstSection');
const sectionPrimaire=document.querySelector('.secondSection');
const sectionSecondaire=document.querySelector('.thirdSection');
var max=3;//valeur maximal que l'action du click sur nex devra effectuer
var i=0;
/*----------------------------------------*/
console.log(Presentation);

contentForm.addEventListener('click',()=>{
    content.style.display = "none";
    notice.style.display = "block";
})
Button.addEventListener('click',()=>{
    notice.style.display = "none";
    content.style.display = "block";
})

nextButton.addEventListener('click',()=>{
    i++;
    if(i==1){
        previousButton.style.display="block";
        sectionMaternelle.style.display = "none";
        sectionSecondaire.style.display = "none";
        sectionPrimaire.style.display = "flex";
    }
    else if(i==2){
        previousButton.style.display="block";
        sectionMaternelle.style.display = "none";
        sectionPrimaire.style.display = "none";
        sectionSecondaire.style.display = "flex";  
    }
     else if(i==3){
        previousButton.style.display="none";
        sectionMaternelle.style.display = "flex";
        sectionSecondaire.style.display = "none";
        sectionPrimaire.style.display = "none";
    }
    else
    {
        previousButton.style.display="none";
        sectionMaternelle.style.display = "flex";
        sectionSecondaire.style.display = "none";
        sectionPrimaire.style.display = "none";
    }
    if(i==max){
        i=0;
    }
})

navBar.addEventListener('click',()=>{
    nav.classList.toggle('show');//l'insertion d'une class au click
    header.classList.toggle('show');//l'insertion d'une class au click
})
 infOpions.forEach(infOption=>{
        infOption.addEventListener('click',()=>{
             infOption.classList.toggle("infOption"); //l'insertion d'une class inforMamber au click
     })
})