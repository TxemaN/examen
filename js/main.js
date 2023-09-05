document.addEventListener("DOMContentLoaded", () => {


    const fragment = document.createDocumentFragment();
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

    const espacioPokemon = document.querySelector("#espacioPokemon")
    let nombrePokemon = document.getElementById("nombrePokemon").value


    document.addEventListener("click", ({ target }) => {
        if (target.classList.contains("buscar")) {
            let url = nombrePokemon
            console.log(url)
            consultaPoke(url)
            
        }
    })

    const consultaPoke = async (url) => {

        try {
            const res = await fetch(`${baseUrl}${url}`)

            if (res.ok) {
                const datos = await res.json()
                pintarPokemons(datos)
                console.log(datos)
            }

        } catch { console.log("parece que ese pokemon no existe")}

    }

const pintarPokemons = (datos) =>{
console.log(datos)




const nuevoPokemon = document.createElement("TR")

const nombrePokemon = document.createElement("TD")
nombrePokemon.textContent = datos.name

const tipoPokemon = document.createElement("TD")
tipoPokemon.textContent = datos.types[0].type.name

const idPokemon = document.createElement("TD")
idPokemon.textContent = datos.id

nuevoPokemon.append(nombrePokemon,idPokemon, tipoPokemon )
fragment.append(nuevoPokemon)
espacioPokemon.append(fragment)

}




})