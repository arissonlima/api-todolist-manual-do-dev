const express = require("express");
const router = express.Router();

const tasksController = require("./controllers/tasksController");
const tasksMiddlewares = require("./middlewares/tasksMiddleware");

router.get("/tasks", tasksController.getAll);
router.post(
  "/tasks",
  tasksMiddlewares.validateBody,
  tasksController.createTask
);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put(
  "/tasks/:id",
  tasksMiddlewares.validateBody,
  tasksController.updateTask
);

module.exports = router;
