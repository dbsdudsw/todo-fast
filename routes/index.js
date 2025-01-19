// RestAPI 방식으로 주소 설정
// 1. 할일 추가     : post /tasks
// 2. 할일 보여주기 : get /tasks
// 3. 할일 수정하기 : put /tasks/:id
// 4. 할일 삭제하기 : delete /tasks/:id

const express = require("express");
const router = express.Router();

const taskApi = require("./task.api")

router.use("/tasks", taskApi);

//router.get("/tasks",/*보여주는 함수 실행*/);

//router.post("/tasks",/*할일 추가 함수 실행*/);

//router.put("/tasks/:id",/*할일 수정 함수 실행 */);

//router.delete("/tasks/:id",/*할일 삭제 함수 실행 */);

module.exports=router;

