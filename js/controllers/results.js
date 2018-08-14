(function () {
   angular
          .module("quiz")
          .controller("resultsCtrl" , ResultsController);
          ResultsController.$inject = ['quizMetrics' , 'DataService'];
          function ResultsController(quizMetrics , DataService) {
             var vm = this;
             vm.quizMetrics = quizMetrics;
             vm.dataService = DataService;
             vm.getAnswerClass = getAnswerClass ;
             vm.setActiveQuestion = setActiveQuestion;
             vm.activeQuestion = 0;
             vm.calcPercent = calcPercent;
             vm.reset = reset;
             function calcPercent() {
                return quizMetrics.numCorrect / DataService.quizQuestions.length * 100 ;
             }

             function getAnswerClass(index) {
                if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
                   return "bg-success";
                }else if (index === DataService.quizQuestions[vm.activeQuestion].selected) {
                    return "bg-danger";
                }

                }

                function setActiveQuestion(index) {
                  vm.activeQuestion = index;

                }

                function reset() {

                  quizMetrics.changeState("results" , false);
                  quizMetrics.numCorrect = 0;


                  for( var i = 0; i<DataService.quizQuestions.length ; i++){
                      var data = DataService.quizQuestions[i];

                      data.selected = null;
                      data.correct = null;

                  }

                }
             }


})();
