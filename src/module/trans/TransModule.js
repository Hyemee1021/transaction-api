import TransSchema from "./TransSchema.js";

//insert new transaction

export const insertTrans = (transObj) => {
  return TransSchema(transObj).save();
};

//get(read) transactions by user Id
export const getUserTrans = (userId1) => {
  return TransSchema.find({ userId: userId1 });
};

//Delete transactions
export const deleteManyTask = (ids, userId) => {
  return TransSchema.deleteMany({
    userId,
    _id: {
      $in: ids,
    },
  });

  // data lookjs for
};
//update transactions
