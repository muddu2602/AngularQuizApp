(function () {
    angular
          .module("quiz")
          .controller("quizCtrl" , ListControler );
          ListControler.$inject = ['quizMetrics' , 'DataService'];
            function ListControler(quizMetrics , DataService) {
              var vm = this ;
              vm.quizMetrics = quizMetrics;
              vm.data = DataService.earPhones;
              vm.activeEarphone = {};
              vm.activeEarphoneInfo = activeEarphoneInfo ;
              vm.activeQuiz = activeQuiz ;
              vm.search="";
              vm.ctrl = false;

              function activeEarphoneInfo(index){
                  vm.activeEarphone = index;
              }

              function activeQuiz(){
                quizMetrics.changeState( "quiz" ,true);
              }


            }



})();
