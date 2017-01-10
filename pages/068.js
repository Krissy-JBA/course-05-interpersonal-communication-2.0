pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      toggles: {
          q1: false,
          q2: false,
          q3: false,
          q4: false,
          q5: false
      }
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputData: function(value){
      this.$parent.saveData('toggles-q1', this.toggles.q1);
      this.$parent.saveData('toggles-q2', this.toggles.q2);
      this.$parent.saveData('toggles-q3', this.toggles.q3);
      this.$parent.saveData('toggles-q4', this.toggles.q4);
      this.$parent.saveData('toggles-q5', this.toggles.q5);
      //Percentage score
      var agrees = $('input:checked').length;
      var percentage = Math.round(agrees * 10);
      this.$parent.saveData('percentage', percentage);
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn();

    if(this.exerciseData['toggles-q1']){
      if ((this.exerciseData['toggles-q1']) == 'true') {
        $('#q1').prop('checked', true);
      }
    }
    if(this.exerciseData['toggles-q2']){
      if ((this.exerciseData['toggles-q2']) == 'true') {
        $('#q2').prop('checked', true);
      }
    }
    if(this.exerciseData['toggles-q3']){
      if ((this.exerciseData['toggles-q3']) == 'true') {
        $('#q3').prop('checked', true);
      }
    }
    if(this.exerciseData['toggles-q4']){
      if ((this.exerciseData['toggles-q4']) == 'true') {
        $('#q4').prop('checked', true);
      }
    }
    if(this.exerciseData['toggles-q5']){
      if ((this.exerciseData['toggles-q5']) == 'true') {
        $('#q5').prop('checked', true);
      }
    }


  }


}
