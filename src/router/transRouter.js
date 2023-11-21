import express from "express"; //in order to create router
import {
  insertTrans,
  getUserTrans,
  deleteManyTask,
} from "../module/trans/TransModule.js";

import { userAuth } from "../middleware/authMiddleware.js";
const router = express.Router();

//insert a new transaction

router.post("/", userAuth, async (req, res, next) => {
  try {
    console.log(req.body);
    //call for query

    //from middelware I am getting req.body and req. headers
    const result = await insertTrans({ ...req.body, userId: req.userId });

    result?._id
      ? res.json({
          status: "success",
          message: "Transactions recorded successfully.",
        })
      : res.json({
          status: "error",
          message: "Unable to record transaction",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
    next(error);
  }
});

//Get transactions by user Id

router.get("/", userAuth, async (req, res, next) => {
  try {
    const transList = await getUserTrans(req.userId);

    res.json({
      status: "success",
      message: "Here is the list",
      transList,
    });
  } catch (error) {
    console.log(error);
  }
});

//delete transactions
router.delete("/", userAuth, async (req, res, next) => {
  try {
    const { userId, body } = req; // check middleware how i sent it
    console.log(req.body);

    // const result = await deleteTask(_id);
    const result = await deleteManyTask(ids, userId);
    console.log(result);

    result?.deletedCount
      ? res.json({
          status: "success",
          message: `${result.deletedCount} has beem deleted`,
        })
      : res.json({
          status: "success",
          message: ` Unable ${result.deletedCount} has beem deleted`,
        });
  } catch (error) {
    next(error);
  }
});

export default router;
