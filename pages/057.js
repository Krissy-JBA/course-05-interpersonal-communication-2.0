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
      this.$parent.saveData('what-types-of-questions-asked', value);
    },
    saveInputField2: function(value){
      this.$parent.saveData('what-types-of-questions-could-have-asked', value);
    },
    checkContent: function() {
      if ((this.inputfield1.length > 1) && (this.inputfield2.length > 1))   {
        this.content = true;
      }
      else {
        this.content = false;
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn();
    if(this.exerciseData['what-types-of-questions-asked']){
      this.inputfield1 = this.exerciseData['what-types-of-questions-asked'];
    }
    if(this.exerciseData['what-types-of-questions-could-have-asked']){
      this.inputfield2 = this.exerciseData['what-types-of-questions-could-have-asked'];
    }
    if((this.exerciseData['what-types-of-questions-asked']) && (this.exerciseData['what-types-of-questions-could-have-asked'])){
      this.content = true;
    }

  }


}
