pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      popup: false,
      tie: false,
      suit: false,
      tshirt: false,
      aleks: false,
      orange: false,
      red: false,
      pink:false

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
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn();

  }


}
