package deon.vosloo.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import deon.vosloo.project.Modals.Student;

public interface StudentRepository extends JpaRepository<Student, Long> 
{
    
}
