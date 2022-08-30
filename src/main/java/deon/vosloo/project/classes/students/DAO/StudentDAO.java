package deon.vosloo.project.classes.students.DAO;

import java.util.List;

import deon.vosloo.project.classes.students.Modal.Student;

public interface StudentDAO 
{
    List<Student> get();
 
    Student get(int id);
    
    void save(Student student);
    
    void delete(int id);

}