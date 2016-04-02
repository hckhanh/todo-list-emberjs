export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */

  let todos = [
    {
      type: 'todos',
      id: "1",
      attributes: {
        content: 'Make the todo-list app using EmberJS',
        checked: false
      }
    },
    {
      type: 'todos',
      id: "2",
      attributes: {
        content: 'Rework with Chat App website using EmberJS',
        checked: false
      }
    },
    {
      type: 'todos',
      id: "3",
      attributes: {
        content: 'Integrate customer assistant',
        checked: false
      }
    },
    {
      type: 'todos',
      id: "4",
      attributes: {
        content: 'Make Sunshine app',
        checked: false
      }
    },
    {
      type: 'todos',
      id: "5",
      attributes: {
        content: 'Make Pearson Diary app',
        checked: false
      }
    }
  ];

  this.get('/todos', () => {
    return {data: todos};
  });

  this.post('/todos', (db, req) => {
    let todo = JSON.parse(req.requestBody);
    todo.data.id = (+todos[todos.length - 1].id + 1).toString();
    todos.push(todo.data);
    return todo;
  });

  this.patch('/todos/:id', (db, req) => {
    var updateTodo = JSON.parse(req.requestBody).data;
    for (var todo of todos) {
      if (todo.id === updateTodo.id) {
        todo.attributes.checked = updateTodo.attributes.checked;
        return {data: updateTodo};
      }
    }
  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
