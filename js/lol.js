function inversion(){

    // Variables
    let cNombre = document.getElementById("nombres").value;
    let cTelefono = document.getElementById("telefono").value; 
    let cCorreo = document.getElementById("email").value;
    let contPre = document.querySelector(".pre-simulation");
    let contPost = document.querySelector(".post-simulation");
    let cMonto = document.getElementById("inversion").value;    
    let cTiempo = document.getElementById("tiempo").value;
    // Fin de las variables


    // Panel de la derecha
    contPost.classList.remove("disabled");
    contPre.classList.add("disabled");

    // mostramos las variables con los valores ingresados por   
    document.querySelector("#nombres-show").innerHTML = cNombre;
    document.querySelector("#email-show").innerHTML = cCorreo;
    document.querySelector("#cel-show").innerHTML = cTelefono; 
    

    switch (cTiempo) {
        case "1":
          document.querySelector("#tiempo-show").innerHTML = "12 meses";
          document.querySelector("#interes-show").innerHTML = "0.8%";
          
          let valorTotal = cMonto*0.096;
          let total= valorTotal + parseInt(cMonto);

          document.querySelector("#total-show").innerHTML = total;
          document.querySelector("#ganancia-show").innerHTML = valorTotal;
        //   let ganancia = cMonto * 
          break;

          case "2":
            document.querySelector("#tiempo-show").innerHTML = "24 meses";
            document.querySelector("#interes-show").innerHTML = "1.3%";

            let valorTotal2 = cMonto * 0.312;
            let total2= valorTotal2 + parseInt(cMonto);

            document.querySelector("#total-show").innerHTML = total2;
            document.querySelector("#ganancia-show").innerHTML = valorTotal2;
            break;

            case "3":
                document.querySelector("#tiempo-show").innerHTML = "36 meses";
                document.querySelector("#interes-show").innerHTML = "2.88%";

                let valorTotal3 = cMonto * 0.612;
                let total3= valorTotal3 + parseInt(cMonto);
    
                document.querySelector("#total-show").innerHTML = total3;
                document.querySelector("#ganancia-show").innerHTML = valorTotal3;
                break;
      }
    }




    
    


















    // alert("Bienvenido usuario " + cNombre+ " su telefono es: " +cTelefono); 
    // console.log("bienvenido usuario " +cNombre+ " su telefono es: " +cTelefono);
    // let i = 100;
    // while(i >= 0){
    //     console.log(i);
    //     i--;
    // }

