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
      this.answer = 'Behavioural styles help';
      this.$parent.saveData('helpsHinders4', this.answer);
      this.popup2= true;
    },
    twoButton: function() {
      this.whatThink = true;
      this.answer = 'Behavioural styles hinder';
      this.$parent.saveData('helpsHinders4', this.answer);
      this.popup1 = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn();
    if(this.exerciseData['helpsHinders4']){
      this.answer = this.exerciseData['helpsHinders4'];
      this.whatThink = true;
    }

  }


}
