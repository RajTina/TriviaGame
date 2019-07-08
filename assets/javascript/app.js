   
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

        question:"What is the national flower of Bangladesh?",
        answers:["Africa","Asia","Water lily"],
        correctAnswer: "Asia"
    },{

        question:"On which continent is Bangladesh located?",
        answers:["Africa","Asia","Europe"],
        correctAnswer: "Asia"
    }, {

        question:"On which continent is Bangladesh located?",
        answers:["Africa","Asia","Europe"],
        correctAnswer: "Asia"
    }, {

        question:"On which continent is Bangladesh located?",
        answers:["Africa","Asia","Europe"],
        correctAnswer: "Asia"
    },{

        question:"On which continent is Bangladesh located?",
        answers:["Africa","Asia","Europe"],
        correctAnswer: "Asia"
    }, {

        question:"On which continent is Bangladesh located?",
        answers:["Africa","Asia","Europe"],
        correctAnswer: "Asia"
    },{

        question:"On which continent is Bangladesh located?",
        answers:["Africa","Asia","Europe"],
        correctAnswer: "Asia"
    }];
    var game = {
        correct: 0,
        wrong: 0,
        counter:120,
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
        $("#subContainer").prepend('<h2> Time Remaining:<span id = "counter"> 120 </span>Seconds</h2>');
            $("#start").remove();
            for (var i = 0;i<questions.length;i++){
                $('#subContainer').append("<h2>" + questions[i].question+"<h2>")
                for (var j = 0;j<questions[i].answers.length;j++ ){
                    $("#subContainer").append ("<input type = 'radio' name='question-" + i +"' value ='" + questions[i].answers[j] +"'>"+questions[i].answers[j])
        
                }
            }
        
            $('#subContainer').append('<br><button id = "end">DONE</button>')
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
             $("#subContainer").html("<h2>All done!</h2>");
             $("#subContainer").append("<h3>Correct Answers:"+this.correct+"</h3>");
             $("#subContainer").append("<h3>Wrong Answers:"+this.wrong+"</h3>");
             $("#subContainer").append("<h3>Unanswered:" + (questions.length-(this.wrong+this.correct))+'</h3>');

          }
          
    }

   })



