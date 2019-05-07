import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
 

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  head = 'my App';

  
}

$(function(){
  $("#add").on("click", function(){
       var val = $("input").val();
         if(val !== ''){
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class='remove' type='radio'>X</button>");
            $("#myList").append(elem);
            $("input").val("");
          }
  });  
});

/*
user = 'user';

  users = [
    {
      name: 'alice',
      age: 32
    }, 
    {
      name: 'bob',
      age: 27
    },
    {
      name: 'john',
      age: 21
    }
  ];

  /*ageUser() {
    return 26;
  }*/