package deon.vosloo.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import deon.vosloo.project.Modals.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    
}
