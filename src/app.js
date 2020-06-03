const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const geo=require('./utils/geocode')
const fore=require('./utils/forecast')
const publicDirectoryPath=path.join(__dirname,'../public')
app.set('views', path.join(__dirname, '../templates/views'))
const partialsPath=path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)
app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'WEATHER PAGE',
        name:'hariharan'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'ABOUT ME',
        name:'hariharan'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'HELP',
        body:'This is the help page.Use the links to switch pages',
        name:'Hari'
    })
})
app.get('/weather',(req,res)=>{
    const address=req.query.address
    if(!(req.query.address))
    {
        return res.send({
            error:'Address required'
        })
    }
    
    else{
        geo(address,(error,{latitude,longitude,location}={})=>{
            if(error)
            return res.send({
                error:error
            })
            
        
            fore(latitude,longitude,(error,Forecastdata)=>{
                if(error)
                {
                    res.send({
                        error:error
                    })
                }
                else{
                    res.send({
                        forecast:Forecastdata,
                        location:location,
                        address:address
                    })
                
                }
                })
        
        })
    }

   
})
app.get('/products',(req,res)=>{

    if(!(req.query.search))
    {
        return res.send({
            error:'Search query item empty'
        })

    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})
app.get('*',(req,res)=>{
   res.render('404',{
       errorMessage:'ErrorMessage 404',
       title:'Page not found'
   })
})


app.listen(3000,()=>{
    console.log('server running')
})