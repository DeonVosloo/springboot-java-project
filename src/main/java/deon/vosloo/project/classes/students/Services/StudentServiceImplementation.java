package deon.vosloo.project.classes.students.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import deon.vosloo.project.classes.students.DAO.StudentDAO;
import deon.vosloo.project.classes.students.Modal.Student;

@Service
public class StudentServiceImplementation implements StudentService 
{
    @Autowired
    private StudentDAO studentDAO;

    @Transactional
    @Override
    public List<Student> get() 
    {
        return studentDAO.get();
    }

    @Transactional
    @Override
    public Student get(int id) 
    {
        return studentDAO.get(id);
    }

    @Transactional
    @Override
    public void save(Student student) 
    {
        studentDAO.save(student);    
    }

    @Transactional
    @Override
    public void delete(int id) 
    {
        studentDAO.delete(id);   
    }
    
}
