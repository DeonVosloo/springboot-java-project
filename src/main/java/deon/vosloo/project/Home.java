package deon.vosloo.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.autoconfigure.security.reactive.ReactiveManagementWebSecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.reactive.ReactiveSecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication(exclude = {ReactiveSecurityAutoConfiguration.class, ReactiveManagementWebSecurityAutoConfiguration.class,
    org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class,
    org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration.class })
public class Home {
    public static void main(String[] args) {
        SpringApplication.run(Home.class);
    }

    //the code below is to enable CORS which allows cross origin to work (spring API data can be used in REACT)
    //Each @Mapping annotation must be mapped below if I want there to be no strict-origin-when-cross-origin error in REACT when trying to read that API data in REACT
    // CORS fixes the strict-origin-when-cross-origin error that happens on the client side. CORS must be implemented serverside
    //Below is an example of an global CORS implementation.
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

