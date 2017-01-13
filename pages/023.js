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
