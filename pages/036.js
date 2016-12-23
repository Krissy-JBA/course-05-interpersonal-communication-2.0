pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
    }
  },
  methods: {
    // Any page specific methods go here.
    goOutside: function() {
      window.open('http://richardstep.com/dope-personality-type-quiz/dope-bird-4-personality-types-test-questions-online-version/', '_blank');
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn();

  }


}
