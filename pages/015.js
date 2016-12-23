pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      answer: '',
      popup1: false,
      popup2: false
    }
  },
  methods: {
    // Any page specific methods go here.
    oneButton: function() {
      this.whatThink = true;
      this.answer = 'Jargon helps';
      this.$parent.saveData('helpsHinders3', this.answer);
      this.popup2= true;
    },
    twoButton: function() {
      this.whatThink = true;
      this.answer = 'Jargon hinders';
      this.$parent.saveData('helpsHinders3', this.answer);
      this.popup1 = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn();
    if(this.exerciseData['helpsHinders3']){
      this.answer = this.exerciseData['helpsHinders3'];
      this.whatThink = true;
    }

  }


}
