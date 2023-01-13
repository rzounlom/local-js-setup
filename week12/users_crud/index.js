// Users
class User {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }
}

class UserService {
  static url = "https://63c07b07e262345656ffb291.mockapi.io/users";

  static getAllUsers() {
    return $.get(this.url);
  }

  static getUser(id) {
    return $.get(`${this.url}/${id}`);
  }

  static createUser(user) {
    return $.post(this.url, user);
  }

  static updateUser(id, name, title) {
    const data = { name, title };
    console.log("User from update User", data);
    return $.ajax({
      url: `${this.url}/${id}`,
      dataType: "json",
      data: JSON.stringify(data),
      contentType: "application/json",
      type: "PUT",
    });
  }

  static deleteUser(id) {
    return $.ajax({
      url: `${this.url}/${id}`,
      type: "DELETE",
    });
  }
}

class DOMManager {
  static users;

  static getAllUsers() {
    UserService.getAllUsers().then((users) => this.render(users));
  }

  static createUser(name, title) {
    UserService.createUser(new User(name, title))
      .then(() => UserService.getAllUsers())
      .then((users) => this.render(users));
  }

  static updateUser(id, name, title) {
    UserService.updateUser(id, name, title)
      .then(() => UserService.getAllUsers())
      .then((users) => this.render(users));
  }

  static deleteUser(id) {
    UserService.deleteUser(id).then(() =>
      UserService.getAllUsers().then((users) => this.render(users))
    );
  }

  static render(users) {
    this.users = users;
    $("#users").empty();
    for (let user of users) {
      $("#users").prepend(`
        <div class="col-sm-6 col-lg-4" style="margin-top: 15px;">
          <div class="card">
            <img
              src="${user.avatar}"
              class="card-img-top"
              alt="user avatar"
              style="
                width: 200px;
                height: 200px;
                border: 1 px solid black;
                text-align: center;
              "
            />
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">${user.title}</p>
            </div>
          </div>
          <div class="col-sm">
          <div class="row">
            <div class="col-sm">
              <input
                type="text"
                id="${user.id}-update-user-name"
                class="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div class="col-sm">
              <input
                type="text"
                id="${user.id}-update-user-title"
                class="form-control"
                placeholder="Title"
                required
              />
            </div>
            <button id="#${user.id}-update-user" class="btn btn-primary form-control" onclick="updateUser('${user.id}')">
              Update User
            </button>
            <button
              id="delete-user"
              class="btn btn-danger form-control"
              onclick="DOMManager.deleteUser('${user.id}')"
            >
              Delete User
            </button>
          </div>
        </div>
        </div>
        <br />
        `);
    }
  }
}

//create new user
$("#add-new-user").click(() => {
  DOMManager.createUser($("#new-user-name").val(), $("#new-user-title").val());
  $("#new-user-name").val("");
  $("#new-user-title").val("");
});

//update user
function updateUser(id) {
  const name = $(`#${id}-update-user-name`).val();
  const title = $(`#${id}-update-user-title`).val();
  // console.log({
  //   id,
  //   name,
  //   title,
  // });

  DOMManager.updateUser(id, name, title);
}

//get all users on first render
DOMManager.getAllUsers();
