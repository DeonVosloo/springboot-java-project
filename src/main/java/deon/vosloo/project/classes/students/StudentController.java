package deon.vosloo.project.classes.students;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;


@RestController
@RequestMapping("/api")
public class StudentController {
    
    private final Logger log = LoggerFactory.getLogger(StudentController.class);

    private StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping("/students")
    Collection<Student> Students() 
    {
        return studentRepository.findAll();
    }
    
    @GetMapping("/students/{id}")
    ResponseEntity<?> getStudent(@PathVariable Long id) {
        Optional<Student> student = studentRepository.findById(id);
        return student.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/student")
    ResponseEntity<Student> createGroup(@Valid @RequestBody Student student) throws URISyntaxException {
        log.info("Request to create student: {}", student);
        Student result = studentRepository.save(student);
        return ResponseEntity.created(new URI("/api/group/" + result.getID()))
                .body(result);
    }

    @PutMapping("/student/{id}")
    ResponseEntity<Student> updateGroup(@Valid @RequestBody Student student) {
        log.info("Request to update student: {}", student);
        Student result = studentRepository.save(student);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/student/{id}")
    public ResponseEntity<?> deleteGroup(@PathVariable Long id) {
        log.info("Request to delete student: {}", id);
        studentRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
