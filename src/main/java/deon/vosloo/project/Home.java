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

