const router = require('express').Router();
const Bridges = require('./bridgesModel');
// const authRequired = require('../middleware/authRequired');

router.get('/', (req, res) => {
  Bridges.findBridges()
    .then((bridges) => {
      res.status(200).json(bridges);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get Bridges' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Bridges.findById({ id })
    .then((bridge) => {
      res.status(200).json(bridge);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: `cannot get bridge by id at this time` });
    });
});

router.put('/:id', (req, res) => {
  Bridges.findById(req.params.id)
      .then(item => {
          if (item) {
              Bridges.update(req.body, req.params.id)
                  .then(changed => {
                      res.status(200).json(changed);
                  })
                  .catch(err => {
                      res.status(500).json(err);
                  })
          } else {
              res.status(404).json({ error: 'item could not be found' });
          }
      })
      .catch(err => {
          res.status(500).json(err);
      })
})

module.exports = router;
