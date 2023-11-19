const clearDisplay = () => {
  document.querySelector("#display").value = "";
};

const backSpace = () => {
  const num = document.querySelector("#display").value.slice(0, -1);
  document.querySelector("#display").value = num;
};

const appendInput = (number) => {
  document.querySelector("#display").value = document.querySelector(
    "#display"
  ).value += number;
};

const calculate = () => {
  document.querySelector("#display").value = eval(
    document.querySelector("#display").value
  );
};

const xSquare = () => {
  document.querySelector("#display").value = Math.pow(
    eval(document.querySelector("#display").value),
    2
  );
};

const xSquareRoot = () => {
  document.querySelector("#display").value = Math.sqrt(
    eval(document.querySelector("#display").value)
  );
};

const divideX = () => {
  document.querySelector("#display").value =
    1 / eval(document.querySelector("#display").value);
};

const sinX = () => {
  document.querySelector("#display").value = Math.sin(eval(
    document.querySelector("#display").value)
  );
};

const cosX = () => {
  document.querySelector("#display").value = Math.cos(eval(
    document.querySelector("#display").value)
  );
};

const tanX = () => {
  document.querySelector("#display").value = Math.tan(eval(
    document.querySelector("#display").value)
  );
};

const logX = () => {
  document.querySelector("#display").value = Math.log10(eval(
    document.querySelector("#display").value)
  );
};

const onInputChange = (keyEvent) => {
  keyEvent.preventDefault();
  const regex = /[0-9\+\-\*\/\.\%\^]/;

  switch (keyEvent.key) {
    case "Enter":
      calculate();
      break;
    case "Backspace":
      backSpace();
      break;
    case "s":
      xSquare();
      break;
    case "r":
      xSquareRoot();
      break;
    case "d":
      divideX();
      break;
    case "c":
      clearDisplay();
      break;
    default:
      if (regex.test(keyEvent.key)) {
        appendInput(keyEvent.key);
      }
      break;
  }
};
document.querySelector("#display").addEventListener("keypress", onInputChange);

const changeTheme = () => {
  const theme = document.querySelector("html").getAttribute("data-bs-theme");

  document
    .querySelector("html")
    .setAttribute("data-bs-theme", theme === "dark" ? "light" : "dark");
};