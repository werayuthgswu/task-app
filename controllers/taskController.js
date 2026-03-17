const Task = require('../models/Task');

exports.index = (req, res) => {
  const tasks = Task.getAll();
  res.render('index', { tasks });
};

exports.create = (req, res) => {
  const { title, description } = req.body;
  if (title) Task.create(title, description || '');
  res.redirect('/');
};

exports.delete = (req, res) => {
  Task.delete(req.params.id);
  res.redirect('/');
};
