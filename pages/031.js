pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      owl: false,
      eagle: false,
      dove: false,
      peacock: false,
      popup: false
    }
  },
  methods: {
    // Any page specific methods go here.
    owlClick: function() {
      this.owl = true;
      this.eagle = false;
      this.dove = false;
      this.peacock = false;
      this.popup = true;
    },
    eagleClick: function() {
      this.owl = false;
      this.eagle = true;
      this.dove = false;
      this.peacock = false;
      this.popup = true;
    },
    doveClick: function() {
      this.owl = false;
      this.eagle = false;
      this.dove = true;
      this.peacock = false;
      this.popup = true;
    },
    peacockClick: function() {
      this.owl = false;
      this.eagle = false;
      this.dove = false;
      this.peacock = true;
      this.popup = true;
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn();

  }
}
