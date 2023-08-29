console.log("Abriu o js!!!");

function limpar() {
    /*
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    */
    const campos = document.getElementsByName("campos");
    /*
    for (i = 0; i < campos.length; i++) {
        campos[i].value = "";
    }
    */
    campos.forEach(element => {
        element.value = "";
    });
}

document.getElementById("calcular").addEventListener("click", function () {
    calculo();
}, false);

function calculo() {
    let peso = document.getElementById("peso").value;
    if (Number.isNaN(Number.parseFloat(peso))) {
        document.getElementById("peso").focus();
        return;
    }
    let altura = document.getElementById("altura").value;
    altura /= 100;
    let imc = Number.parseFloat(((peso) / (altura * altura)).toFixed(2));
    document.getElementById("imc").innerHTML = imc.toLocaleString('pt-BR');
    document.getElementById("l5").classList.add("table-danger");
    document.getElementById("l4").classList.remove("table-warning");
    //console.log(imc);
    //console.log(imc.toLocaleString('pt-BR'));

}

document.getElementById("peso").addEventListener("keydown", function () {
    document.getElementById("imc").innerHTML = "";
}, false);

document.querySelectorAll('.campos').forEach((el) =>
  el.addEventListener('keydown', (event) => {
    document.getElementById("imc").innerHTML = "";
  })
);