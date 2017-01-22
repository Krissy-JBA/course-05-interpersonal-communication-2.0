pageComponentry = {
  data: function() {
    return {
      // Any data goes here.
      correct: false,
      pageReload: false,
      popup:false

    }
  },
  methods: {
    redirectMe: function() {
      $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '061';},400);
    },
    nextButton: function() {
      if(this.pageReload == true) {
        $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '061';},400);
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
    $('.piechart').find('.option').each( function(i) {
      var $this = $(this);
      var answerValue = $this.data('target');
      var $target = $('.target[data-accept="'+answerValue+'"]');
      var labelText = $target.text();
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
          $target.hide();
          $target.html(labelText);
          answersLeft.splice( answersLeft.indexOf( answerValue ), 1 );
          if (answersLeft.length == 0) {
            self.correct = true;
            self.$parent.saveData('answerMe5', 'true');
          }
        }

    });
     answersLeft.push(answerValue);
     } else { }





   });
   var self = this;

   $('#submit').click(function() {
     if (answersLeft.length == 0 ) {
       self.correct = true;
       self.$parent.saveData('answerMe5', 'true');
     }
   });

   if(this.exerciseData['answerMe5']){
     this.correct = true;
     this.pageReload = true;
   }
 }















}
