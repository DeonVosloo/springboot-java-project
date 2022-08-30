package deon.vosloo.project.classes.students;

import java.util.List;

public interface StudentDAO 
{
    List<Student> get();
 
    Student get(int id);
    
    void save(Student student);
    
    void delete(int id);

}