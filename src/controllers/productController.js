const Product = require("../models/Product");

async function listarProdutos(req, res) {
  try {
    const produtos = await Product.find().sort({ createdAt: -1 });
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function buscarProduto(req, res) {
  try {
    const produto = await Product.findById(req.params.id);

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function buscarProdutos(req, res) {
  const termo = String(req.query.termo || "").trim();

  if (!termo) {
    return res.status(400).json({ mensagem: "Informe um nome ou ID para buscar" });
  }

  const termoEscapado = termo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const filtros = [{ nome: { $regex: termoEscapado, $options: "i" } }];

  if (/^[a-f\d]{24}$/i.test(termo)) {
    filtros.push({ _id: termo });
  }

  try {
    const produtos = await Product.find({ $or: filtros }).sort({ createdAt: -1 });
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function criarProduto(req, res) {
  try {
    const produto = await Product.create(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarProduto(req, res) {
  try {
    const produto = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function excluirProduto(req, res) {
  try {
    const produto = await Product.findByIdAndDelete(req.params.id);

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarProdutos,
  buscarProdutos,
  buscarProduto,
  criarProduto,
  atualizarProduto,
  excluirProduto
};