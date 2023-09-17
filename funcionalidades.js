let input = document.querySelector(".escrita");

console.log(input);


let adicionar = document.querySelector(".adicionar");

console.log(adicionar);

let contertarefas = document.querySelector(".contertarefas");




adicionar.addEventListener("click" , function (){


     

        let muralbtarefas = document.createElement("div");


    muralbtarefas.classList.add("muraltarefas");



    let guardatarefa = document.createElement("li");

   




    guardatarefa.textContent= `${input.value}`;


    muralbtarefas.appendChild(guardatarefa);


            let botaoadicionar = document.createElement("button");

           

            botaoadicionar.classList.add("feita");

            muralbtarefas.appendChild(botaoadicionar);


            
            let botaoexcluir = document.createElement("button");

           

            botaoexcluir.classList.add("excluir");

            muralbtarefas.appendChild(botaoexcluir);


            if(input.value === ""){

                alert("escreva uma tarefa");
            }else{

                contertarefas.appendChild(muralbtarefas);
            }


            input.value = "";


            botaoadicionar.addEventListener("click",function(){

                botaoadicionar.parentElement.style.textDecoration="line-through";



            });


            botaoexcluir.addEventListener("click",function(e){

               let target = e.target;

               target.parentElement.remove();
            });






});