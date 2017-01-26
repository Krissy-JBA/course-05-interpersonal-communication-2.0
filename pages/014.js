pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      answer: '',
      popup1: false,
      popup2: false,
      correct: false,
      one: false,
      two: false
    }
  },
  methods: {
    // Any page specific methods go here.
    oneButton: function() {
      this.whatThink = true;
      this.answer = 'Cultural Differences help';
      this.$parent.saveData('helpsHinders2', this.answer);
      this.popup2 = true;
      this.correct = false;
    },
    twoButton: function() {
      this.whatThink = true;
      this.answer = 'Cultural Differences hinder';
      this.$parent.saveData('helpsHinders2', this.answer);
      this.popup1 = true;
      this.correct = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['helpsHinders2']){
      this.answer = this.exerciseData['helpsHinders2'];
      this.whatThink = true;
      this.correct = true;
    }

  }


}
