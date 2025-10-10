const Task = require('../models/Task');

module.exports = {
  async showTasks(req, res) {
    const { status } = req.query;
    let where = {};

    if (status === 'done') where.done = true;
    else if (status === 'pending') where.done = false;

    const tasks = await Task.findAll({ where, raw: true });
    res.render('all', { tasks, status });
  },

  createTask(req, res) {
    res.render('create');
  },

  async saveTask(req, res) {
    await Task.create({
      title: req.body.title,
      description: req.body.description,
      done: false,
      dueDate: req.body.dueDate || null
    });
    res.redirect('/tasks');
  },

  async editTask(req, res) {
    const id = req.params.id;

    const task = await Task.findByPk(id, { raw: true });

    res.render('edit', { task });
  },

  async updateTask(req, res) {
    const done = req.body.done === 'on';
    await Task.update(
      {
        title: req.body.title,
        description: req.body.description,
        done: done,
        dueDate: req.body.dueDate || null
      },
      { where: { id: req.body.id } }
    );
    res.redirect('/tasks');
  },

  async deleteTask(req, res) {
    const id = req.body.id;
    await Task.destroy({ where: { id: id } }); 
    res.redirect('/tasks');
  },
};