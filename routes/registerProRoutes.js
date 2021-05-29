const mongoose = require("mongoose");
const e = require("express");

const Professional = mongoose.model("professionals");

module.exports = (app) => {
  app.post("/api/professional", async (req, res, done) => {
    const existingProfessional = await Professional.findOne({
      email: req.body.email,
    });

    if (existingProfessional) {
      return res.json({
        msg: "You have already submitted an application. Please wait our team will contact you soon!!",
        user: null,
      });
    }
    //we added a return statement and removed that shitty else because agr user mil gaya to return ho jega aur us return k neeche ka code chlega hi nhi......so we can avoid that else part
    const professional = await new Professional({
      professionalName: req.body.professionalName,
      email: req.body.email,
      mobile: req.body.mobile,
      occupation: req.body.occupation,
    }).save();
    return res.json({ msg: null, user: professional });
  });

  app.get("/api/professional/logout", (req, res) => {
    req.logout();
    console.log("Logged out");
    res.send(req.professional);
  });
};
