const user = localStorage.getItem("user");

if (!user) {
    window.location.href = "/login";
} else {
    try {
        const userData = JSON.parse(user);

        const welcomeText = document.querySelector(".small-text");

        if (welcomeText) {
            welcomeText.textContent = `WELCOME BACK 👋 ${userData.name}`;
        }
    } catch (error) {
        console.error("Invalid user data:", error);

        localStorage.removeItem("user");
        window.location.href = "/login";
    }
}


/* =========================
   LOGOUT
========================= */

const logoutButton = document.querySelector(".logout-btn");

if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("user");

        window.location.href = "/login";
    });
}
