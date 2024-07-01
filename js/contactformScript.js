// function sendMail(){
//     var params ={
//         from_name : document.getElementById("f_name").value,
//         email_id : document.getElementById("email_id").value,
//         phone_number: document.getElementById("phone_no").value,
//         message: document.getElementById("message_id").value,
//     }

//     emailjs.send("service_kavizp8" , "template_sx9uf58", params).then(function (res){
//         alert("success!" + res.status);
//     })


// }

function sendMail() {
    var params = {
        from_name: document.getElementById("f_name").value,
        email_id: document.getElementById("email_id").value,
        phone_number: document.getElementById("phone_no").value,
        message: document.getElementById("message_id").value,
    };

    emailjs.send("service_kavizp8", "template_sx9uf58", params).then(function (res) {
        alert("Message has been sent succesfully" + res.status);

        // Clear the input fields after successful email send
        document.getElementById("f_name").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("phone_no").value = "";
        document.getElementById("message_id").value = "";
    }).catch(function (error) {
        alert("Failed to send email: " + error);
    });
}