const form = document.querySelector('.form-roll')
const formBg = document.querySelector('.form-bg')
const result = document.querySelector('.results')
const inputs = document.querySelector('.inputs')
const min = document.querySelector('.input-min')
const max = document.querySelector('.input-max')
const qtd = document.querySelector('.input-qtd')

function generateNumber() {
    const minN = Number(min.value)
    const maxN = Number(max.value)
    const qtdN = Number(qtd.value)
    const numberDraw = new Set()

    if (minN >= maxN) {
        alert("O número mínimo tem que ser maior que o número maximo.");
        return;
    }

    if ((maxN - minN + 1) < qtdN) {
        alert("A quantidade de sorteios não pode exceder o intervalo de números");
        return;
    }

    result.innerHTML = ''

    for (let i = 0; i < qtdN; i++) {
        let numberGen = Math.floor(Math.random() * (maxN - minN + 1) + minN)
        while (numberDraw.has(numberGen)) {
            numberGen = Math.floor(Math.random() * (maxN - minN + 1) + minN)
        }

        numberDraw.add(numberGen)
            
        const resultsP = document.createElement('div')
        resultsP.classList.add('result')
        resultsP.innerText = numberGen
            
        result.appendChild(resultsP)
    }
}

async function toSpinDraw() {
    const minN = Number(min.value)
    const maxN = Number(max.value)

    for (let j = 0; j < 30; j++) {
        result.innerHTML = ''
        let numberGen = Math.floor(Math.random() * (maxN - minN + 1) + minN)

        const resultsP = document.createElement('div')
        resultsP.classList.add('result')
            resultsP.innerText = numberGen
            
        result.appendChild(resultsP)

        await wait(100, generateNumber())
    }

    function wait(time) {
        return new Promise((resolv) => {
            setTimeout(() => resolv(), time)
        })
    }
}

function viewForm() {
    form.style.visibility = "visible"
    formBg.style.visibility = "visible"
}

function hiddenForm() {
    min.value = ''
    max.value = ''
    qtd.value = ''
    form.style.visibility = "hidden"
    formBg.style.visibility = "hidden"
}