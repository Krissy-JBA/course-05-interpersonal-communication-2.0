pageComponentry = {
  data: function() {
    return {
      // Any page specific data goes here.
      inputfield1: '',
      inputfield2: '',
      inputfield3: '',
      inputfield4: '',
      inputfield5: '',
      inputfield6: '',
      inputfield7: '',
      inputfield8: '',
      inputfield9: '',
      inputfield10: '',
      inputfield11: '',
      answer: '',
      popup1: false,
      popup2: false,
      correct: false
    }
  },
  methods: {
    // Any page specific methods go here.
    saveInputData: function(value) {
      if ($('#test1').prop('checked')) {
        this.inputfield1 = $('#test1').val();
      }
      if ($('#test2').prop('checked')) {
        this.inputfield2 = $('#test2').val();
      }
      if ($('#test3').prop('checked')) {
        this.inputfield3 = $('#test3').val();
      }
      if ($('#test4').prop('checked')) {
        this.inputfield4 = $('#test4').val();
      }
      if ($('#test5').prop('checked')) {
        this.inputfield5 = $('#test5').val();
      }
      if ($('#test6').prop('checked')) {
        this.inputfield6 = $('#test6').val();
      }
      if ($('#test7').prop('checked')) {
        this.inputfield7 = $('#test7').val();
      }
      if ($('#test8').prop('checked')) {
        this.inputfield8 = $('#test8').val();
      }
      if ($('#test9').prop('checked')) {
        this.inputfield9 = $('#test9').val();
      }
      if ($('#test10').prop('checked')) {
        this.inputfield10 = $('#test10').val();
      }
      if ($('#test11').prop('checked')) {
        this.inputfield11 = $('#test11').val();
      }
      this.answer = this.inputfield1 + this.inputfield2 + this.inputfield3 + this.inputfield4 + this.inputfield5 + this.inputfield6 + this.inputfield7 + this.inputfield8 + this.inputfield9 + this.inputfield10 + this.inputfield11;
      this.$parent.saveData('whatisVerbalComm', this.answer);

      if ($('#test5').prop('checked')) {
        if (
            ($('#test1').prop('checked') == true) || ($('#test2').prop('checked') == true) || ($('#test3').prop('checked') == true) || ($('#test4').prop('checked') == true) || ($('#test6').prop('checked') == true) || ($('#test7').prop('checked') == true) || ($('#test8').prop('checked') == true) || ($('#test9').prop('checked') == true) || ($('#test10').prop('checked') == true) || ($('#test11').prop('checked') == true)
        ) {
          this.correct = false;
        }
        else {
          this.correct = true;
        }
      } else {
        this.correct = false;
      }
    },
    answerPopup: function() {
      if(this.exerciseData['whatisVerbalComm']){
        $('.pop-in').addClass('popOut');
        setTimeout(function(){window.location.hash = '062';},400);
      }
      else {
        if(this.correct == true) {
          this.popup2 = true;
        }
        else {
          this.popup1 = true;
        }
     }

    },
    redirect: function() {
      $('.pop-in').addClass('popOut');
      setTimeout(function(){window.location.hash = '062';},400);
    }
  },
  ready: function() {
    courseFeatureJBA.transitionIn(); courseFeatureJBA.flexySpeckCheck();
    if(this.exerciseData['whatisVerbalComm']){
      $('#test5').prop('checked', true);
      this.correct = true;

    }


  }


}
