const contentController = require('../controllers/content');
const router = require('express').Router();

router.post('/', contentController.create);
router.get('/', contentController.getAll);
router.get('/:id', contentController.findOne);
router.put('/:id', contentController.update);
router.delete('/:id', contentController.delete);
router.get('/byProvinsi/:provinsi', contentController.getByProvinsi)

module.exports = router;
