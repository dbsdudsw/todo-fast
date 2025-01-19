const express = require("express");
const { createTask, getTask } = require("../controllers/task.controller");


const router = express.Router();
router.get("/",/*보여주는 함수 실행*/getTask);
router.post("/",/*할일 추가 함수 실행*/createTask)
//router.put("/:id",/*할일 수정 함수 실행 */);
//router.delete("/:id",/*할일 삭제 함수 실행 */);

module.exports=router