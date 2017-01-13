pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      cloud1: false,
      cloud2: false,
      cloud3: false,
      popup1: false,
      popup2: false,
      popup3: false
    }
  },
  methods: {
    // Any page specific methods go here.
    cloud1Click: function() {
      this.cloud1 = true;
      this.popup1 = true;
    },
    cloud2Click: function() {
      this.cloud2 = true;
      this.popup2 = true;
    },
    cloud3Click: function() {
      this.cloud3 = true;
      this.popup3 = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();

  }


}
