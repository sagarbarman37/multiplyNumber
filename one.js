let body = document.querySelector('body')
body.style.backgroundColor = '#232323'
body.style.color = '#fff'

let button = document.querySelector(".click");
let reload = document.querySelector(".delete");
let first = document.querySelector("#first")
let second = document.querySelector("#second")


button.addEventListener('click', (e)=> {
    let num1 = Number(first.value);
    let num2 = Number(second.value);
    e.preventDefault()
    
    multiply(num1,num2)
   
    reload.addEventListener("click", ()=> {
    location.reload()
    })
})

window.addEventListener('keypress', (e) => {
    if(e.key === "Enter") {
        multiply(first.value, second.value)
    }
})


function multiply(num1,num2){
let table = document.createElement('table')
table.style.width = '100%'

for (let j = 1; j <= num1; j++){
    let row = document.createElement("tr")
    for (let i = 1; i <= num2; i++) {
        let cell = document.createElement('td')
        cell.innerHTML = `${j} * ${i} = ${j * i}`; // Its the main line for the logic.
        cell.style.border = "1px solid white"
        cell.style.textWrap = 'noWrap'
        cell.style.padding = '2px 4px'
        table.style.borderCollapse = "collapse"
        if(i % 2 === 0 || j % 2 === 0) {
            cell.style.backgroundColor = "green"
        }else{
            cell.style.backgroundColor = "red"
        }
        
        row.appendChild(cell)
    }
    table.appendChild(row)
}
table.style.display = "inline"
body.appendChild(table)
}