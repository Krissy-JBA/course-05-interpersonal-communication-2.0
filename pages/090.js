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
      this.$parent.saveData('use-CALM-explode', value);
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
    if(this.exerciseData['use-CALM-explode']){
      this.inputfield1 = this.exerciseData['use-CALM-explode'];
      this.content = true;
    }
    var self = this;
    document.getElementById("textarea").addEventListener("paste", myFunction);
    function myFunction() {
     self.content = true;
    }


  }


}
