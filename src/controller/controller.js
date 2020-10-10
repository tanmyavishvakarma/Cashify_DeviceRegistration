const db = require("../models");
const Device = db.devices;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
        // Validate request
        if (!req.body.serialno) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
          return;
        }
      
        // Create a Tutorial
        const device = {
          serialno: req.body.serialno,
          brand: req.body.brand,
          modelname: req.body.modelname ? req.body.modelname : false
        };
      
        // Save Tutorial in the database
        Device.create(device)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
          });
      };
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

        const serialno = req.query.serialno;
        var condition = serialno ? { serialno: { [Op.like]: `%${serialno}%` } } : null;
      
        Tutorial.findAll({ where: condition })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
      };
      
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {


  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
