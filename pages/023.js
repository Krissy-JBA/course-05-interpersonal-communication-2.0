pageComponentry = {
    data: function() {
        return {
            // Any page specific data goes here.
            module1: false,
            module2: false,
            module3: false,
            modulesComplete: false
        }
    },
    methods: {
        // Any page specific methods go here.
        prevButton: function() {
            if ((this.module1 == false) && (this.module2 == false) && (this.module3 == false)) {
                $('.pop-in').addClass('popOut');
                setTimeout(function() {
                    window.location.hash = '022';
                }, 400);
            } else if ((this.module1 == true) && (this.module2 == false) && (this.module3 == false)) {
                $('.pop-in').addClass('popOut');
                setTimeout(function() {
                    window.location.hash = '026';
                }, 400);
            } else if ((this.module1 == true) && (this.module2 == true) && (this.module3 == false)) {
                $('.pop-in').addClass('popOut');
                setTimeout(function() {
                    window.location.hash = '038';
                }, 400);
            } else if ((this.module1 == true) && (this.module2 == true) && (this.module3 == true)) {
                $('.pop-in').addClass('popOut');
                setTimeout(function() {
                    window.location.hash = '040';
                }, 400);
            }
        }
    },
    ready: function() {
        courseFeatureJBA.transitionIn();
        courseFeatureJBA.flexySpeckCheck();
        var currentPage = this.exerciseData['page.max']
        if (currentPage >= 26) {
            this.module1 = true;
        }
        if (currentPage >= 37) {
            this.module2 = true;
        }
        if (currentPage >= 39) {
            this.module3 = true;
        }
        if ((this.module1 == true) && (this.module2 == true) && (this.module3 == true)) {
            this.modulesComplete = true;
        }


    }


}
