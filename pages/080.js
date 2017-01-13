pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        inputfield2: '',
        content: false
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputField1: function(value){
      this.$parent.saveData('what-questions-did-you-ask', value);
    },
    saveInputField2: function(value){
      this.$parent.saveData('three-hints-for-future', value);
    },
    checkContent: function() {
      if ((this.inputfield1.length > 1) && (this.inputfield2.length > 1) )  {
        this.content = true;
      }
      else {
        this.content = false;
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['what-questions-did-you-ask']){
      this.inputfield1 = this.exerciseData['what-questions-did-you-ask'];
      this.content = true;
    }
    if(this.exerciseData['three-hints-for-future']){
      this.inputfield2 = this.exerciseData['three-hints-for-future'];
      this.content = true;
    }

  }


}
