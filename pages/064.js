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
      this.answer = 'Aggressive and argumentative';
      this.$parent.saveData('Zabbys-intent', this.answer);
      this.popup1 = true;
      this.unlocked = true;
      this.correct = true;
    },
    twoButton: function() {
      this.whatThink = true;
      this.answer = 'Encouraging and caring';
      this.$parent.saveData('Zabbys-intent', this.answer);
      this.popup2 = true;
      this.unlocked = true;
      this.correct = false;
    },
    threeButton: function() {
      this.whatThink = true;
      this.answer = 'Distracted and unaware';
      this.$parent.saveData('Zabbys-intent', this.answer);
      this.popup2 = true;
      this.unlocked = true;
      this.correct = false;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['Zabbys-intent']){
      this.answer = this.exerciseData['Zabbys-intent'];
      this.unlocked = true;
      this.correct = true;
    }

  }


}
