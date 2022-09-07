package deon.vosloo.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import deon.vosloo.project.Modals.Login;

public interface LoginRepository extends JpaRepository<Login, Long> {
    
}
