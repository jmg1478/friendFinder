    $(document).ready(function() {
    $("#submitButton").on("click", function(e) {
         e.preventDefault();
         
        function newForm() {
            
            var completeForm = true;
            $(".form-control").each(function() {
                if ($(this).val() === ""){
                    completeForm = false;
                }
            });
            $(".select").each(function() {
                if ($(this).val() === ""){
                    completeForm = false;
                }
            });
            return completeForm;
        }
         
        if (newForm() == true) {
             
            var newFriend = {
                name: $("#formName").val().trim(),
                // profilePic: $("#formImage").val().trim(),
                scores: [
                    $('#Q1').val(),
                    $('#Q2').val(),
                    $('#Q3').val(),
                    $('#Q4').val(),
                    $('#Q5').val(),
                    $('#Q6').val(),
                    $('#Q7').val(),
                    $('#Q8').val(),
                    $('#Q9').val(),
                    $('#Q10').val()
                ]
            };
             
            // var currentURL = window.location.origin;
             
            $.post("/api/friends", newFriend, function(data) {
                console.log(data[0]);
                // console.log(matchYourFriend)
                $(".modal-body p").text(data.name);
                // $("#matchImg").attr("src", data.photo);
                $(".modal").modal("toggle");
            });
        
            $('#formName').val("");
            // $('#formImage').val("");
            $('#Q1').val("");
            $('#Q2').val("");
            $('#Q3').val("");
            $('#Q4').val("");
            $('#Q5').val("");
            $('#Q6').val("");
            $('#Q7').val("");
            $('#Q8').val("");
            $('#Q9').val("");
            $('#Q10').val("");
           
        } else {
            alert("Please complete all fields.")
        }
        
    });
});
