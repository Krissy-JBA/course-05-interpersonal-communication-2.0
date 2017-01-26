pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      answer: '',
      popup1: false,
      popup2: false,
      unlocked: false,
      correct:false
    }
  },
  methods: {
    // Any page specific methods go here.
    oneButton: function() {
      this.whatThink = true;
      this.answer = 'Amused and participating';
      this.$parent.saveData('Zabbys-intent3', this.answer);
      this.popup2 = true;
      this.unlocked = true;
      this.correct = false;
    },
    twoButton: function() {
      this.whatThink = true;
      this.answer = 'Distracted and not engaged';
      this.$parent.saveData('Zabbys-intent3', this.answer);
      this.popup1 = true;
      this.unlocked = true;
      this.correct = true;
    },
    threeButton: function() {
      this.whatThink = true;
      this.answer = 'Engaged and interested';
      this.$parent.saveData('Zabbys-intent3', this.answer);
      this.popup2 = true;
      this.unlocked = true;
      this.correct = false;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['Zabbys-intent3']){
      this.answer = this.exerciseData['Zabbys-intent3'];
      this.unlocked = true;
      this.correct = true;
    }

  }


}
