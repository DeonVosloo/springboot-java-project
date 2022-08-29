package deon.vosloo.project.classes.students;

import java.util.stream.Stream;

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
        public void run(String... strings) 
        {
            repository.save(new Student("Testing 1", "Testing Address", "testing1@testing", "testing123"));
            repository.save(new Student("Testing 2", "Testing Address", "testing2@testing", "testing123"));
            repository.save(new Student("Testing 3", "Testing Address", "testing3@testing", "testing123"));
            repository.save(new Student("Testing 4", "Testing Address", "testing4@testing", "testing123")); 
            
            // repository.findAll().forEach(System.out::println);
        }; 

}
