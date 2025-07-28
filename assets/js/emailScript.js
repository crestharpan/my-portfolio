function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("mail").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("text").value,
  };
  emailjs
    .send("service_gvhxi51", "template_ypfvn3m", params)
    .then(alert("Your Email was successfully sent!"));
}
