const mongoose = require("mongoose");
const Article = require("../models/article.models");

// Create a new article
exports.createArticle = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const existingArticle = await Article.findOne({
      title,
      user: req.user.id,
    });

    if (existingArticle) {
      return res.status(400).json({ message: "Article already exists" });
    }

    const article = await Article.create({
      title,
      content,
      user: req.user.id,
    });

    return res.status(201).json(article);
  } catch (e) {
    console.error("Error in creating article:", e);
    res.status(500).json({ message: "Error creating article" });
  }
};

// Get all articles
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate("user", "name email");

    return res.status(200).json(articles);
  } catch (e) {
    console.e("Error fetching articles:", e);
    return res.status(500).json({ message: "Failed to fetch articles" });
  }
};

// Get article by ID
exports.getArticleById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid article ID" });
    }

    const article = await Article.findById(id).populate("user", "name");

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    return res.status(200).json(article);
  } catch (e) {
    console.error("Error fetching article by ID:", e);
    return res.status(500).json({ message: "Failed to fetch article" });
  }
};

// Update an article
exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    if (article.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    article.title = req.body.title || article.title;
    article.content = req.body.content || article.content;

    const updatedArticle = await article.save();

    return res.status(200).json(updatedArticle);
  } catch (e) {
    console.error("Error updating article:", e);
    return res.status(500).json({ message: "Failed to update article" });
  }
};

// Delete an article
exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    if (article.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await article.deleteOne();

    return res.status(200).json({ message: "Article deleted" });
  } catch (e) {
    console.error("Error deleting article:", e);
    return res.status(500).json({ message: "Failed to delete article" });
  }
};

