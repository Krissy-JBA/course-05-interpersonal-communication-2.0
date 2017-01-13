pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        content: false,
        popup: false
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputField1: function(value){
      this.$parent.saveData('use-CALM-stored', value);
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
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['use-CALM-stored']){
      this.inputfield1 = this.exerciseData['use-CALM-stored'];
      this.content = true;
    }

  }


}
