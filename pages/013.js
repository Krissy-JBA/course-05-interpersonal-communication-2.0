pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      answer: '',
      popup1: false,
      popup2: false,
      correct:false
    }
  },
  methods: {
    // Any page specific methods go here.
    oneButton: function() {
      this.whatThink = true;
      this.answer = 'Questions help';
      this.$parent.saveData('helpsHinders1', this.answer);
      this.popup1 = true;
      this.correct = true;
    },
    twoButton: function() {
      this.whatThink = true;
      this.answer = 'Questions hinder';
      this.$parent.saveData('helpsHinders1', this.answer);
      this.popup2 = true;
      this.correct = false;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['helpsHinders1']){
      this.answer = this.exerciseData['helpsHinders1'];
      this.whatThink = true;

        this.correct = true;
      
    }

  }


}
