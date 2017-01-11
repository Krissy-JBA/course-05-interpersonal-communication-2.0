pageComponentry = {
  data: function() {
    return {
      // Any data goes here.
      correct: false

    }
  },
  methods: {

  },
  ready: function() {
    //call popups
    var self = this;
    courseFeatureJBA.transitionIn();

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
        }

    });
     answersLeft.push(answerValue);
     } else { }



   });
   var self = this;

   $('#submit').click(function() {
     if (answersLeft.length == 0 ) {
       self.correct = true;
       self.$parent.saveData('answerMe2', 'true');
     }
   });

   if(this.exerciseData['answerMe2']){
     this.correct = true;
   }
}












}
