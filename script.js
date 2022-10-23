numeroIf = parseInt(prompt("Ingrese un numero positivo o negativo"));

if(numeroIf > 0){

    console.log(numeroIf+ " "+ "es positivo")

}else{
    console.log(numeroIf+ " "+ "es negativo")
}

numeroWhile = parseInt(prompt("Ingrese un numero igual o menor que 3"));

numeroIncremento = 0

    while(numeroWhile < 3){
    
        if(numeroWhile > 3){
    
            console.log("El programa se detuvo debido a que ingreso un valor mayor que 3")
    
       };

    console.log(numeroIncremento)


    preguntaIncremento = confirm("¿Desea incrementar la variable?");

    if(preguntaIncremento === true){

        numeroIncremento++

    }else{

        console.log("Fin del bucle");
    }

 }

    numeroDoWhile = parseInt(prompt("Ingrese un numero igual o menor que 3"))

    numeroDoWhileIncremento = 0;

    do {
        preguntaDoWhile = confirm("¿Desea aumentar la variable?")

        if(preguntaDoWhile === true){

            numeroDoWhileIncremento++

            console.log(numeroDoWhileIncremento);


        }else{

            console.log("Fin del bucle")
        }

    } while(numeroDoWhile <= 3);


    for(numeroFor=0;numeroFor < 10;numeroFor++){

        console.log(numeroFor);
    }

    let estacionDelAño = prompt("Ingrese una estación");
    
    switch (estacionDelAño) {

        case "invierno":
            console.log("Está en Invierno");
            break;

        case "otoño":
            console.log("Está en Otoño");
            break;
        
        case "verano":
            console.log("Está en Verano")
            break;

        case "primavera":
            console.log("Usted está en Primavera");
            break;

            default:
                console.log("No ha ingresado ninguna estación")
                break;
        
    }