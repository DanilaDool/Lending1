$(function(){
  $('.member-about').hide();
  $('.member-moto').click(function(){
    $(this).next().slideToggle({duration: 300});
  });
});
