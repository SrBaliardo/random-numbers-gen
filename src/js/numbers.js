const form = document.querySelector(".form-roll");
const formBg = document.querySelector(".form-bg");
const result = document.querySelector(".results");
const min = document.querySelector(".input-min");
const max = document.querySelector(".input-max");
const qtd = document.querySelector(".input-qtd");

function validateForm() {
  const minN = Number(min.value);
  const maxN = Number(max.value);
  const qtdN = Number(qtd.value);

  if (!min.value || !max.value || !qtd.value) {
    alert("Todos os campos devem ser preenchidos.");
    hiddenForm();
    return false;
  }

  if (minN >= maxN) {
    alert("O número mínimo deve ser menor que o número máximo.");
    hiddenForm();
    return false;
  }

  if (maxN - minN + 1 < qtdN) {
    alert("A quantidade de sorteios não pode exceder o intervalo de números.");
    hiddenForm();
    return false;
  }

  return true;
}

function generateNumber() {
  if (!validateForm()) {
    return;
  }

  const minN = Number(min.value);
  const maxN = Number(max.value);
  const qtdN = Number(qtd.value);
  const numberDraw = new Set();

  result.innerHTML = "";

  for (let i = 0; i < qtdN; i++) {
    let numberGen = Math.floor(Math.random() * (maxN - minN + 1) + minN);
    while (numberDraw.has(numberGen)) {
      numberGen = Math.floor(Math.random() * (maxN - minN + 1) + minN);
    }

    numberDraw.add(numberGen);

    const resultsP = document.createElement("div");
    resultsP.classList.add("result");
    resultsP.innerText = numberGen;

    result.appendChild(resultsP);
  }
}

async function toSpinDraw() {
  if (!validateForm()) {
    return;
  }

  const minN = Number(min.value);
  const maxN = Number(max.value);

  for (let j = 0; j < 30; j++) {
    result.innerHTML = "";
    const numberGen = Math.floor(Math.random() * (maxN - minN + 1) + minN);

    const resultsP = document.createElement("div");
    resultsP.classList.add("result");
    resultsP.innerText = numberGen;

    result.appendChild(resultsP);

    await wait(100, generateNumber());
  }
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function viewForm() {
  form.style.visibility = "visible";
  formBg.style.visibility = "visible";
}

function hiddenForm() {
  result.innerHTML = "";
  form.style.visibility = "hidden";
  formBg.style.visibility = "hidden";
  min.value = "";
  max.value = "";
  qtd.value = "";
}
