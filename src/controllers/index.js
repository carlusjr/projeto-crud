function index(req, res) {
  res.render("index", { title: "Projeto CRUD" });
}

module.exports = {
  index,
};
