const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const userData = {
      name,
      email,
      password,
    };
  });

  try {
    const response = await fetch("http://localhost:3000/api/register",{
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body:JSON.stringify()(userData),
    });

    const data = await response.json();

    console.log("register response", data);

 if (!response.ok) {
    alert(data.message|| "registration failed")
    return
    
 }


 alert("Registrarion successful")

 registerForm.reset()

 window.location.href="../pages/login.html"

  } catch (error) {

    console.log("register error",error);
    
    alert(" Unable to connect to server")
  }
}
