const form = document.querySelector('.form-roll')
const formBg = document.querySelector('.form-bg')
const result = document.querySelector('.results')
const inputs = document.querySelector('.inputs')
const min = document.querySelector('.input-min')
const max = document.querySelector('.input-max')
const qtd = document.querySelector('.input-qtd')

async function generateNumber() {
    const minN = Number(min.value)
    const maxN = Number(max.value)
    const qtdN = Number(qtd.value)

    for (let j = 0; j < 30; j++) {
        result.innerHTML = ''

        for (let i = 0; i < qtdN; i++) {
            const numberGen = Math.round(Math.random() * (maxN - minN + 1) + minN)
            
            const resultsP = document.createElement('div')
            resultsP.classList.add('result')
            resultsP.innerText = numberGen
            
            result.appendChild(resultsP)
        }

        await wait(50)
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