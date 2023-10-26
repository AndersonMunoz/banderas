const paisesCaja = document.querySelector(".cada-pais");
const buscar = document.querySelector(".buscar");
const desplegar = document.getElementById("desplegar");
const listaCont = document.getElementById("listaCont");
const nombreContienente = document.querySelectorAll(".nombre-continente");

console.log(nombreContienente);

async function obtenerPais() {
    const url = await fetch("https://restcountries.com/v2/all");
    const res = await url.json();
    console.log(res);
    res.forEach(pais => mostrarPais(pais));
}

obtenerPais();

function mostrarPais(data) {
    const pais = document.createElement("div");
    pais.classList.add("paises"); // Añade la clase "paises" al div del país
    pais.innerHTML = `
    <img class="bandera1" src="${data.flag}">
    <p class="title">${data.name}</p><br>
    <p class="subtitle">Nombre Nativo:</p><p>${data.nativeName}</p><br>
    <p class="subtitle">Población:</p><p>${data.population}</p><br>
    <p class="subtitle region">Contienente:</p><p>${data.region}</p><br>
    <p class="subtitle">Capital:</p><p>${data.capital}</p>`;
    paisesCaja.appendChild(pais); // Añade el nuevo div del país a ".cada-pais"
}

desplegar.addEventListener("click", () => {
    if (listaCont.classList.contains("despliegue")) {
        listaCont.classList.add("despliegue-hidden");
        listaCont.classList.remove("despliegue");
    } else {
        listaCont.classList.remove("despliegue-hidden");
        listaCont.classList.add("despliegue");
    }
});

nombreContienente.forEach(pais => {
    pais.addEventListener("click", () => {
        const continenteElegido = pais.textContent.toLowerCase();
        const paises = document.querySelectorAll(".paises");
        paises.forEach(pais => {
            const region = pais.querySelector(".region").textContent.toLowerCase();
            if (continenteElegido === "todos" || continenteElegido === region) {
                pais.style.display = "grid";
            } else {
                pais.style.display = "none";
            }
        });
    });
});

