let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-tasbeh")
let count = 0
let total = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    total += count
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    
    totalEl.textContent ="Total Tasbeeh: "+ total
}

