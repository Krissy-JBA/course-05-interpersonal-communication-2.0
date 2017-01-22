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
      this.$parent.saveData('what-is-their-perspective', value);
    },
    checkContent: function() {
      if (this.inputfield1.length >= 1)  {
        this.content = true;
      }
      else {
        this.content = false;
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['what-is-their-perspective']){
      this.inputfield1 = this.exerciseData['what-is-their-perspective'];
      this.content = true;
    }
    document.getElementById("textarea").addEventListener("paste", myFunction);
    var self = this;
    function myFunction() {
     self.content = true;
    }

  }


}
