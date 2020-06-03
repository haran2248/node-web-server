const request=require('request')

const forecast=(lat,long,callback)=>{
const url='http://api.openweathermap.org/data/2.5/onecall?lat='+encodeURIComponent(lat)+'&lon='+encodeURIComponent(long)+'&units=metric&appid=b48823562faad97087942e56ccbc383d'

request({url,json:true},(error,{body})=>{
    if(error)
    {
        callback('Unable to connect to internet',undefined)
    }
    else if(body.error)
    {
        callback('Unable to find location',undefined)
    }
  
    else
    {
    callback(undefined,{
        weather:body.current.weather[0]
    })
    }
}
)
}
module.exports=forecast