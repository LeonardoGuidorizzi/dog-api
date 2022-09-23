'use strict'

const pesquisaCachorro =async (raca) =>{
    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch(url)

    const listaCachorro = await response.json()

    return listaCachorro.message
}

export {pesquisaCachorro} 