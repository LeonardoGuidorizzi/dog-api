'use strict'
import{pesquisaCachorro} from "./dogapi.js"

const criarImg = (endIgm) =>{
    const img = document.createElement('img')
    img.src = endIgm
    return img
}

const pesquisar = async () =>{
    const raca = document.getElementById('raca').value
    const imagens = await pesquisaCachorro(raca)
    const galeria = document.getElementById('galeria')
    const tagImagens = imagens.map(criarImg)
    galeria.replaceChildren(...tagImagens)

} 
const  handleKeypress = (event) =>{
    if (event.key == "Enter" ){
        pesquisar()
    }
}
// const createDogscard = () =>{
//     const card = document.createElement('div')
//     card.innerHTML =`
//     <img scr = ${}>
//     `
// }


document.getElementById ('raca')
.addEventListener('keypress', handleKeypress)