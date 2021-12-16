const router = require("express").Router();
const User = require("../models/User");

router.post("/save", async (req, res) => {
  const data = new User({
    move: req.body.move,
    csteps: req.body.csteps,
  });
  try {
    const saveMove = await data.save();
    res.send(saveMove);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/data", async (req, res) => {
  try {
    const data = await User.find();
    console.log("All Data Fetched.");
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

// router.get("/find/:dataID", async (req, res) => {
//   try {
//     const data = await User.findById(req.params.dataID);
//     res.send(data);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

router.delete("/delete/:dataID", async (req, res) => {
  try {
    const data = await User.deleteOne({ _id: req.params.dataID });
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/deleteall", async (req, res) => {
  try {
    const data = await User.deleteMany({});
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch("/update/:dataID", async (req, res) => {
  try {
    const data = await User.updateOne(
      { _id: req.params.dataID },
      { $set: { move: req.body.move, csteps: req.body.csteps } }
    );
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
