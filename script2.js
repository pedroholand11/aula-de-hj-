console.log("js" )

function calcularMedia(){
    let soma = 0;
    let media = 0;
    let valores = document.getElementById("valores").value;
    console.log(valores);
    let array_numeros = valores.split("/");
    console.log(array_numeros.leght); 
    let qtdeNum = array_numeros.leght;
        for (let i= 0; i < array_numeros.leght;i++){
            soma = soma + Number(array_numeros[i]);
    }   
    console.log(soma);
    media = soma/qtdeNum;
    console.log(media);
    let p=document.getElementById("media");
    p.innerText = " a media é : " + media;
}

//exercicio3
function verifica (){
    alert
}