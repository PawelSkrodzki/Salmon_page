/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const animatedTags = document.querySelectorAll(`.animation1, .left-footer h3,.left-footer h4, .bold-p, .left-footer p, footer ul`);

const animatedTags2 = document.querySelectorAll(`.animation2, .background, .photos, .paragraph, .time, .recipe p, .recipe h4`);

animatedTags.forEach(tag =>{
    tag.style.opacity = 0;
}); 

animatedTags2.forEach(tag =>{
    tag.style.opacity = 0;
}); 

const fadeIn = function(){ 
    
    let delay = 0.25;
    
    
    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom =tag.getBoundingClientRect().bottom;
        
        if(tagTop < window.innerHeight && tagBottom > 0){
            tag.style.animation = `fadein  1s ${delay}s both`;
            delay = delay + 0.2;            
        }
        
    });
    animatedTags2.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom =tag.getBoundingClientRect().bottom;
        
        if(tagTop < window.innerHeight && tagBottom > 0){
            tag.style.animation = `fadein  1.3s 0.2s both`;           
        }
        
    });
};




fadeIn();


document.addEventListener("scroll", function(){
    fadeIn();
});

window.addEventListener('resize', function(){
    fadeIn();
});