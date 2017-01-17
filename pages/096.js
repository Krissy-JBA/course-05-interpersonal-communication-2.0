pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
    }
  },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    setTimeout(function() { $(".firstCheck").show(200) }, 1000);
       setTimeout(function() { $(".secondCheck").show(200) }, 2000);
       setTimeout(function() { $(".thirdCheck").show(200) }, 3000);
       setTimeout(function() { $(".fourthCheck").show(200) }, 4000);
       setTimeout(function() { $(".fifthCheck").show(200) }, 5000);
       setTimeout(function() { $(".sixthCheck").show(200) }, 6000);

  }


}
