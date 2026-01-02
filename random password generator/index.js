// RANDOM PASSWORD GENERATOR
function generatePassword() {
  const passwordLength = parseInt(
    document.getElementById("passwordLength").value,
    10
  );
  const includeLowerCase = document.getElementById("includeLowerCase").checked;
  const includeUpperCase = document.getElementById("includeUpperCase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;
  const result = document.getElementById("result");

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolsChars = "!@#$%^&*()_-+=";

  let allowedChars = "";
  let password = "";

  // Build allowed character set

  allowedChars += includeLowerCase ? lowercaseChars : "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";

  // validate input
  if (passwordLength <= 0) {
    result.textContent = "passwword length must be atleast 1";
    return;
  }
  if (allowedChars.length === 0) {
    result.textContent = "Atleast 1 set of character needs to be selected";
    return;
  }

  //generate password
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  result.textContent = password;
}

//Copy password to clipboard
function copyPassword() {
  const password = document.getElementById("result").textContent;
  if (!password) return;

  navigator.clipboard
    .writeText(password)
    .then(() =>
      alert("password copied to clipbard!").catch((err) =>
        alert("failed to copy password")
      )
    );
}
