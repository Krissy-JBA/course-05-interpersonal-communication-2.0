pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup: false,
      popup2: false,
      tie: false,
      suit: false,
      tshirt: false,
      aleks: false,
      orange: false,
      red: false,
      pink:false,
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      done: false,
      reload: false
    }
  },
  methods: {
    // Any page specific methods go here.
    redClick: function(){
      this.popup = true;
      this.red = true;
      this.tie = false;
      this.suit = false;
      this.tshirt = false;
      this.aleks = false;
      this.orange = false;
      this.pink = false;
      this.one = true;
      console.log(this.one);
      if((this.one == true) && (this.two == true) && (this.three == true) && (this.four == true) && (this.five == true) && (this.six == true) && (this.seven == true)) {
        this.done = true;
        this.$parent.saveData('ticked-people', this.done);
      }
    },
    pinkClick: function(){
      this.popup = true;
      this.red = false;
      this.tie = false;
      this.suit = false;
      this.tshirt = false;
      this.aleks = false;
      this.orange = false;
      this.pink = true;
      this.two = true;
      console.log(this.two);
      if((this.one == true) && (this.two == true) && (this.three == true) && (this.four == true) && (this.five == true) && (this.six == true) && (this.seven == true)) {
        this.done = true;
        this.$parent.saveData('ticked-people', this.done);
      }
    },
    orangeClick: function(){
      this.popup = true;
      this.red = false;
      this.tie = false;
      this.suit = false;
      this.tshirt = false;
      this.aleks = false;
      this.orange = true;
      this.pink = false;
      this.three = true;
      console.log(this.three);
      if((this.one == true) && (this.two == true) && (this.three == true) && (this.four == true) && (this.five == true) && (this.six == true) && (this.seven == true)) {
        this.done = true;
        this.$parent.saveData('ticked-people', this.done);
      }
    },
    tieClick: function(){
      this.popup = true;
      this.red = false;
      this.tie = true;
      this.suit = false;
      this.tshirt = false;
      this.aleks = false;
      this.orange = false;
      this.pink = false;
      this.four = true;
      console.log(this.four);
      if((this.one == true) && (this.two == true) && (this.three == true) && (this.four == true) && (this.five == true) && (this.six == true) && (this.seven == true)) {
        this.done = true;
        this.$parent.saveData('ticked-people', this.done);
      }
    },
    suitClick: function(){
      this.popup = true;
      this.red = false;
      this.tie = false;
      this.suit = true;
      this.tshirt = false;
      this.aleks = false;
      this.orange = false;
      this.pink = false;
      this.five = true;
      console.log(this.five);
      if((this.one == true) && (this.two == true) && (this.three == true) && (this.four == true) && (this.five == true) && (this.six == true) && (this.seven == true)) {
        this.done = true;
        this.$parent.saveData('ticked-people', this.done);
      }
    },
    aleksClick: function(){
      this.popup = true;
      this.red = false;
      this.tie = false;
      this.suit = false;
      this.tshirt = false;
      this.aleks = true;
      this.orange = false;
      this.pink = false;
      this.six = true;
      console.log(this.six);
      if((this.one == true) && (this.two == true) && (this.three == true) && (this.four == true) && (this.five == true) && (this.six == true) && (this.seven == true)) {
        this.done = true;
        this.$parent.saveData('ticked-people', this.done);
      }
    },
    tshirtClick: function(){
      this.popup = true;
      this.red = false;
      this.tie = false;
      this.suit = false;
      this.tshirt = true;
      this.aleks = false;
      this.orange = false;
      this.pink = false;
      this.seven = true;
      console.log(this.seven);
      console.log(this.done, 'alex');
      if((this.one == true) && (this.two == true) && (this.three == true) && (this.four == true) && (this.five == true) && (this.six == true) && (this.seven == true)) {
        this.done = true;
        this.$parent.saveData('ticked-people', this.done);
      }
    },
    redirectMe: function() {
      window.location.hash = '075';
    },
    newPopup: function() {
      if(this.done == true && this.reload == false) {
        this.popup2 = true;
      }
      else if (this.reload == true) {
        window.location.hash = '075';
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();

    if((this.one == true) && (this.two == true) && (this.three == true) && (this.four == true) && (this.five == true) && (this.six == true) && (this.seven == true)) {
      this.done = true;
      this.$parent.saveData('ticked-people', this.done);
    }
    if(this.exerciseData['ticked-people']){
      this.done = this.exerciseData['ticked-people'];
      this.reload = true;
      console.log(this.reload);
    }



  }


}
