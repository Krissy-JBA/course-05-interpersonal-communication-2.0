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
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();

    var answersLeft = [];
    $('.matching').find('.option').each( function(i) {
      var $this = $(this);
      var answerValue = $this.data('target');
      var $target = $('.target[data-accept="'+answerValue+'"]');
      var $option = $('.option[data-accept="'+answerValue+'"]');
      var labelText = $target.text();
      $this.draggable({
        revert: "invalid",
        containment: ".matching"
      });

      if ( $target.length > 0 ) {
        $target.droppable( {
        accept: '.option[data-target="'+answerValue+'"]',
        drop: function( event, ui ) {
          $this.draggable('destroy');
          $target.droppable('destroy');
          $target.html(answerValue+':' + '<br>' + labelText );
          $this.addClass('padding-less');
          $this.parent().prop('outerHTML', '');
          $option.html(labelText);
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
       self.$parent.saveData('answerMe4', 'true');
     }
   });

   if(this.exerciseData['answerMe4']){
     this.correct = true;
     $('.target').parent().prop('outerHTML', '');

     $('.magenta-blob-box').addClass('padding-less purple-blob-box');
     $('.magenta-blob-box').removeClass('magenta-blob-box');
     $('.flexy-match2').addClass('flexy-reload');
     $('#clarify').html('Clarifying: <br> Could you go over that again? ');
     $('#open').html('Open: <br> How did that make you feel? ');
     $('#reflect').html("Reflective: <br> So you're saying you didn't see it? ");
     $('#closed').html("Closed: <br> Were you there yesterday?");

   }
 }















}
