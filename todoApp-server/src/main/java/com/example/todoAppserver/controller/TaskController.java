package com.example.todoAppserver.controller;

import com.example.todoAppserver.entity.TaskEntity;
import com.example.todoAppserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private UserService userService;


    @PostMapping("/")
    public ResponseEntity<TaskEntity> createTask(@RequestBody TaskEntity task) {
        TaskEntity newTask = userService.createTask(task);
        return new ResponseEntity<>(newTask, HttpStatus.CREATED);
    }



    @GetMapping("/{taskId}")
    public ResponseEntity<TaskEntity> getTaskById(@PathVariable Long taskId) {
        TaskEntity task = userService.getTaskById(taskId);
        if (task != null) {
            return new ResponseEntity<>(task, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{taskId}")
    public ResponseEntity<TaskEntity> updateTask(@PathVariable Long taskId, @RequestBody TaskEntity task) {
        TaskEntity existingTask = userService.getTaskById(taskId);
        if (existingTask != null) {
            existingTask.setName(task.getName());
            existingTask.setCompleted(task.isCompleted());
            existingTask.setDueDate(task.getDueDate());
            TaskEntity updatedTask = userService.updateTask(existingTask);
            return new ResponseEntity<>(updatedTask, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long taskId) {
        TaskEntity existingTask = userService.getTaskById(taskId);
        if (existingTask != null) {
            userService.deleteTask(taskId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
