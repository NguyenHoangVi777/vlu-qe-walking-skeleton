function login(username, password) {
    return username === "admin" && password === "123";
}

// Xử lý form đăng nhập
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const result = document.getElementById("result");

        if (login(username, password)) {
            result.textContent = "Đăng nhập thành công!";
        } else {
            result.textContent = "Sai username hoặc password!";
        }
    });
}

// Cho Jest sử dụng hàm login
if (typeof module !== "undefined") {
    module.exports = { login };
}
