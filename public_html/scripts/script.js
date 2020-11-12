console.log('is this on')

$(document).ready(function () {
    $("#contact").validate({
        debug: true,
        errorClass: "alert-danger",
        errorlabelContainer: 'output-area',
        errorElement: "div",

        rules: {
         name: {
             required: true,

         },
         email: {
             email: true,
             required: true,

         },
         message: {
             required: true,
             maxlength: 2000
         }
        },
        messages: {
            name: {
                required: "Name is a required",
            },
            email: {
                required: "is a required field",
                email: "please provide a valid email"
            },
            message:  {
                required: "message is a required field",
                maxlength: "message is too long"
            }
        },
        submitHandler: (form) => {
            $("#contact").ajaxSubmit({
                type: "POST",
                url: $("#contact").attr('action'),
                success: () => {
                    $("output-area").css("display", "")
                    $("output-area").html(ajaxOutput)
                }
            })
        }

    })
})