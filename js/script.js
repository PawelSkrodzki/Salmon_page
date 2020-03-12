/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#hamburger-menu').on('click', function(){
   
    $('.hamburger-list').toggleClass("hamburger-list-opened");
    
    return false;
});

$('.hamburger-menu').on('click', () => {
    $('.line').toggleClass('change');
});

