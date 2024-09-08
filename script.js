function sendMail(event) {
  event.preventDefault(); // Mencegah halaman reload

  // Mengambil nilai input dari form
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("pesan").value,
  };

  // Mengirim email melalui EmailJS
  emailjs
    .send("service_zjnpbkd", "template_4tfckqw", parms)
    .then(() => {
      alert("Email Sent!!");
      document.getElementById("contact-form").reset(); // Reset form setelah pengiriman
    })
    .catch((error) => {
      console.error("Error sending email: ", error);
      alert("Failed to send email.");
    });
}

// Menambahkan event listener pada form submit
document.getElementById("contact-form").addEventListener("submit", sendMail);
