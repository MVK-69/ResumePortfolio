package com.vinay.portfolio_backend.controller;
import java.util.List;
import com.vinay.portfolio_backend.model.Project;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinay.portfolio_backend.service.ProjectService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/projects")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {

    private final ProjectService projectService;
    
    @GetMapping
    public List<Project> getProjects() {
        return projectService.getAllProjects();
    }
}
