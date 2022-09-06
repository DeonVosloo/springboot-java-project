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

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

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

    @GetMapping("/student/{id}")
    public Student getStudent(@PathVariable Long id) 
    {
        return studentRepository.findById(id).get();
    }

    @GetMapping("/login")
    public boolean CheckIfLoginValid(@RequestBody String email, @RequestBody String password) 
    {
        boolean isValid = false;
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String tempPassword = passwordEncoder.encode(password); 

        List<Student> studentList = studentRepository.findAll();

        for (Student student : studentList) {
            if (email.equals(student.getEmail())  && tempPassword.equals(student.getPassword())) {
                isValid = true;
            }
        }

        return isValid;
    }

    @PostMapping("/save-student")
    public void saveStudent(@RequestBody Student student) {
        studentRepository.save(student);
    }

    @PutMapping("/update-student/{id}")
    public void updateStudent(@PathVariable Long id, @RequestBody Student student) 
    {
        Student updateStudent = studentRepository.findById(id).get();

        updateStudent.setFullName(student.getFullName());
        updateStudent.setAddress(student.getAddress());
        updateStudent.setEmail(student.getEmail());
        updateStudent.setPassword(student.getPassword());
        updateStudent.setCourseName(student.getCourseName());

        studentRepository.save(updateStudent);
    }

    @DeleteMapping("/delete-student/{id}")
    public void deleteStudent(@PathVariable Long id) 
    {
        Student deleteStudent = studentRepository.findById(id).get();
        studentRepository.delete(deleteStudent);
    }
}
