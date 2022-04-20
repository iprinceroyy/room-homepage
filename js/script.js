document.querySelector(".nav-toggler").addEventListener('click',()=>{
    document.querySelector(".nav-toggler").style.display="none";
    document.querySelector(".logo").style.display="none";
    document.querySelector(".close").style.display="inline";
    document.querySelector(".nav-list").style.display="block";
    // document.querySelector(".navbar").style.backgroundColor="white";
    navContent();
});
function navContent(){
    document.querySelector(".nav-item-mob").classList.add("custom-nav");
}


