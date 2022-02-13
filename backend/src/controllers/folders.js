const pool = require('../database')


exports.getFolder = async (req, res)=>{
    const id_user = req.params.id
    pool.query(
        "SELECT * FROM folders WHERE user_id = ? ",
        id_user,
        (err, result) => {
            if (err){
                console.log("error")
                return 
            }
            console.log(result)
            res.json({result: result});
            

        })        

}

exports.saveFolder = async (req,res) =>{
    const {user_id, name} = req.body;

    pool.query("INSERT INTO folders (user_id, name) VALUES (?,?)",
    [user_id, name],
    (err, result) => {

        if (err){
            console.log("error")
            return 
        }
    })
}

//Delete folder with name and id
exports.deleteFolder = async (req, res) =>{
    const folder_id = req.params.id
    
    pool.query("DELETE FROM folders WHERE folder_id = ? ",
    folder_id,
    (err, result) => {

        if (err){
            console.log("error")
            return 
        }
    })



}