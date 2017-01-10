pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      c: false,
      a: false,
      l: false,
      m: false,
      popupC: false,
      popupA: false,
      popupL: false,
      popupM: false
    }
  },
  methods: {
    // Any page specific methods go here.
    cClick: function() {
      this.c = true;
      this.popupC = true;
    },
    aClick: function() {
      this.a = true;
      this.popupA = true;
    },
    lClick: function() {
      this.l = true;
      this.popupL = true;
    },
    mClick: function() {
      this.m = true;
      this.popupM = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn();

  }


}
