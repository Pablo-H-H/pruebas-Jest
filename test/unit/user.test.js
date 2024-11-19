const userModel = require("../../models/user");

//Prueba para saber si un usuario es adulto
describe("User Model Test", () => {
  it("should be able to return whether the user is adult", () => {
    const user = new userModel({ username: "Pablo", age: 18 });
    expect(user.isAdult()).toBeTruthy();
  });

  it("SHould be able to return whether the user is not addult", () => {
    const user = new userModel({ username: "Pablo", age: 17 });
    expect(user.isAdult()).toBeFalsy();
  });
});
