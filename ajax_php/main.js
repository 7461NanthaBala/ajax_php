    $(function() {
      var $name = $("#name");
      var $age = $("#age");
    
      $("#btn").on("click", function() {
        var stud = {
          name: $name.val(),
          age: $age.val(),
        };
        // console.log(stud);
          $.ajax({
          type: 'POST',
          url: 'save.php',
          data: stud,
          success: function(stud) {
            // console.log("data");
            alert("Thanks!"); },
            error: function() {
            alert("Error!");
          }
        });
      }); 
      $.ajax({
        type: "GET",
        url: "file.json",
        // data: value ,
        success: function(response) {
          // console.log(response[0].age);
          // console.log(response[1].age);

          $.each(response, function(i, item) {
            // console.log("saved");
            // console.log("yy");
            // console.log(i);
             console.log(item.age);
            // console.log(response[i].age);
            console.log(response[i].name);

            if(response[i].name=="" &&  response[i].age==item.age)
            {
            var tn=item.name;
            // alert(tn);
            console.log("saved");
            console.log(i);
            console.log(tn);
            }
            else {
              console.log("if not");
            }
          });
         
          console.log(response);
          
          // console.log("saved");
        },
        error: function() {
          alert("error occured");
        }
      }); 
    });

    //  function loadDoc() {
    //   $("#edit_btn").on("click", function() {
    //   var ourReq= new XMLHttpRequest();
    //   ourReq.open('GET','file.json');
    //   ourReq.onload = function()
    //   {
    //       var ourData = JSON.parse(ourReq.responseText);
    //       console.log(ourData);
          
    //     };
    //   ourReq.send();
    //   });
    // }