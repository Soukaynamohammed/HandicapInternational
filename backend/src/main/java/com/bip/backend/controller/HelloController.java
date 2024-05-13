package com.bip.backend.controller;

import com.bip.backend.entity.Message;
import com.bip.backend.repository.MessageRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class HelloController {

    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("/")
    public String sayHello() {

       return "index";
    }
}