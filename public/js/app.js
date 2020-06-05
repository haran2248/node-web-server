
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
response.json().then((data)=>{
    console.log(data)
    })
})

const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message1')
const message2=document.querySelector('#message2')
const message3=document.querySelector('#message3')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            message1.textContent=data.error
        }
        else
        {
            console.log(data.forecast)
            console.log(data.location)
            message1.textContent=data.forecast
            message2.textContent=data.location
        }
    })
})

    
})


