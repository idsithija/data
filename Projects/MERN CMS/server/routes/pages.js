const router = require("express").Router();
const Page =  require("../models/Page");;
const verify = require("../verifyToken");

//Create Page
router.post("/", verify, async (req, res) => {
    if(req.user.isAdmin)
    {
        const newPage = new Page(req.body);

        try{
            const savedPage = await newPage.save();
            res.status(201).json(savedPage);
        }catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!")
    }
});

//Get All Pages
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const pages = await Page.find();
        res.status(200).json(pages.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
});

module.exports = router;