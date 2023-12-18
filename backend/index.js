require("./config")
const Package = require("./Package")
const User = require("./User")
const Image = require("./ImageUpload")
const express = require("express");
const cors = require("cors");
const multer = require("multer")
const path = require("path")
const app = express();
const mongoose = require('mongoose');
app.use('/uploads', express.static(path.join(__dirname + '/upload')));
app.use(express.json())
app.use(cors())
app.post("/add-package", async (req, resp) => {
  let package = new Package(req.body);
  let result = await package.save();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "package not added" })
  }
})

app.post("/login", async (req, resp) => {
  const result = await User.findOne(req.body);
  if (req.body.email && req.body.password) {
    if (result) {
      console.log(result)
      resp.send(result)
    } else {
      resp.send({ result: "plz check both email and password" })
    }
  } else {
    resp.send({ result: "enter both email and password" })
  }
})
app.post("/signup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  if (req.body.email && req.body.password && req.body.name) {
    if (result) {
      resp.send(result)
    } else {
      resp.send({ result: "something went wrong" })
    }
  } else {
    resp.send({ result: "Fill all fields" })
  }
})
app.get("/package-list", async (req, resp) => {
  const result = await Package.find();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "No Packages found" })
  }
})

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "upload")
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
  })
}).single("user_file")
app.post("/image-upload", upload, async (req, resp) => {

  const image = new Image({ image: req.file.filename });
  const result = await image.save();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "image is not in the database" })
  }

})
app.get("/image", upload, async (req, resp) => {


  const result = await Image.find();
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: "no images is in the database" })
  }

})
app.get("/package-list/:id", async (req, resp) => {
  let result = await Package.findOne({ _id: req.params.id })
  if (result) {
    resp.send(result)
  }
  else if (!result) {
    resp.send({ "result": "No Product with this id" })
  }
})
app.put("/package-list/:id", async (req, resp) => {
  let result = await Package.updateOne({ _id: req.params.id }, { $set: req.body })
  resp.send(result)
})
app.delete("/package-list/:id", async (req, resp) => {
  let result = await Package.deleteOne({ _id: req.params.id })
  resp.send(result)
})
app.get("/search/:key",async(req,resp)=>{
  let result=await Package.find({
    "$or":[
      {
        name:{"$regex":req.params.key}
      },
      {
        company:{"$regex":req.params.key}
      }
    ]
  })
  resp.send(result)
})
// app.post("/image-upload", upload, (req, resp) => {
//   Image.create({ image: req.file.filename }).then((result) => resp.json(result)).catch((err) => console.log(err))
// })
// app.get('/getImage', (req, resp) => {
//   Image.find().then((result) => resp.json(result)).catch((err) => resp.json(err))
// })

app.listen(4000)