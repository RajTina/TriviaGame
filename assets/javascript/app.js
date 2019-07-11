   
   $(document).ready(function(){
   $('#start').on('click',function(){
        game.start();
    })

    $(document).on('click','#end',function(){
        game.done();
    })
    var questions =[{
        question:"On which continent is Bangladesh located?",
        answers:["Africa","Asia","Europe"],
        correctAnswer: "Asia"
    }, {

        question:"On which continent is USA located?",
        answers:["South America","Africa","North America"],
        correctAnswer: "North America"
    },{

        question:"What year did USA finally become independent?",
        answers:["1778","1779","1776"],
        correctAnswer: "1776"
    }, {

        question:"What year did Bangladesh finally become independent?",
        answers:["1971","1947","1942"],
        correctAnswer: "1971"
    }, {

        question:"Why did Bangladesh fight for independence?",
        answers:["For land","For fame","For language"],
        correctAnswer: "For language"
    },{

        question:"Why did USA fight for independence?",
        answers:["For unreasonable prices","For Fame","Taxation without representation"],
        correctAnswer: "Taxation without representation"
    }, {

        question:"What is the capital of Bangladesh ?",
        answers:["Delhi","Dhaka","London"],
        correctAnswer: "Dhaka"
    },{

        question:"What is the capital of USA?",
        answers:["New York","Washington DC","Atlanta"],
        correctAnswer: "Washington DC"
    }];
    var game = {
        correct: 0,
        wrong: 0,
        counter:80,
        countdown : function(){
            game.counter--;
            $("#counter").html(game.counter);
            if (game.counter <=0){
                console.log("Time is up!");
                game.done();

            }
        },
    start: function (){
        timer=setInterval(game.countdown,1000);
        $("#subContainer").prepend('<h2> Time Remaining:<span id = "counter"> 80 </span>Seconds</h2>');
            $("#start").remove();
            for (var i = 0;i<questions.length;i++){
                $('#subContainer').append("<h2>" + questions[i].question+"<h2>")
                for (var j = 0;j<questions[i].answers.length;j++ ){
                    $("#subContainer").append ("<input type = 'radio' name='question-" + i +"' value ='" + questions[i].answers[j] +"'>"+questions[i].answers[j])
                  
                }
            }
        
            $('#subContainer').append('<br><br><button id = "end">DONE</button>')
    },
    done : function(){
        $.each($("input[name ='question-0']:checked"),function(){
            if ($(this).val()==questions[0].correctAnswer){
                    game.correct++;
                }  else{
                    game.wrong++;

                }

        });
        $.each($('input[name ="question-1"]:checked'),function(){
            if ($(this).val()==questions[1].correctAnswer){
                game.correct++;
            }  else{
                game.wrong++;

            }

        });
        $.each($('input[name ="question-2"]:checked'),function(){
            if ($(this).val()==questions[2].correctAnswer){
                game.correct++;
            }  else{
                game.wrong++;

            }

        });
        $.each($('input[name ="question-3"]:checked'),function(){
            if ($(this).val()==questions[3].correctAnswer){
                game.correct++;
            }  else{
                game.wrong++;

        }

        });
        $.each($('input[name ="question-4"]:checked'),function(){
        if ($(this).val()==questions[4].correctAnswer){
            game.correct++;
        }  else{
            game.wrong++;

            }
            
        });
        $.each($('input[name ="question-5"]:checked'),function(){
            if ($(this).val()==questions[5].correctAnswer){
                game.correct++;
            }  else{
                game.wrong++;

        }

        });
        $.each($('input[name ="question-6"]:checked'),function(){
            if ($(this).val()==questions[6].correctAnswer){
                game.correct++;
            }  else{
                game.wrong++;

                }
            
        });
        $.each($('input[name ="question-7"]:checked'),function(){
            if ($(this).val()==questions[7].correctAnswer){
                game.correct++;
            }  else{
                game.wrong++;

                }
            
        });
        $.each($('input[name ="question-8"]:checked'),function(){
            if ($(this).val()==questions[8].correctAnswer){
                game.correct++;
            }  else{
                game.wrong++;
        
                }
                
        });
         this.result();
          },

         result:function(){
             clearInterval(timer);
             $("#subContainer h2").remove();
             $("#subContainer").html("<h2 class='endGame'>All done!</h2>");
             $("#subContainer").append("<h3 class='endGame'>Correct Answers:"+this.correct+"</h3>");
             $("#subContainer").append("<h3 class='endGame'>Wrong Answers:"+this.wrong+"</h3>");
             $("#subContainer").append("<h3 class='endGame'>Unanswered:" + (questions.length-(this.wrong+this.correct))+'</h3>');
             $('#subContainer').append("<button type='button' id='resetBtn'> RESET </button>");

            $('#resetBtn').on("click", function() {
                $("#subContainer .endGame").remove();
                $("#resetBtn").remove();
                game.correct = 0;
                game.wrong=0;

                game.counter = 80;
            
                game.start();
            })
          }

    }

   })



