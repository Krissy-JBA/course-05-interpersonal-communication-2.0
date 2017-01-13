pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      answer: '',
      popup: false,
      unlocked: false
    }
  },
  methods: {
    // Any page specific methods go here.
    oneButton: function() {
      this.whatThink = true;
      this.answer = 'It is okay';
      this.$parent.saveData('Cutting-in-line', this.answer);
      this.popup = true;
      this.unlocked = true;
    },
    twoButton: function() {
      this.whatThink = true;
      this.answer = 'It is not okay';
      this.$parent.saveData('Cutting-in-line', this.answer);
      this.popup = true;
      this.unlocked = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['Cutting-in-line']){
      this.answer = this.exerciseData['Cutting-in-line'];
      this.unlocked = true;
    }

  }


}
