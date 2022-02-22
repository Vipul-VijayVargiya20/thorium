const express = require('express');
const router = express.Router();
router.get('/test-me', function (req, res) {
    res.send('Welcome to my movies collections!');
});
// 1. THIS API WILL SHOW ALL MOVIES IN ARRAY
router.get('/MOVIES', function (req, res){
   res.send('["darbar","sooryavanshi","1983","hum sath sath hain","hum"]')
});
//2. THIS API WILLfetch all MOVIES by index id 
router.get('/MOVIES/:movieid', function (req, res){
mov = ["darbar","sooryavanshi","1983","hum sath sath hain","hum"]
let value = req.params.movieid;
if (value>mov.length-1){
    res.send('"doesnot exist"')
} else{
    res.send(mov[value])
}
})
// 3. this api will fetch all movies from array all objects
router.get('/MOVIEz', function (req, res){

    res.send([ {id: 1,name: 'The Shining'}, {id: 2,name: 'Incendies'},{id: 3,name: 'Rang de Basanti'},{id: 4,name:'Finding Demo'},{id: 5,name: 'hum'}]);
});
// 4. this api will fetch all movies from array of objects by Indexid
router.get('/films/:flimId', function (req, res){
let movi=[{id: 1,name: 'The Shining'}, {id: 2,name: 'Incendies'},{id: 3,name: 'Rang de Basanti'},{id: 4,name:'Finding Demo'},{id: 5,name: 'hum'}]
let value = req.params.flimId;
let found = false;
for (i=0;i< movi.length;i++){
if (movi[i].id == value){
    found = true
    res.send(movi[i])
    break
}
}
if (found==false){
    res.send('no movie exist with this id')}
});


module.exports = router;