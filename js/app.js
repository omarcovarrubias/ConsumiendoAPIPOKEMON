console.log("Esta funcionando");

const  getRandomInt=(min,max)=>{
    return Math.floor(Math.random()*(max-min))+min;
}

const fetchData= async(id)=>
{
    try {
        const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data= await res.json()
        pintarCard(data)
    } catch (error) {
        console.log(error)
    }
    
}

document.addEventListener('DOMContentLoaded',()=>{
    const random = getRandomInt(1,151)
    fetchData(random)
    
})

const pintarCard=(pokemon)=>{
    console.log(pokemon)
    const template = document.querySelector('#template-card').content
    const flex = document.querySelector('.flex')
    const fragment = document.createDocumentFragment()
    const clone = template.cloneNode(true)
    clone.querySelector('card-body-img').setAtribute(name,value)

}

/*
fetchData()
*/
