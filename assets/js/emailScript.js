const form = document.getElementById("contact-form");

const userName = document.getElementById("name");
const email = document.getElementById("mail");
const subject = document.getElementById("subject");
const text = document.getElementById("text");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  sendMail();
});

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    reply_to: document.getElementById("mail").value,
    subject: document.getElementById("subject").value,
    text: document.getElementById("text").value,
  };

  try {
    emailjs.send("service_gvhxi51", "template_ypfvn3m", params).then(() => {
      alert("Your Email was successfully sent!");
      userName.value = "";
      email.value = "";
      subject.value = "";
      text.value = "";
    }); // ✅ clear all fields);
  } catch (err) {
    alert("Error on sneding mail");
  }
}
