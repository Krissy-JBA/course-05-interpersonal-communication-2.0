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
      this.$parent.saveData('describe-a-conflict-assertive', value);
    },
    saveInputField2: function(value){
      this.$parent.saveData('why-did-you-act-this-way-assertive', value);
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
    if(this.exerciseData['describe-a-conflict-assertive']){
      this.inputfield1 = this.exerciseData['describe-a-conflict-assertive'];
      this.content = true;
    }
    if(this.exerciseData['why-did-you-act-this-way-exploded']){
      this.inputfield2 = this.exerciseData['why-did-you-act-this-way-assertive'];
      this.content = true;
    }

  }


}
