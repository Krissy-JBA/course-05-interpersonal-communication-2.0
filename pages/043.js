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
      this.$parent.saveData('who-are-your-audience', value);
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
    if(this.exerciseData['who-are-your-audience']){
      this.inputfield1 = this.exerciseData['who-are-your-audience'];
      this.content = true;
    }

  }


}
