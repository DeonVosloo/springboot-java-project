package deon.vosloo.project.classes.students;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component ()
public class DatabaseLoader implements CommandLineRunner { 

	private final StudentRepository repository;

	@Autowired ()
	public DatabaseLoader(StudentRepository repository) {
		this.repository = repository;
	}


	@Override
	public void run(String... strings) throws Exception { 
		this.repository.save(new Student(3,"Testing 3", "testing address", "testing3@testing.com", "test123"));

	}
}