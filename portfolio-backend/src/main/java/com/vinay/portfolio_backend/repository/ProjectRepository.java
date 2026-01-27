package com.vinay.portfolio_backend.repository;
import com.vinay.portfolio_backend.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface  ProjectRepository extends JpaRepository<Project, Long> {
    
}
