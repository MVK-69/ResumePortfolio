package com.vinay.portfolio_backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.vinay.portfolio_backend.model.Project;
import com.vinay.portfolio_backend.repository.ProjectRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
}
