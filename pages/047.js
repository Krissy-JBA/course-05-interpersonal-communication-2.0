pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      module1: false,
      module2:false,
      modulesComplete: false
    }
  },
  methods: {
    // Any page specific methods go here.
    prevButton: function() {
      if ((this.module1 == false) && (this.module2 == false)) {
        window.location.hash = '046'
      }
      else if ((this.module1 == true) && (this.module2 == false)) {
        window.location.hash = '049'
      }
      else if ((this.module1 == true) && (this.module2 == true)) {
        window.location.hash = '054'
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    console.log(this.exerciseData['page.max']);
    var currentPage = this.exerciseData['page.max']
    if (currentPage >= 48) {
      this.module1 = true;
    }
    if (currentPage >= 54) {
      this.module2 = true;
    }
    if((this.module1 == true) && (this.module2 == true)) {
      this.modulesComplete = true;
    }



  }


}
