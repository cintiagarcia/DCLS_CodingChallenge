const router = require("express").Router();
const Phone = require("../models/Phone.js");

router.post("/", (req, res, next) => {
    const {
        name,
        manufacturer,
        description,
        color,
        price,
        imageFileName,
        screen,
        processor,
        ram,
    } = req.body;

    Phone.create({
        name,
        manufacturer,
        description,
        color,
        price,
        imageFileName,
        screen,
        processor,
        ram,
      })
        .then((phone) => {
          console.log("all good")
          console.log(phone);
          res.status(201).json(phone);
        })
        .catch((err) => {
          console.log(err);
          res.json(err);
        });
});

router.get("/", (req, res, next) => {
    console.log("router.get");
    Phone.find()
      .then((phones) => {
        res.status(200).json(phones);
      })
      .catch((err) => res.json(err));
});

router.get("/:id", (req, res, next) => {
    console.log(">>>>>>>> router.getID ${req.params.id}");
    Phone.findById(req.params.id).then((phone) => {
      if (!phone) {
        res.status(404).json(phone);
      } else {
        res.status(200).json(phone);
      }
    });
});

router.put("/:id", (req, res, next) => {
    const {
        name,
        manufacturer,
        description,
        color,
        price,
        imageFileName,
        screen,
        processor,
        ram,
    } = req.body;
    console.log("router.put", id);
    Phone.findByIdAndUpdate(
      req.params.id,
      {
        name,
        manufacturer,
        description,
        color,
        price,
        imageFileName,
        screen,
        processor,
        ram,
      },
      { new: true }
    )
      .then((phone) => {
        res.status(200).json(phone);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });
  
  router.delete("/:id", (req, res) => {
    Phone.findByIdAndDelete(req.params.id).then(() => {
      res.status(200).json({ message: "phone deleted" });
    });
  });
  
  module.exports = router;