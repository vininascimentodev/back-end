const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.listarProdutos);
router.get("/buscar", productController.buscarProdutos);
router.get("/:id", productController.buscarProduto);
router.post("/", productController.criarProduto);
router.put("/:id", productController.atualizarProduto);
router.delete("/:id", productController.excluirProduto);

module.exports = router;