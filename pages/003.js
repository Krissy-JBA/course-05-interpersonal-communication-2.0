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
    backButton: function() {
      if ((this.module2 == false) && (this.module3 == false) && (this.module4 == false) && (this.module5 == false) && (this.modulesComplete == false) ){
        $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '002';},400);
      }
      if ((this.module2 == true) && (this.module3 == false) && (this.module4 == false) && (this.module5 == false) && (this.modulesComplete == false) ){
        $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '020';},400);
      }
      else if ((this.module2 == true) && (this.module3 == true) && (this.module4 == false) && (this.module5 == false) && (this.modulesComplete == false) ) {
        $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '045';},400);
      }
      else if ((this.module2 == true) && (this.module3 == true) && (this.module4 == true) && (this.module5 == false) && (this.modulesComplete == false) ) {
        $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '058';},400);
      }
      else if ((this.module2 == true) && (this.module3 == true) && (this.module4 == true) && (this.module5 == true) && (this.modulesComplete == false)) {
        $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '071';},400);
      }
      else if ((this.module2 == true) && (this.module3 == true) && (this.module4 == true) && (this.module5 == true) && (this.modulesComplete == true)) {
        $('.pop-in').addClass('popOut');
setTimeout(function(){window.location.hash = '097';},400);
      }
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
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
    if (currentPage >= 70) {
      this.module5 = true;
    }
    if (currentPage >= 97){
      this.modulesComplete = true;
    }

  }


}
