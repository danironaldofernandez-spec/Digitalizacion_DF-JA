const productos = [
    {
        nombre: "Ordenador",
        descripcion: "Ordenador de sobremesa con procesador i7 y 16GB de RAM"
    },
    {
        nombre: "Monitor",
        descripcion: "Monitor Full HD de 24 pulgadas"
    },
    {
        nombre: "Altavoces",
        descripcion: "Altavoces estéreo con sonido envolvente"
    }
];

const contenedor = document.getElementById("productos");

productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>${producto.descripcion}</p>
    `;

    contenedor.appendChild(div);
});
