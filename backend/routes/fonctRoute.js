const {Router} = require ("express");
const{ getTasks,
    saveTask,
    deleteTask, 
    updateTask,
} =require("../controleur/fonctControleur");
const router = Router();

router.get("/students", getTasks);
router.post("/students/create-student",saveTask);
router.put("/students/update-student/:id",updateTask);
router.delete("/students/delete-student/:id",deleteTask);

module.exports = router;