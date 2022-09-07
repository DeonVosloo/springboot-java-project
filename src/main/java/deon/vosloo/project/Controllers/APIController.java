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

import deon.vosloo.project.Modals.Admin;
import deon.vosloo.project.Modals.Login;
import deon.vosloo.project.Modals.Student;
import deon.vosloo.project.repository.AdminRepository;
import deon.vosloo.project.repository.LoginRepository;
import deon.vosloo.project.repository.StudentRepository;


@RestController
@RequestMapping("/api")
public class APIController 
{
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private LoginRepository loginRepository;


    @GetMapping("/students")
    public List<Student> getStudents() 
    {
        return studentRepository.findAll();
    }

    @GetMapping("/get-admins")
    public List<Student> getAdmins() 
    {
        return studentRepository.findAll();
    }

    @GetMapping("/student/{id}")
    public Student getStudent(@PathVariable Long id) 
    {
        return studentRepository.findById(id).get();
    }

    @GetMapping("/login")
    public List<Login> getLogins() 
    {
        return loginRepository.findAll();
    }

    @PostMapping("/save-login")
    public void saveLogin(@RequestBody Login login) {
        loginRepository.save(login);
    }

    @PostMapping("/save-admin")
    public void saveAdmin(@RequestBody Admin admin) {
        adminRepository.save(admin);
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

    @PutMapping("/update-login/{id}")
    public void updateLogin(@PathVariable Long id, @RequestBody Login login) 
    {
        Login updateLogin = loginRepository.findById(id).get();
        updateLogin.setEmail(login.getEmail());
        updateLogin.setPassword(login.getPassword());
        updateLogin.setaccountType(login.getaccountType());

        loginRepository.save(updateLogin);
    }

    @DeleteMapping("/delete-login/{id}")
    public void deleteLogin(@PathVariable Long id) 
    {
        Login deletelogin = loginRepository.findById(id).get();
        loginRepository.delete(deletelogin);
    }

    @PutMapping("/update-admin/{id}")
    public void updateAdmin(@PathVariable Long id, @RequestBody Admin admin) 
    {
        Admin updateAdmin = adminRepository.findById(id).get();
        updateAdmin.setEmail(admin.getEmail());
        updateAdmin.setPassword(admin.getPassword());
        updateAdmin.setAdminName(admin.getAdminName());

        adminRepository.save(updateAdmin);
    }

    @DeleteMapping("/delete-admin/{id}")
    public void deleteAdmin(@PathVariable Long id) 
    {
        Admin deletelogin = adminRepository.findById(id).get();
        adminRepository.delete(deletelogin);
    }
}
