pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      module1: false,
      module2:false,
      module3:false,
      module4:false,
      module5:false,
      modulesComplete: false
    }
  },
  methods: {
    // Any page specific methods go here.
  },
  ready: function() {
    courseFeatureJBA.transitionIn();
    var currentPage = this.exerciseData['page.max']
    if (currentPage >= 20) {
      this.module2 = true;
    }
    if (currentPage >= 44) {
      this.module3 = true;
    }
    if (currentPage >= 58) {
      this.module4 = true;
    }
    /*if (currentPage >= 87){
      this.module3 = true;
    }

    if (currentPage >= 94){
      this.modulesComplete = true;
    }*/

  }


}
