const express = require('express');
const { createArticle, getArticles, getArticleById, updateArticle, deleteArticle } = require('../controller/article.controller');
const isAuth = require('../config/auth');


const router = express.Router();

router.post('/create', isAuth, createArticle);
router.get('/get-all', isAuth, getArticles);
router.get('/get/:id', isAuth, getArticleById);
router.put('/update/:id', isAuth, updateArticle);
router.delete('/delete/:id', isAuth, deleteArticle);

module.exports = router;