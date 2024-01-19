const express = require("express")



const equipmentCtrl = require("../controllers/equipment")

const router = express.Router()

router.get('/', equipmentCtrl.getAllEquipment)

router.post('/', equipmentCtrl.createEquipment)

router.get('/:id', equipmentCtrl.getOneEquipment)

router.put('/:id', equipmentCtrl.modifyEquipment)

router.delete('/:id', equipmentCtrl.deleteEquipment)



module.exports = router