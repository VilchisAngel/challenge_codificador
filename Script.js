/*Elementos principales */
const TextArea = document.getElementById("Etexto");
const TextResultado = document.querySelector(".textarea_salida");

/*Elementos Extras*/
const Descripcion = document.querySelector(".descripcion");
const Btn_copiar = document.querySelector(".logo_copy");
const cta = document.querySelector(".input_copy");
const alerta = document.querySelector(".alerta_copy ");
const icon = document.querySelector(".check");


/*Encripta */
const Encriptar = (StrEncriptar) => {

    const Diccionario = [["e", "enter"],
                        ["i", "imes"], 
                        ["a", "ai"],
                        ["o", "ober"],
                        ["u", "ufat"]];


    
    StrEncriptar = StrEncriptar.toLowerCase();

    function validacion(){
        /*Posibles escenarios de que se ingresen algunos caracteres y/o acententos*/
        const DiccionarioAbc = ["á", "é", "í", "ó", "ú", "!", "*", "¿", "?", "¡", "(", ")", "[" , "]", "{", "}", ";", ":", ",", ".", "@", "#", "$", "%", "&", "/", "=", "+", "-", "_", "°"];
        let lista = Array.from(StrEncriptar);
        let validacion = false;

        lista.forEach(elementos =>{
            for(let i = 0; i < DiccionarioAbc.length; i++){
                if(elementos === DiccionarioAbc[i]){
                    validacion = true;
                }
            }
        });
        
        return validacion;
    };


    if(validacion() == true){
        alert("No se puede encriptar caracteres especiales ni acentos");
    }
    else{
        for (let i = 0; i < Diccionario.length; i++) {
            if(StrEncriptar.includes(Diccionario[i][0])){
                StrEncriptar = StrEncriptar.replaceAll(Diccionario[i][0], Diccionario[i][1]);
            }
        }
        return StrEncriptar; 
    }
}

function BtnEncriptar() {
    const ResultadoTexto = Encriptar(TextArea.value);
    
    if(ResultadoTexto == undefined){
        TextResultado.innerHTML = "";
        TextArea.value = "";
    }
    else{
        TextResultado.innerHTML = ResultadoTexto;
        TextArea.value = "";
        Descripcion.style.display = "none";
        Btn_copiar.style.visibility = "visible";
        cta.style.display = "block";
    }
}

/*Desencripta */
const DesEncriptar = (StrDesEncriptar) => {
    
    const Diccionario = [
                        ["a", "ai"],
                        ["e", "enter"],
                        ["i", "imes"], 
                        ["o", "ober"],
                        ["u", "ufat"]
                        ];
    
        StrDesEncriptar = StrDesEncriptar.toLowerCase();
    
        for (let i = 0; i < Diccionario.length; i++) {
            if(StrDesEncriptar.includes(Diccionario[i][1])){
                StrDesEncriptar = StrDesEncriptar.replaceAll(Diccionario[i][1], Diccionario[i][0]);
            }
        }
    
        return StrDesEncriptar;
}

function BtnDesEncriptar() {
    const ResultadoTexto = DesEncriptar(TextArea.value);
    TextResultado.innerHTML = ResultadoTexto;
    TextArea.value = "";
    Btn_copiar.style.visibility = "visible";
    Descripcion.style.display = "none";
    cta.style.display = "block";
}

/*Copiar */
function copiar(){
    const contenido = TextResultado.innerHTML;
    const guardar = document.createElement("textarea");

    guardar.value = contenido;
    document.body.appendChild(guardar);
    guardar.select();

    document.execCommand("copy");
    document.body.removeChild(guardar);

    TextResultado.value = "";
}

//Botones
const btn_encripta = document.getElementById("btn_encriptar");
btn_encripta.addEventListener("click", function(){
    const validar = TextArea.value;
    if(validar == ""){
        alert("Ningun texto encontrado para encriptar");
    }
    else{
        BtnEncriptar();
    }
});

const btn_desencripta = document.getElementById("btn_desencriptar");
btn_desencripta.addEventListener("click", function(){
    const validar = TextArea.value;
    if(validar == ""){
        alert("Ningun texto encontrado para desencriptar");
    }
    else{
        BtnDesEncriptar();
    }
});

const btn_copiar = document.getElementById("input_copy");
btn_copiar.addEventListener("click", function(){
    copiar();
    icon.style.display = "inline-block";
    setTimeout(() => {
        icon.style.display = "none";
    }, 700);
});

/*Botones Extras*/
const logo_Copiar = document.getElementById("input_logo_copy");
logo_Copiar.addEventListener("click", function(){
    copiar();
    alerta.style.display = "block";

    setTimeout(() => {
        alerta.style.display = "none";
    }, 700);
});

 