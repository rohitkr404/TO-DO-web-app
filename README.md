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


# TODO App - Client Side
This is a client-side Angular application for a TODO app. The UI is composed of multiple components:

**Login Component:** A form to allow users to log in to the app.
**Register Component:** A form to allow new users to create an account.
**Task List Component:** Displays a list of tasks for the logged-in user.
**Task Form Component:** A form to add or update a task.
## Login Component
The LoginComponent contains a form to allow users to log in to the app. The form contains two fields: username and password. If the user is authenticated successfully, the application stores the user's data in the local storage and navigates to the Task List Component.


## Register Component
The RegisterComponent contains a form to allow new users to create an account. The form contains two fields: username and password. If the user is registered successfully, the application logs a message to the console and navigates to the Login Component.


## Task List Component
The TaskListComponent displays a list of tasks for the logged-in user. It fetches the tasks for the user from the server and displays them in a table. Users can also add a new task, edit or delete an existing task.


## Task Form Component
The TaskFormComponent is a form to add or update a task. It is used in two scenarios:

To add a new task: The form contains three fields: name, description, and dueDate.
To update an existing task: The form is pre-populated with the details of the task to be updated. The user can edit any of the fields.

## Services
The application uses the following services:

**Auth Service:** This service handles user authentication and registration.

**User Service:** This service handles CRUD operations for tasks.

