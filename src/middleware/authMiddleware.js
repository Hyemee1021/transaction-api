import { getUserById } from "../module/user/UserModule.js";

export const userAuth = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.headers);
    //check if user id is here
    const { authorization } = req.headers;
    //userId is in req.headers

    //authorization has id info-
    //I am getting info from uesr database
    const user = await getUserById(authorization);

    if (user?._id) {
      //I put id in req.userId
      req.userId = authorization;
      next();
      return;
    }
    res.status(403).json({
      status: "error",
      message: "Unauthorized",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
