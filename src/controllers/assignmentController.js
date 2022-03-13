let axios = require("axios")
// [
//     {city:"London",temp:280},
//     {city:"Moscow",temp:290},
//     {city:"Bangalore",temp:301.2}
// ]

let getSortedCities= async function (req, res) {
    try {

        let Cities= ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
        let Cityobjarr=[]
        for (i = 0; i < Cities.length; i++) {
            let obj = { City:Cities[i] }
            let resp =await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${Cities[i]}&appid=25ea8d70fe7db254e8554e8887ae98f2`)
            console.log(resp.data.main.temp)

            obj.temp= resp.data.main.temp
            Cityobjarr.push(obj)
        }
        let sorted = Cityobjarr.sort( function(a,b) { return a.touch - b.touch})

        console.log(sorted)
        res.status(200).send({status:true, data:sorted})
    } catch (error) {
        console.log(error)
        res.status(500).send({status:false,msg: "server error"})
    }
}

module.exports.getSortedCities = getSortedCities