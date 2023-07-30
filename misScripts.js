function Empleado(expediente,nombre, apellidos,fecha){
    this.expediente=expediente;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fecha=fecha;
}

let array = [];

function cargar(){
    let elementoExpediente = document.getElementById("expedienteTrabajador");
    let expediente = elementoExpediente.value;
    let elementoNombre = document.getElementById("nombreTrabajador");
    let nombre = elementoNombre.value;
    let elementoApellido = document.getElementById("apellidosTrabajador");
    let apellidos = elementoApellido.value;
    let elementoFecha=document.getElementById("fechaNacimiento");
    let fecha=elementoFecha.value;

    
    array.push(new Empleado(expediente, nombre, apellidos,fecha));

    elementoNombre.value = "";
    elementoApellido.value = "";
    elementoFecha.value="";
    elementoExpediente.value="";
    salida.textContent="";

    marcarInputsVacios();
    
}

function mostrarDatos() {
    let salida = document.getElementById("salida");
    salida.textContent = ""; // Limpiamos el contenido antes de mostrar los datos

    if (array.length === 0) {
        salida.innerHTML = "<p>No se han cargado datos de empleados.</p>";
        return;
    }

    let tabla = document.createElement("table");
    tabla.classList.add("tabla-resultados");

    // Crear la fila de encabezados
    let encabezados = document.createElement("tr");
    for (let atributo in array[0]) {
        let th = document.createElement("th");
        th.textContent = atributo.toUpperCase();
        encabezados.appendChild(th);
    }
    tabla.appendChild(encabezados);

    // Crear las filas con los datos de los empleados
    for (let empleado of array) {
        let fila = document.createElement("tr");
        for (let atributo in empleado) {
            let td = document.createElement("td");
            td.textContent = empleado[atributo];
            fila.appendChild(td);
        }
        tabla.appendChild(fila);
    }

    salida.appendChild(tabla);
}

function marcarInputsVacios() {
    let inputs = document.getElementsByTagName("input");
    for (let input of inputs) {
        if (input.value === "") {
            input.className = "inputVacio";
        } else {
            input.className = "campoRellenado"; // Quitamos el fondo rojo si no está vacío
        }
    }
}