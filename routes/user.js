import express from "express";
import multer from "multer";
const router = express.Router();


const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + ".jpg ");
    },
  }),
}).single("user_file");

router.get("/", (req, res) => {
    res.send({ message: "data update" })
} );

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
});

router.post("/",upload , (req, res) => {
  const user = req.body;
  const Id = uuidv4();

  const UserId = { ...user, id: Id };

  users.push(UserId);
  res.send({ message: `User name ${user.firstName} added!` });
});

router.delete("/:id", (req, res) => {
  const Id = req.params.id;
  users = users.filter((user) => user.id != Id);
  res.send({ message: `user with id ${Id} deleted ` });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  console.log("id", id);
  const { firstName, lastName, city } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (city) user.city = city;

  res.send({ message: `User with the id ${id} has been changed!` });
});
export default router;
