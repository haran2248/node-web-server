

console.log('javascript file loaded')
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
response.json().then((data)=>{
    console.log(data)
    })
})

const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message1')
const message2=document.querySelector('#message2')


weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            message1.textContent=data.error
        }
        else
        {
            console.log(data.forecast.weather.description)
            console.log(data.location)
            message1.textContent=data.forecast.weather.description
            message2.textContent=data.location
        }
    })
})

    
})


