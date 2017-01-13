pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      one: false,
      two:false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      popup: false,
      onePop: false,
      twoPop: false,
      threePop: false,
      fourPop: false,
      fivePop: false,
      sixPop: false,
      sevenPop: false
    }
  },
  methods: {
    // Any page specific methods go here.
    oneCheck: function() {
      this.one = true;
      this.popup = true;
      this.onePop = true;
      this.twoPop = false;
      this.threePop = false;
      this.fourPop = false;
      this.fivePop = false;
      this.sixPop = false;
      this.sevenPop = false;
    },
    twoCheck: function() {
      this.two = true;
      this.popup = true;
      this.onePop = false;
      this.twoPop = true;
      this.threePop = false;
      this.fourPop = false;
      this.fivePop = false;
      this.sixPop = false;
      this.sevenPop = false;
    },
    threeCheck: function() {
      this.three = true;
      this.popup = true;
      this.onePop = false;
      this.twoPop = false;
      this.threePop = true;
      this.fourPop = false;
      this.fivePop = false;
      this.sixPop = false;
      this.sevenPop = false;
    },
    fourCheck: function() {
      this.four = true;
      this.popup = true;
      this.onePop = false;
      this.twoPop = false;
      this.threePop = false;
      this.fourPop = true;
      this.fivePop = false;
      this.sixPop = false;
      this.sevenPop = false;
    },
    fiveCheck: function() {
      this.five = true;
      this.popup = true;
      this.onePop = false;
      this.twoPop = false;
      this.threePop = false;
      this.fourPop = false;
      this.fivePop = true;
      this.sixPop = false;
      this.sevenPop = false;
    },
    sixCheck: function() {
      this.six = true;
      this.popup = true;
      this.onePop = false;
      this.twoPop = false;
      this.threePop = false;
      this.fourPop = false;
      this.fivePop = false;
      this.sixPop = true;
      this.sevenPop = false;
    },
    sevenCheck: function() {
      this.seven = true;
      this.popup = true;
      this.onePop = false;
      this.twoPop = false;
      this.threePop = false;
      this.fourPop = false;
      this.fivePop = false;
      this.sixPop = false;
      this.sevenPop = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();

  }


}
