const prompt = require('prompt-sync')();
function temperatura(){
    let temp = parseFloat(prompt("Qual a temperatura em seu ambiente (Em °C)?"));

    if(temp < 15 ){
        console.lodgg("Esta frio");
    }
    else if(temp >= 15 && temp <=25){
        console.log("Esta acochegante");
    }
    else if(temp > 25){
        console.log("Esta quente");
    }

}
temperatura();