
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");


/* =========================
   REGISTER
========================= */

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

        try {
            const response = await fetch("/api/register", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(userData),
            });

            const data = await response.json();

            console.log("Register response:", data);

            if (!response.ok) {
                alert(data.message || "Registration failed");
                return;
            }

            alert("Registration successful");

            registerForm.reset();

            window.location.href = "/login";

        } catch (error) {
            console.error("Register error:", error);

            alert("Unable to connect to server");
        }
    });
}


/* =========================
   LOGIN
========================= */

if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const loginData = {
            email,
            password,
        };

        try {
            const response = await fetch("/api/login", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            console.log("Login response:", data);

            if (!response.ok) {
                alert(data.message || "Login failed");
                return;
            }

            // Store logged-in user
            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            alert("Login successful");

            window.location.href = "/home";

        } catch (error) {
            console.error("Login error:", error);

            alert("Unable to connect to server");
        }
    });
}
