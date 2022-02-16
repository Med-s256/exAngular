const fs = require('fs')
const bug = (req,res)=>{
    const list = fs.readFileSync('bug.json')
    //const data = JSON.stringify(list)
    const data = JSON.parse(list)
    res.send({data});
} 
module.exports = bug;
