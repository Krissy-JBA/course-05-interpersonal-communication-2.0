pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
    }
  },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    $('.single-item').slick({
      infinite: false,
      prevArrow: '<svg class="slick-prev slick-arrow " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 88"><defs><style>.cls-1{fill:#d61a69;}</style></defs><title>Artboard 25</title><g id="Layer_2" data-name="Layer 2"><path class="cls-1 cls-prev" d="M33.31,3.27C23.22,18.81,7.59,31.86.74,49.36A4.85,4.85,0,0,0,2,54.18c11.12,10.74,20.64,23.9,33.78,32.33,5.38,3.45,10.35-5.12,5-8.55C28.44,70,19.47,57.28,9,47.17L10.29,52c3.13-8,9.76-15.61,15.1-22.22,5.68-7,11.55-13.92,16.48-21.51,3.48-5.36-5.09-10.33-8.55-5Z"/></g></svg>',
      nextArrow: '<svg class="slick-next slick-arrow "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 88"><defs><style>.cls-1{fill:#d61a69;}</style></defs><title>Artboard 25 copy</title><g id="Layer_2" data-name="Layer 2"><path class="cls-1 cls-next" d="M2.14,8.27c9.76,15,25,27.63,31.38,44.64l1.27-4.82C24.49,58,15.36,70.18,3.21,78c-5.35,3.42-.39,12,5,8.55,12.93-8.28,22.64-20.86,33.59-31.42a4.86,4.86,0,0,0,1.27-4.82c-6.83-18.1-22-31.07-32.38-47-3.46-5.33-12-.37-8.55,5Z"/></g></svg>'
    });
    //set grey on arrow prev
    $('.cls-prev').css('fill', '#b3b3b3');

    $('.single-item').on('afterChange', function(event, slick, currentSlide, nextSlide){
        if(currentSlide == '0'){
          $('.cls-prev').css('fill', '#b3b3b3');
        } else {
          $('.cls-prev').css('fill', '#d61a69');
        }

        if(currentSlide == '3'){
          $('.cls-next').css('fill', '#b3b3b3');
        } else {
          $('.cls-next').css('fill', '#d61a69');
        }

        self.globalSlideIndex = currentSlide;
    });


    $('.single-item').on('afterChange', function(event, slick, currentSlide, nextSlide){
      // if($(".slick-arrow").data("aria-disabled") === true) {
      //   console.log("hello");
      // }

    });
    $('.fa.fa-bars.fa-3x.text-main').click(function(){
       setTimeout(function(){
          $('.single-item').slick('unslick');
          $('.single-item').slick({
              prevArrow: '<svg class="slick-prev slick-arrow " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 88"><defs><style>.cls-1{fill:#d61a69;}</style></defs><title>Artboard 25</title><g id="Layer_2" data-name="Layer 2"><path class="cls-1 cls-prev" d="M33.31,3.27C23.22,18.81,7.59,31.86.74,49.36A4.85,4.85,0,0,0,2,54.18c11.12,10.74,20.64,23.9,33.78,32.33,5.38,3.45,10.35-5.12,5-8.55C28.44,70,19.47,57.28,9,47.17L10.29,52c3.13-8,9.76-15.61,15.1-22.22,5.68-7,11.55-13.92,16.48-21.51,3.48-5.36-5.09-10.33-8.55-5Z"/></g></svg>',
              nextArrow: '<svg class="slick-next slick-arrow "xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 88"><defs><style>.cls-1{fill:#d61a69;}</style></defs><title>Artboard 25 copy</title><g id="Layer_2" data-name="Layer 2"><path class="cls-1 cls-next" d="M2.14,8.27c9.76,15,25,27.63,31.38,44.64l1.27-4.82C24.49,58,15.36,70.18,3.21,78c-5.35,3.42-.39,12,5,8.55,12.93-8.28,22.64-20.86,33.59-31.42a4.86,4.86,0,0,0,1.27-4.82c-6.83-18.1-22-31.07-32.38-47-3.46-5.33-12-.37-8.55,5Z"/></g></svg>',
              infinite: false,
              initialSlide: self.globalSlideIndex
          });
          if(self.globalSlideIndex == '0'){
          $('.cls-prev').css('fill', '#b3b3b3');
        } else {
          $('.cls-prev').css('fill', '#d61a69');
        }

        if(self.globalSlideIndex == '3'){
          $('.cls-next').css('fill', '#b3b3b3');
        } else {
          $('.cls-next').css('fill', '#d61a69');
        }
       }, 800)
    });

  }


}
