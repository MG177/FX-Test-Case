const express = require('express')
const path = require("path");
const router = express.Router()
const comment = require('../controller/comment')
const user = require('../controller/user')
const { requireAuth } = require("../middleware/middleware");


router.get("/comment", comment.list);
router.post("/comment", comment.post);
router.get("/comment/:id", comment.get);
router.patch("/comment/:id", comment.update);
router.delete("/comment/:id", comment.delete);
router.post("/user/register", user.register);
router.post("/user/login", user.login);
router.get("/user/logout", user.logout);


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/home.html"));
  });
router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/login.html"));
  });
router.get("/admin", (req, res) => {
    res.redirect("/admin/comments");
  });

  router.get("/admin/comments/edit/:id", requireAuth, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/edit.html"));
  });
  router.get("/admin/comments", requireAuth, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/admin.html"));
  });

  router.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/styles/style.css"));
  });
  router.get("/logo", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/assets/Logo.ico"));
  });

module.exports = router