package com.example.todoAppserver.service;

import com.example.todoAppserver.entity.TaskEntity;
import com.example.todoAppserver.entity.UserEntity;

import java.util.List;

public interface UserService {

    UserEntity createUser(UserEntity user);

    UserEntity updateUser(UserEntity user);


    void deleteUser(Long id);

    UserEntity getUserById(Long id);

    UserEntity getUserByUsername(String username);

    TaskEntity createTask(TaskEntity task);

    TaskEntity updateTask(TaskEntity task);

    void deleteTask(Long id);

    TaskEntity getTaskById(Long id);

    List<TaskEntity> getTasksByUserId(Long userId);
}

