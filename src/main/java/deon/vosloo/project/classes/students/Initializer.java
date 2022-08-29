package deon.vosloo.project.classes.students;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Initializer implements CommandLineRunner
{

    private final StudentRepository repository;

    public Initializer(StudentRepository repository) 
    {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception 
    {
        this.repository.save(new Student("Testing Name", "Testing Address", "Testing Email","testing"));    
    }
}
