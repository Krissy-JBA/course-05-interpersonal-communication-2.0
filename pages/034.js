pageComponentry = {
  data: function() {
    return {
      // Any data goes here.
      correct: false,
      pageReload : false,
      mobsmall: false,
      mobmed: false,
      desktop: false,
      popup:false

    }
  },
  methods: {
    redirectMe: function() {
      window.location.hash = '035';
    },
    nextButton: function() {
      if(this.pageReload == true) {
        window.location.hash = '035';
      }
      else {
        this.popup = true;
      }
    }

  },
  ready: function() {
    //call popups
    var self = this;
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();

    var answersLeft = [];
    $('.matching').find('.option').each( function(i) {
      var $this = $(this);
      var answerValue = $this.data('target');
      var $target = $('.target[data-accept="'+answerValue+'"]');
      var labelText = $this.html();

      $this.draggable( {
        revert: "invalid",
        containment: ".matching"
      });

      if ( $target.length > 0 ) {
        $target.droppable( {
        accept: '.option[data-target="'+answerValue+'"]',
        drop: function( event, ui ) {
          $this.draggable('destroy');
          $target.droppable('destroy');
          $target.html(labelText);
          answersLeft.splice( answersLeft.indexOf( answerValue ), 1 );
          var $optionPosition = $('.option[data-target="'+answerValue+'"]').offset();
          if (answersLeft.length == 0) {
            self.correct = true;
            self.$parent.saveData('answerMe2', 'true');
          }
        }

    });
     answersLeft.push(answerValue);
     } else { }



   });
   var self = this;

   if(this.exerciseData['answerMe2']){
     this.correct = true;
     this.pageReload = true;
     var widthWindow = $(window).width();
     console.log(widthWindow);
     if (widthWindow < 375) {
       this.mobsmall = true;
     }
     else if ( widthWindow < 750 && window.matchMedia("(orientation: landscape)").matches ) {
       this.mobmed = true;
     }
     else  {
       this.desktop = true;
     }

   }
}












}
