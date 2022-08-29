package deon.vosloo.project.classes.students;

import java.util.List;

public interface StudentDOA 
{
    
    List<Student> get();
 
    Student get(int id);
 
    void save(Student employee);
 
    void delete(int id);
}
