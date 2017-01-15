pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      module1: false,
      module2:false,
      module3:false,
      modulesComplete: false
    }
  },
  methods: {
    // Any page specific methods go here.
    prevButton: function() {
      if ((this.module1 == false) && (this.module2 == false) && (this.module3 == false)) {
        window.location.hash = '022'
      }
      else if ((this.module1 == true) && (this.module2 == false) && (this.module3 == false)) {
        window.location.hash = '027'
      }
      else if ((this.module1 == true) && (this.module2 == true) && (this.module3 == false)) {
        window.location.hash = '038'
      }
      else if ((this.module1 == true) && (this.module2 == true) && (this.module3 == true)) {
        window.location.hash = '040'
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    var currentPage = this.exerciseData['page.max']
    if (currentPage >= 24) {
      this.module1 = true;
    }
    if (currentPage >= 37) {
      this.module2 = true;
    }
    if (currentPage >= 39) {
      this.module3 = true;
    }
    if((this.module1 == true) && (this.module2 == true) && (this.module3 == true)) {
      this.modulesComplete = true;
    }


  }


}
