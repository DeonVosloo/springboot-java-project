package deon.vosloo.project.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import deon.vosloo.project.Modals.Student;
import deon.vosloo.project.repository.StudentRepository;

@RestController
public class StudentController 
{
    private StudentRepository studentRepository;

    @GetMapping("/")
    public String getPage() 
    {
        return "Welcome";
    }

    @GetMapping("/students")
    public List<Student> getStudents() 
    {
        return studentRepository.findAll();
    }

    @PostMapping("/save-student")
    public String saveStudent(@RequestBody Student student) {
        studentRepository.save(student);
        return "Student saved to database";
    }
}
