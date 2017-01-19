pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      pageReload: false,
      correct: false,
      popup1: false,
      popup2: false,
      popup3: false,
      count: 0
    }
  },
  methods: {
    // Any page specific methods go here.
    submitMe: function() {
      var sorts = $('#sortable li');
      if (this.pageReload == true) {
        window.location.hash = '083';
      }
      else {
        this.count ++;
        console.log(this.count);

        if($(sorts[0]).hasClass('one') && $(sorts[1]).hasClass('two') && $(sorts[2]).hasClass('three') && $(sorts[3]).hasClass('four') ) {
          this.correct = true;
          this.popup1 = true;
          this.pageReload = true;
        }
        else {
          if (this.count >= 3) {
            this.popup2 = true;
            this.correct = true;
            this.pageReload = true;
          }
          else if (this.count < 3) {
            this.popup3 = true;
            this.correct = false;
          }
        }
        this.$parent.saveData('answerMe6', this.correct);
      }

    },
    redirectMe: function(){
      window.location.hash = '083';
    }
  },
  ready: function() {
      var self = this;
      courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();

      $("#sortable" ).sortable();
      $("#sortable" ).disableSelection();

       var self = this;



       if(this.exerciseData['answerMe6'] === true || this.exerciseData['answerMe6'] === 'true') {
         this.pageReload = true;
       }
     }








}
