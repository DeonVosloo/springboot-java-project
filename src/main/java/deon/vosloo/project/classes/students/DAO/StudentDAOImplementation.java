package deon.vosloo.project.classes.students.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import deon.vosloo.project.classes.students.Student;

@Repository
public class StudentDAOImplementation implements StudentDAO 
{
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Student> get() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<Student> query = currSession.createQuery("from student", Student.class);
        List<Student> studentList = query.getResultList();
        return studentList;
    }

    @Override
    public Student get(int id) 
    {
        Session currSession = entityManager.unwrap(Session.class);
        Student student = currSession.get(Student.class, id);
        return student;
    }

    @Override
    public void save(Student student) 
    {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(student);
    }

    @Override
    public void delete(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Student student = currSession.get(Student.class, id);
        currSession.delete(student);
    }
    
}
