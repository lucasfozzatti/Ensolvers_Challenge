const pool = require('../database')


exports.tasks = async (req, res)=>{
    const id_user = req.params.id
    
    pool.query(
        "SELECT * FROM tasks WHERE folder_id = ? ",
        id_user,
        (err, result) => {
            if (err){
                console.log("error")
                return 
            }
            res.json({result: result});
        })        
}

exports.saveTasks = async (req, res)=>{
    const {description, folder_id} = req.body;

    pool.query("INSERT INTO tasks (description, folder_id) VALUES (?,?)",
    [description, folder_id],
    (err, result) => {

        if (err){
            console.log("error")
            return 
        }
    })
}
exports.updateCheckbox = async (req, res) =>{

    const {task_id, done} = req.body;
    
    console.log("dsad",task_id,done)
    pool.query("UPDATE tasks SET done = ? WHERE task_id = ?",
    [ done, task_id ],
    (err, result) => {
        console.log(result)
        if (err){
            console.log("error")
            return 
        }
    })
}

exports.updateTasks = async (req, res) =>{

    const {task_id, description} = req.body;
    
    pool.query("UPDATE tasks SET description = ? WHERE task_id = ?",
    [ description, task_id ],
    (err, result) => {
        
        if (err){
            console.log("error")
            return 
        }
    })
}

exports.deleteTasks = async (req, res) =>{
    const task_id = req.params.id
    
    pool.query("DELETE FROM tasks WHERE task_id = ? ",
    task_id,
    (err, result) => {

        if (err){
            console.log("error")
            return 
        }
    })
}
exports.deleteFoldertask = async (req, res) =>{
    const folder_id = req.params.id
    
    pool.query("DELETE FROM tasks WHERE folder_id = ? ",
    folder_id,
    (err, result) => {

        if (err){
            console.log("error")
            return 
        }
    })
}




