package deon.vosloo.project.classes.students;

import org.springframework.data.repository.CrudRepository;

import deon.vosloo.project.classes.students.Student;

public interface StudentRepository extends CrudRepository<Student, Long> 
{ 

}
