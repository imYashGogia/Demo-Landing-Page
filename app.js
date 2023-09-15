function sendEmail() {
  event.preventDefault();

  // Retrieve input values
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var query = document.getElementById("query").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;

  var params = {
    fname: fname,
    lname: lname,
    query: query,
    email: email,
    number: number,
  };

  // Sending the email using EmailJS
  emailjs
    .send("service_htdz1mh", "template_9huh1x6", params)
    .then(function (response) {
      if (response.status === 200) {
        alert("Message sent successfully!");

        // Clear all fields
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("query").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
      } else {
        alert("Email could not be sent. Please try again later.");
      }
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
      alert(
        "An error occurred while sending the email. Please try again later."
      );
    });
}
