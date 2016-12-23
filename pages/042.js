pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        content: false
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputField1: function(value){
      this.$parent.saveData('want-audience-to-take-away', value);
    },
    checkContent: function() {
      if (this.inputfield1.length > 1)  {
        this.content = true;
      }
      else {
        this.content = false;
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn();
    if(this.exerciseData['want-audience-to-take-away']){
      this.inputfield1 = this.exerciseData['want-audience-to-take-away'];
      this.content = true;
    }

  }


}
