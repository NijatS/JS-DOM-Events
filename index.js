const emailRegister = document.querySelector("#emailRegister");
const passwordRegister = document.querySelector("#passwordRegister");
const passwordConfirm = document.querySelector("#passwordConfirm");
const registerButton = document.querySelector("#register");

const tableBody = document.querySelector("tbody");

const emailLogin = document.querySelector("#emailLogin");
const passwordLogin = document.querySelector("#passwordLogin");
const loginButton = document.querySelector("#login");
const infoLogin = document.querySelector("h2");

let users = [];
registerButton.addEventListener("click", () => {
  infoLogin.textContent = "";
  if (
    Checker(emailRegister) &&
    Checker(passwordRegister) &&
    Checker(passwordConfirm) &&
    passwordRegister.value == passwordConfirm.value
  ) {
    const newTrItem = document.createElement("tr");
    newTrItem.innerHTML = `<td>${emailRegister.value}</td>
    <td>${passwordRegister.value}</td>`;
    tableBody.append(newTrItem);
    emailRegister.value = "";
    passwordRegister.value = "";
    passwordConfirm.value = "";
    users.push({
      email: emailRegister.value.trim(),
      password: passwordRegister.value.trim(),
    });
  }
});
console.log(users);
loginButton.addEventListener("click", () => {
  infoLogin.textContent = "Not Logged In";
  for (const user of users) {
    if (
      emailLogin.value.trim() == user.email &&
      passwordLogin.value.trim() == user.password
    ) {
      emailLogin.value = "";
      passwordLogin.value = "";
      infoLogin.textContent = "Logged In";
    }
  }
});

function Checker(data) {
  if (data.value.trim()) return true;
  return false;
}
