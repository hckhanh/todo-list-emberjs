import Ember from 'ember';

export default Ember.Controller.extend({
  content: null,
  actions: {
    addTodo() {
      let content = this.get('content');
      let todo = this.store.createRecord('todo', {
        content: content,
        checked: false
      });
      todo.save();
    },
    onTodoChange(todo) {
      todo.save();
    }
  }
});
