function sendMail() {
    var params = {
        from_name: document.getElementById("f_name").value,
        email_id: document.getElementById("email_id").value,
        phone_number: document.getElementById("phone_no").value,
        message: document.getElementById("message_id").value,
    };

    const success = document.getElementById("success");
    const empty = document.getElementById("empty");

    if (params.from_name === "" || params.email_id === "" || params.phone_number === "" || params.message === "") {

        empty.style.display = "block"

        setTimeout(() => {
            empty.style.display = "none";
        }, 5000);

        

    }
    else {

        emailjs.send("service_kavizp8", "template_sx9uf58", params).then(function (res) {

            success.style.display = "block"

            setTimeout(() => {
                success.style.display = "none";
            }, 5000);

            // Clear the input fields after successful email send
            document.getElementById("f_name").value = "";
            document.getElementById("email_id").value = "";
            document.getElementById("phone_no").value = "";
            document.getElementById("message_id").value = "";
        }).catch(function (error) {
            alert("Failed to send email: " + error);
        });

    }

}