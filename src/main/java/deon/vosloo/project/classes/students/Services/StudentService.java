package deon.vosloo.project.classes.students.Services;

import java.util.List;

import deon.vosloo.project.classes.students.Modal.Student;

public interface StudentService {
    List<Student> get();
 
    Student get(int id);
    
    void save(Student student);
    
    void delete(int id);
}
