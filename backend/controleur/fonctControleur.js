const TaskModel = require("../model/fonctModel");

module.exports.getTasks = async (req,res) => {
     const tasks = await  TaskModel.find();
     res.send(tasks);
};
//Sauvegarde de la fonctionnalités création
module.exports.saveTask =  (req,res) => {
    
    const { task } = req.body;

    TaskModel.create({ task })
    .then((data) => {
        console.log("L'étudiant à  été creer avec succès !!");
        res.status(201).send(data);
    })
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg : "Erreur de sauvegarde !!"});
    });
};
//Sauvegarde de la fonctionnalité modification
module.exports.updateTask =  (req,res) => {
    const {id} = req.params;
    const {task} = req.body;

    TaskModel.findByIdAndUpdate(id, {task})
    .then(() => res.send("L'étudiant à été modifier avec succès"))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg : "Erreur de sauvegarde !!"});
    });
};
//Sauvergard dela fonctionnalite de la Suppression 
module.exports.deleteTask =  (req,res) => {
    const {id} = req.params;

    TaskModel.findByIdAndDelete(id)
    .then(() => res.send("L'étudiant à été supprimer avec succès"))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg : "Erreur de sauvegarde !!"});
    });
};