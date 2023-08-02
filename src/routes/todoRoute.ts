import express from "express"
import {DeleteTasksByIdController, UpdateTasksByIdController, createTaskController, findAllTasksController, findTasksByIdController} from "../controllers/todoController"

const router = express.Router();

router.route("/").post(createTaskController).get(findAllTasksController)
router.route("/:id").get(findTasksByIdController).put(UpdateTasksByIdController).delete(DeleteTasksByIdController )


export default router;
