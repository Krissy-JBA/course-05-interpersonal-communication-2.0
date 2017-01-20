pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
        inputfield1: '',
        inputfield2: '',
        content: false,
        content1: false,
        content2: false
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
      if ((this.inputfield1.length >= 1) && (this.inputfield2.length >= 1) )  {
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
      this.content1 = true;
      this.content2 = true;
      if (this.content1 == true && this.content2 == true) {
        this.content = true;
      }
    }
    if(this.exerciseData['three-hints-for-future']){
      this.inputfield2 = this.exerciseData['three-hints-for-future'];
      this.content2 = true;
      this.content2 = true;
      if (this.content1 == true && this.content2 == true) {
        this.content = true;
      }
    }
    var self = this;
    document.getElementById("textarea").addEventListener("paste", myFunction);
    function myFunction() {
     self.content1 = true;
     if (self.content1 == true && self.content2 == true) {
       self.content = true;
     }
    }
    document.getElementById("textarea2").addEventListener("paste", myFunction2);
    function myFunction2() {
     self.content2 = true;
     if (self.content1 == true && self.content2 == true) {
       self.content = true;
     }
    }

  }


}
