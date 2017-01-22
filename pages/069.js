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
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();

    if(this.exerciseData['toggles-q6']){
      if (this.exerciseData['toggles-q6'] === 'true' || this.exerciseData['toggles-q6'] === true) {
        this.toggles.q6 = true;
      }
    }
    if(this.exerciseData['toggles-q7']){
      if (this.exerciseData['toggles-q7'] === 'true' || this.exerciseData['toggles-q7'] === true) {
        this.toggles.q7 = true;
      }
    }
    if(this.exerciseData['toggles-q8']){
      if (this.exerciseData['toggles-q8'] === 'true' || this.exerciseData['toggles-q8'] === true) {
        this.toggles.q8 = true;
      }
    }
    if(this.exerciseData['toggles-q9']){
      if (this.exerciseData['toggles-q9'] === 'true' || this.exerciseData['toggles-q9'] === true) {
        this.toggles.q9 = true;
      }
    }
    if(this.exerciseData['toggles-q10']){
      if (this.exerciseData['toggles-q10'] === 'true' || this.exerciseData['toggles-q10'] === true) {
        this.toggles.q10 = true;
      }
    }


  }


}
