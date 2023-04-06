# TO-DO Web App Server-Side Controllers

The server-side controllers of the TO-DO Web App are responsible for handling incoming requests and sending responses back to the client. There are two controllers: UserController and TaskController.

## UserController
**UserController** is responsible for handling user-related requests such as registering a new user, logging in, getting user information, updating user information, and deleting a user account. Here are the endpoints available in the UserController:

**POST /users/register:** This endpoint is used to register a new user. It accepts a JSON payload containing the user details and returns a response with the newly created user entity.

**POST /users/login:** This endpoint is used to log in a user. It accepts a JSON payload containing the user credentials and returns a response with the user entity if the credentials are valid.

**GET /users/{userId}:** This endpoint is used to get user information by ID. It accepts a user ID as a path variable and returns a response with the user entity if it exists.

**PUT /users/{userId}:** This endpoint is used to update user information. It accepts a user ID as a path variable and a JSON payload containing the updated user details. It returns a response with the updated user entity if the user exists.

**DELETE /users/{userId}:** This endpoint is used to delete a user account. It accepts a user ID as a path variable and returns a response with no content if the user account was successfully deleted.

**GET /users/{userId}/tasks:** This endpoint is used to get all the tasks of a user. It accepts a user ID as a path variable and returns a response with a list of all the tasks associated with that user.

## TaskController
**TaskController** is responsible for handling task-related requests such as creating a new task, getting a task by ID, updating a task, and deleting a task. Here are the endpoints available in the TaskController:

**POST /tasks/:** This endpoint is used to create a new task. It accepts a JSON payload containing the task details and returns a response with the newly created task entity.

**GET /tasks/{taskId}:** This endpoint is used to get task information by ID. It accepts a task ID as a path variable and returns a response with the task entity if it exists.

**PUT /tasks/{taskId}:** This endpoint is used to update task information. It accepts a task ID as a path variable and a JSON payload containing the updated task details. It returns a response with the updated task entity if the task exists and the user ID in the payload matches the user ID associated with the task.

**DELETE /tasks/{taskId}:** This endpoint is used to delete a task. It accepts a task ID as a path variable and returns a response with no content if the task was successfully deleted.

Note that all endpoints return appropriate HTTP status codes to indicate the success or failure of the request.

