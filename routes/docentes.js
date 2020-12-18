const Router = require('express');
const { check } = require('express-validator');
const { getDocentes, getDocentesid, addDocentes, updateDocentes, deleteDocentes } = require('../bml/controllers/docentes');
const { validarCampos } = require('../bml/middlewares/validar-campos');

const router = Router();

router.get('/', getDocentes);
router.get('/:id', getDocentesid);
router.post('/', [
        check('nombre', 'El nombre es requerido').not().isEmpty(),
        check('edad', 'La edad es requerida').not().isEmpty(),
        check('titulo', 'El titulo es requerido').not().isEmpty(),
        check('tipo', 'El tipo es requerido').not().isEmpty(),
        validarCampos
    ],
    addDocentes);
router.put('/:id', [
        check('nombre', 'El nombre es requerido').not().isEmpty(),
        check('edad', 'La edad es requerida').not().isEmpty(),
        check('titulo', 'El titulo es requerido').not().isEmpty(),
        check('tipo', 'El tipo es requerido').not().isEmpty(),
        validarCampos
    ],
    updateDocentes);
router.delete('/:id', deleteDocentes);

module.exports = router;