// js email
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
      // alert("Email Sent!!");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your email has been sent",
        showConfirmButton: false,
        timer: 1500,
      });
      document.getElementById("contact-form").reset(); // Reset form setelah pengiriman
    })
    .catch((error) => {
      console.error("Error sending email: ", error);
      // alert("Failed to send email.");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error sending email",
        showConfirmButton: false,
        timer: 1500,
      });
    });
}

// Menambahkan event listener pada form submit
document.getElementById("contact-form").addEventListener("submit", sendMail);
