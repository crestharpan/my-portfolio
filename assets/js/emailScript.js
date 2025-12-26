document.getElementById("button").addEventListener("click", function (e) {
  e.preventDefault();
  sendMail();
});

function sendMail() {
  console.log("I am here");

  let params = {
    name: document.getElementById("name").value,
    reply_to: document.getElementById("mail").value,
    subject: document.getElementById("subject").value,
    text: document.getElementById("text").value,
  };

  try {
    emailjs.send("service_gvhxi51", "template_ypfvn3m", params).then(() => {
      alert("Your Email was successfully sent!");
      document.getElementsByClassName("contact-form")[0].reset();
      document.getElementsByClassName("contact-form")[1].reset();
      document.getElementsByClassName("contact-form")[2].reset();
    }); // ✅ clear all fields);
  } catch (err) {
    alert("Error on sneding mail");
  }
}
