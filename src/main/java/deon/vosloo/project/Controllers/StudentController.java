package deon.vosloo.project.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
    
    @GetMapping()
    public String getPage() 
    {
        return "Welcome";
    }
}
