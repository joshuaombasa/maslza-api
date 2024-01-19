const express = require("express")


const router = express.Router()

const vendorCtrl = require("../controllers/vendors")


router.get('/', vendorCtrl.getAllVendors)

router.get('/:id', vendorCtrl.getOneVendor)

router.post('/', vendorCtrl.createVendor)

router.put('/:id', vendorCtrl.modifyVendor)

router.delete('/:id', vendorCtrl.removeVendor)

module.exports = router

