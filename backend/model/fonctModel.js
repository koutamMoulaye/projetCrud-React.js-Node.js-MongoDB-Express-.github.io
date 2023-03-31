const mongoose = require ("mongoose");

const taskSchema = new mongoose.Schema({
    task:{
        type : String,
        require : true,
    }
})
// Exportation de notre module nous permettant de definir les chemin d'accès
module.exports = mongoose.model("Task",taskSchema);