(function(){
        angular
            .module("quiz")
            .controller("quizController" , quizController)
            quizController.$inject = ['quizMetrics' , 'DataService'];
            function quizController(quizMetrics , DataService) {
              var vm = this ;
              vm.dataService = DataService;
              vm.quizMetrics = quizMetrics;
              vm.questionAnswered = questionAnswered;
              vm.setActiveQuestion = setActiveQuestion;
              vm.activeQuestion = 0;
              vm.selectAnswer = selectAnswer;
              vm.finalizeQuiz = finalizeQuiz;
              var numQuestionsAnswered = 0;
              vm.error = false;
              vm.finalize = false;

              function setActiveQuestion(index){
                if(index === undefined)
                {
                  var breakOut = false;
                  var quizLength = DataService.quizQuestions.length - 1;

                  while (!breakOut) {
                    vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
                    if(vm.activeQuestion === 0)
                    {
                      vm.error = true;
                    }

                    if(DataService.quizQuestions[vm.activeQuestion].selected === null){
                      breakOut = true;
                    }
                  }
                }
                else{
                  vm.activeQuestion = index;
                }

              }

              function questionAnswered() {
                  var quizLength = DataService.quizQuestions.length;
                  if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
                    numQuestionsAnswered++;
                    if(numQuestionsAnswered >= quizLength){
                      //final
                      for(var i = 0;i < quizLength ; i++){
                        if(DataService.quizQuestions[i].selected === null){
                          vm.setActiveQuestion(i);
                          return;
                        }
                        vm.error = false;
                        vm.finalize = true;
                        return;
                      }
                    }

                  }
                  vm.setActiveQuestion();
              }
              function selectAnswer(index){
                DataService.quizQuestions[vm.activeQuestion].selected = index;

              }

              function finalizeQuiz(){
                vm.finalise = false;
                numQuestionsAnswered = 0;
                vm.activeQuestion = 0;
                quizMetrics.markQuiz();
                quizMetrics.changeState("quiz" , false);
                quizMetrics.changeState("results" , true);

              }

            }
})();
