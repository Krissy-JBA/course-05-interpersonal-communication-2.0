pageComponentry = {
  data: function() {
    return {
      // Any data goes here.
      correct: false,
      pageReload: false,
      mobsmall: false,
      mobmed: false,
      desktop: false,
      popup:false

    }
  },
  methods: {
    redirectMe: function() {
      $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '034';;},400);
    },
    nextButton: function() {
      if(this.pageReload == true) {
        $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '034';;},400);
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
    $('.matching-game').find('.option').each( function(i) {
      var $this = $(this);
      var answerValue = $this.data('target');
      var $target = $('.target[data-accept="'+answerValue+'"]');
      var labelText = $this.html();
      $this.draggable( {
        revert: "invalid",
        containment: ".matching-game"
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
            self.$parent.saveData('answerMe1', 'true');
          }
        }

    });
     answersLeft.push(answerValue);
     } else { }



   });

   if(this.exerciseData['answerMe1']){
     this.correct = true;
     this.pageReload = true;

   }
}












}
