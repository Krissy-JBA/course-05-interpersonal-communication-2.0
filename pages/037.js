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
      this.$parent.saveData('what-bird-are-you', value);
    },
    saveInputField2: function(value){
      this.$parent.saveData('did-you-identify-with-bird', value);
    },
    checkContent: function() {
      if ((this.inputfield1.length > 1) && (this.inputfield2.length > 1)) {
        this.content = true;
      }
      else {
        this.content = false;
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['what-bird-are-you']){
      this.inputfield1 = this.exerciseData['what-bird-are-you'];
    }
    if(this.exerciseData['did-you-identify-with-bird']){
      this.inputfield2 = this.exerciseData['did-you-identify-with-bird'];
    }
    if((this.exerciseData['what-bird-are-you']) && (this.exerciseData['did-you-identify-with-bird'])) {
      this.content = true;
    }

  }


}
