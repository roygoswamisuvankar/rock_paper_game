$(document).ready(function(){
    var user = prompt("Enter your name");
    var count = 0;
    var count1 = 0;
    var com_ch;
    $("#com_po").css({
      'color' : 'red'
    });
    $("#user_po").css({
      'color' : 'red'
    });
    $("#user_name").html(user);
    $("#enter").click(function(){
      var user_input = $("#inp").val();
      var random_ch = Math.floor(Math.random()*3);
      console.log(random_ch);
      var user_inp = user_input.toLowerCase();
      console.log(user_inp);
      if(user_inp.toLowerCase() == "rock" || user_inp.toLowerCase() == "paper" || user_inp.toLowerCase() == "scissors"){
          if(random_ch == 0){
          com_ch = "rock"
          console.log(com_ch);
            if(com_ch == user_inp){
              console.log("tie");
              alert("Computer : "+com_ch+"  "+user+" :"+user_inp+"\nOh! No! Tie!");
            }else{
              if(com_ch == "rock" && user_inp == "paper" || com_ch == "rock" && user_inp == "scissors" || com_ch == "scissors" && user_inp == "paper"){
                console.log("you loose");
                alert("Computer : "+com_ch+"  "+user+": "+user_inp+"\nOH! No... You Loose ");
                count++;
                console.log(count);
                $("#com_po").html(count);
              }
              if(com_ch == "paper" && user_inp == "rock" || com_ch == "paper" && user_inp == "scissors" || com_ch == "scissors" && user_inp == "rock"){
                console.log("You win");
                alert("Computer : "+com_ch+"  "+user+": "+user_inp+"\nHurray!!! You Win ");
                count1++;
                console.log(count1);
                $("#user_po").html(count1);
              }
            }
        }
        else if(random_ch == 1){
          com_ch = "paper";
          console.log(com_ch);
           if(com_ch == user_inp){
              console.log("tie");
             alert("Computer : "+com_ch+"  "+user+": "+user_inp+"\nOh! No! Tie!");
            }else{
              if(com_ch == "rock" && user_inp == "paper" || com_ch == "rock" && user_inp == "scissors" || com_ch == "scissors" && user_inp == "paper"){
                console.log("you loose");
                alert("Computer : "+com_ch+"  "+user+": "+user_inp+"\nOH! No... You Loose ");
                count++;
                console.log(count);
                $("#com_po").html(count);
              }
              if(com_ch == "paper" && user_inp == "rock" || com_ch == "paper" && user_inp == "scissors" || com_ch == "scissors" && user_inp == "rock"){
                console.log("You win");
                alert("Computer : "+com_ch+"  "+user+" : "+user_inp+"\nHurray !!! You Win ");
                count1++;
                console.log(count1);
                $("#user_po").html(count1);
              }
            }
          
        }else if(random_ch == 2){
          com_ch = "scissors";
          console.log(com_ch);
           if(com_ch == user_inp){
              console.log("tie");
             alert("Computer : "+com_ch+"  "+user+": "+user_inp+"\nOh! No! Tie!");
            }else{
              if(com_ch == "rock" && user_inp == "paper" || com_ch == "rock" && user_inp == "scissors" || com_ch == "scissors" && user_inp == "paper"){
                console.log("you loose");
                alert("Computer : "+com_ch+"  "+user+" : "+user_inp+"\nOH! No... You Loose ");
                count++;
                console.log(count);
                $("#com_po").html(count);
              }
              if(com_ch == "paper" && user_inp == "rock" || com_ch == "paper" && user_inp == "scissors" || com_ch == "scissors" && user_inp == "rock"){
                console.log("You win");
                alert("Computer : "+com_ch+"  "+user+" : "+user_inp+"\nHurray!!! You Win!");
                count1++;
                console.log(count1);
                $("#user_po").html(count1);
              }
            }
          
        }else{
          console.log("error");
          alert("Error");
        }
      }else{
        console.log("You entered wrong input");
        alert("You input wrong")
      }
    });
  });
  /*Reload Function*/
  $(document).ready(function(){
      $("#reload").click(function(){
        location.reload();
      })
  });