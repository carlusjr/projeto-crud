const CustomerModel = require("../models/customers");

function add(req, res) {
  // Obtém dados do formulário
  const { name, email, age, password } = req.body;
  
  // Criar novo cliente no banco de dados
  const register = new CustomerModel( { name, email, age, password } );
  register.save();
  
  res.send("Cliente salvo com sucesso!");
}

module.exports = {
  add,
}