pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      toggles: {
          q6: false,
          q7: false,
          q8: false,
          q9: false,
          q10: false
      }
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputData: function(value){
      this.$parent.saveData('toggles-q6', this.toggles.q6);
      this.$parent.saveData('toggles-q7', this.toggles.q7);
      this.$parent.saveData('toggles-q8', this.toggles.q8);
      this.$parent.saveData('toggles-q9', this.toggles.q9);
      this.$parent.saveData('toggles-q10', this.toggles.q10);
      //Percentage score
      var agrees2 = $('input:checked').length;
      var percentage2 = Math.round(agrees2 * 10);
      this.$parent.saveData('percentage2', percentage2);
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn();

    if(this.exerciseData['toggles-q6']){
      if ((this.exerciseData['toggles-q6']) == 'true') {
        $('#q6').prop('checked', true);
      }
    }
    if(this.exerciseData['toggles-q7']){
      if ((this.exerciseData['toggles-q7']) == 'true') {
        $('#q7').prop('checked', true);
      }
    }
    if(this.exerciseData['toggles-q8']){
      if ((this.exerciseData['toggles-q8']) == 'true') {
        $('#q8').prop('checked', true);
      }
    }
    if(this.exerciseData['toggles-q9']){
      if ((this.exerciseData['toggles-q9']) == 'true') {
        $('#q9').prop('checked', true);
      }
    }
    if(this.exerciseData['toggles-q10']){
      if ((this.exerciseData['toggles-q10']) == 'true') {
        $('#q10').prop('checked', true);
      }
    }


  }


}
