package deon.vosloo.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class Home {
    public static void main(String[] args) {
        SpringApplication.run(Home.class);
    }

    //the code below is to enable CORS which allows strict-origin-when-cross-origin to work (spring API data can be used in REACT)
    //Each @Mapping annotation must be mapped below if I want there to be no strict-origin-when-cross-origin error in REACT when trying to read that API data in REACT
    @Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/students").allowedOrigins("http://localhost:8081");
                registry.addMapping("/api/save-student").allowedOrigins("http://localhost:8081");
                registry.addMapping("/api/update-student/{id}").allowedOrigins("http://localhost:8081");
                registry.addMapping("/api/delete-student/{id}").allowedOrigins("http://localhost:8081");
			}
		};
	}
}

