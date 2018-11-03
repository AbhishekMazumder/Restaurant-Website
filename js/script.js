$(document).ready(function(){
  //toggler-btn
  $('.toggler-btn').click(function() {
    $('.toggler-btn').toggleClass('change');
  });

  

  


//ripples
  $("#header, .info").ripples();
  /**or we can modify the effects 
   $("#header, .info").ripples({
  dropRadius: 24,
  perturbance: 0.1,
  ...
});
  **/

  //magnific pop-up
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{
      enabled: true
    }
    // other options
  });

});