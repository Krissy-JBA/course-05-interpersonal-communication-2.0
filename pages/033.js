pageComponentry = {
  data: function() {
    return {
      // Any data goes here.
      disabledInput: true,
      hideLocked: false,
      disableInput: true,
      active1: false,
      selected: false,
      active2: false,
      selected2: false,
      active3: false,
      selected3: false,
      active4: false,
      selected4: false,
      itemComplete: false,
      itemComplete2: false,
      itemComplete3: false,
      itemComplete4: false
    }
  },
  methods: {
    clicker: function() {
        var line = $('.line');
        this.selected = true;
          var pos1 = $('#eagleLeft img').position();
          var leftie = pos1.left + $('#eagleLeft img').width();
          var pos2 = $('.matching-clicked').position();
          line.attr('x1',leftie).attr('y1',pos1.top).attr('x2',pos2.left).attr('y2',pos2.top);
          if ($('.matching-clicked').is('#eagle')) {
            $('#eagle').addClass('correct');
            this.itemComplete2 = true;
            $('#eagle').removeClass('matching-clicked');
            $('#eagle').addClass('matchingcorrect');
          }
          else {
              $('.matching-clicked').removeClass('matching-clicked');
              this.selected = false;
              $('.brandingBoxWrap').addClass('animated shake');
              $('.brandingBoxWrap').one("animationend", function() {
                  $('.brandingBoxWrap').removeClass("animated shake");
              });
          }
        

    },
    clicker2: function() {
        var line2 = $('.line2');
        this.selected2 = true;
          var pos1 = $('#owlLeft img').position();
          var leftie = pos1.left + $('#owlLeft img').width();
          var pos2 = $('.matching-clicked').position();
          line2.attr('x1',leftie).attr('y1',pos1.top).attr('x2',pos2.left).attr('y2',pos2.top);
          if ($('.matching-clicked').is('#owl')) {
            $('#owl').addClass('correct');
            this.itemComplete2 = true;
            $('#owl').removeClass('matching-clicked');
            $('#owl').addClass('matchingcorrect');
          }
          else {

            $('.matching-clicked').removeClass('matching-clicked');
            this.selected2 = false;
            $('.brandingBoxWrap').addClass('animated shake');
            $('.brandingBoxWrap').one("animationend", function() {
                $('.brandingBoxWrap').removeClass("animated shake");
            });
          }








    },
    clicker3: function() {
        var line3 = $('.line3');
        this.selected3 = true;
          var pos1 = $('#doveLeft img').position();
          var leftie = pos1.left + $('#doveLeft img').width();
          var pos2 = $('.matching-clicked').position();
          line3.attr('x1',leftie).attr('y1',pos1.top).attr('x2',pos2.left).attr('y2',pos2.top);
          if ($('.matching-clicked').is('#dove')) {
            $('#dove').addClass('correct');
            this.itemComplete2 = true;
            $('#dove').removeClass('matching-clicked');
            $('#dove').addClass('matchingcorrect');
          }
          else {
            $('.matching-clicked').removeClass('matching-clicked');
            this.selected3 = false;
            $('.brandingBoxWrap').addClass('animated shake');
            $('.brandingBoxWrap').one("animationend", function() {
                $('.brandingBoxWrap').removeClass("animated shake");
            });
          }






    },
    clicker4: function() {
        var line4 = $('.line4');
        this.selected4 = true;
          var pos1 = $('#peacockLeft img').position();
          var leftie = pos1.left + $('#peacockLeft img').width();
          var pos2 = $('.matching-clicked').position();
          line4.attr('x1',leftie).attr('y1',pos1.top).attr('x2',pos2.left).attr('y2',pos2.top);

          if ($('.matching-clicked').is('#peacock')) {
            $('#peacock').addClass('correct');
            this.itemComplete2 = true;
            $('#peacock').removeClass('matching-clicked');
            $('#peacock').addClass('matchingcorrect');
          }
          else {
              $('.matching-clicked').removeClass('matching-clicked');
              this.selected4 = false;
              $('.brandingBoxWrap').addClass('animated shake');
              $('.brandingBoxWrap').one("animationend", function() {
                  $('.brandingBoxWrap').removeClass("animated shake");
              });
            }
        }

  },
  ready: function() {
    //call popups
    var self = this;
    courseFeatureJBA.transitionIn();

    //load data on ready state

    $('.matchy').click(function() {
      $(this).addClass('matching-clicked');
    });
    $('.matchingimg').click(function() {
      $(this).addClass('img-selected');
    });

  }
}
