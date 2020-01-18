var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.get('/', (req, res) => {
        userController.read_all()
        .then(
            (data) => {
                res.json(data);
            }
        )
        .catch(
            error => {
                res.json({message: error});
            }
        );
    }
);

router.get('/:userId', (req, res) => {
        userController.read_one(req.params.userId)
        .then(
            (data) => {
                res.json(data);
            }
        )
        .catch(
            error => {
                res.json({message: error});
            }
        );
    }
);

router.delete('/:userId', (req, res) => {
        userController.delete(req.params.userId)
        .then(
            (data) => {
                res.json(data);
            }
        )
        .catch(
            error => {
                res.json({message: error});
            }
        );
    }
);

router.put('/', (req,res) => {
        userController.update(req.body)
        .then(
            (data) => {
                res.json(data);
            }
        )
        .catch(
            error => {
                res.json({message: error});
            }
        );
    }
);

module.exports = router;
