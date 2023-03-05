$(function(){

    let showPopup = function(){
        $('.popup-container').css('display', 'flex');

    $('.close').on('click', function(){
        clearForm();
        closePopup();
    });
});