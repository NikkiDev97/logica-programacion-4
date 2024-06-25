let resultBtn = document.getElementById("resultB");
let resultParagraph = document.getElementById("resultP");

resultBtn.addEventListener("click", ()=>{
    let entryInput = document.getElementById("entry")
    if(inputValid(entryInput)){
        resultParagraph.innerHTML = computeFibonacci(parseInt(entryInput.value))
    }
})

function inputValid(entryInput){
    let entryValue = entryInput.value
    if(isNaN(entryValue) || !Number.isInteger(Number(entryValue)) || parseInt(entryValue) < 1){
        alert("No es posible calcular la sucesión.\nPor favor ingrese un número entero positivo");
        //Reseteo
        document.getElementById("entry").value = '';
        //interrumpe la ejecución del codigo restante.
        return false;
    }
    return true;
}


function computeFibonacci(number){
    let sequence = [0];
    let sequenceString = "0 ";
    for(let i = 1; i<number; i++){
        if(i == 1){
            sequence[i] = 1;
            sequenceString += 1 + " ";
        }else{
            sequence[i] = sequence[i-1] + sequence[i-2]
            sequenceString += sequence[i] + " ";
        }
    }
    return sequenceString;
}