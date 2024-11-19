const TodoController = require("../../controllers/todo_controller");
const TodoModel = require("../../models/todo_model");
const newTask = require("../mockups/todo_mockup.json");
const httpMocks = require("node-mocks-http");

TodoModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
  res = httpMocks.createResponse();
  req = httpMocks.createRequest();
  next = null;
});

// Prueba metodo Create en el controlador
describe("Test Create method exists in controller", () => {
  it("Should have a create method", () => {
    expect(typeof TodoController.todoCreate).toBe("function");
  });

  // test the create method
  it("Should call todoModel.create", () => {
    req.body = newTask;
    TodoController.todoCreate(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTask);
  });

  // test the status code
  it("Should return 201 status code", () => {
    req.body = newTask;
    TodoController.todoCreate(req, res, next);
    expect(res.statusCode).toBe(201);
  });
});
