pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      percentage1: '',
      percentage2: '',
      correct: false
    }
  },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    courseFeatureJBA.transitionIn();

    if(this.exerciseData['percentage']){
      this.percentage1 = parseInt(this.exerciseData['percentage']);
    }
    if(this.exerciseData['percentage2']){
      this.percentage2 = parseInt(this.exerciseData['percentage2']);
    }

    var percentageTrue= Math.round(this.percentage1 + this.percentage2);
    var percentageFill = Math.round(100 - percentageTrue);

    console.log(percentageTrue);

    if (percentageTrue > 80) {
      this.correct = true;
    }
    else if (percentageTrue < 79 ) {
      this.correct = false;
    }

    createSVGElement= function(element) {
        return $(document.createElementNS('http://www.w3.org/2000/svg', element));
    }
    var $myGradient= $('#MyGradient');

    createSVGElement('stop')
    .attr({
        offset: percentageFill + '%',
        "stop-color": "#E51669"
    })
    .appendTo($myGradient);
    createSVGElement('stop')
    .attr({
        offset: percentageFill + '%',
        "stop-color": "#74cee2"
    })
    .appendTo($myGradient);

    createSVGElement('stop')
        .attr({
            offset:"100%",
            "stop-color":"#74cee2"
        })
  .appendTo($myGradient);createSVGElement('stop')







  }


}
