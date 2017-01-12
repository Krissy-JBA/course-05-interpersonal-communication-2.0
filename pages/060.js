pageComponentry = {
  data: function() {
    return {
      // Any data goes here.
      correct: false,
      pageReload: false

    }
  },
  methods: {

  },
  ready: function() {
    //call popups
    var self = this;
    courseFeatureJBA.transitionIn();

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
