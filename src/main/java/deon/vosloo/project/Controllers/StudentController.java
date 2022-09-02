package deon.vosloo.project.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import deon.vosloo.project.Modals.Student;
import deon.vosloo.project.repository.StudentRepository;

@RestController
@RequestMapping("/api")
public class StudentController 
{
    @Autowired
    private StudentRepository studentRepository;


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

    @PutMapping("/update-student/{id}")
    public String updateStudent(@PathVariable Long id, @RequestBody Student student) 
    {
        Student updateStudent = studentRepository.findById(id).get();

        updateStudent.setFullName(student.getFullName());
        updateStudent.setAddress(student.getAddress());
        updateStudent.setEmail(student.getEmail());
        updateStudent.setPassword(student.getPassword());
        updateStudent.setCourseName(student.getCourseName());

        studentRepository.save(updateStudent);

        return "updated Student";
    }

    @DeleteMapping("/delete-student/{id}")
    public String deleteStudent(@PathVariable Long id) 
    {
        Student deleteStudent = studentRepository.findById(id).get();
        studentRepository.delete(deleteStudent);
        return "Deleted student: " + id + " " + deleteStudent.getFullName();
    }
}
