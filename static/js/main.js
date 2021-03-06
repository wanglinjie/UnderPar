$(function(){
  var rgb_backgrounds = new Array(
    '#2f578b',
    '#488abe',
    '#018ec3',
    '#03393b',
    '#f0f7fd',
    '#018ec3'
  );

  $('.header-banner').slidesjs({
    width: 950,
    height: 360,
    play: {
      auto: true,
      active: true,
      effect: 'slide',
      interval: 3000,
      pauseOnHover: true,
      restartDelay: 1000
    },
    navigation: {
      effect: 'slide'
    },
    pagination: {
      effect: 'slide',
      autoResume: true
    },
    callback: {
        start: function(number){
          var index;
          if(number === rgb_backgrounds.length){
            number = 0;
          }
          index = number;
          $('.header-banner-wrapper').css('background-color', rgb_backgrounds[index]);
        }
    }
  });

  (function render(){
    $('.header-banner-wrapper').css('background-color', rgb_backgrounds[0]);
  })();
});
