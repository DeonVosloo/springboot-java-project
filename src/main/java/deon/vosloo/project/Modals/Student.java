package deon.vosloo.project.Modals;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Student 
{
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String fullName;

    @Column
    private String address;

    @Column
    private String email;

    @Column
    private String password;

    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {  
        this.password = password;
    }
    public Student(long id, String fullName, String address, String email, String password) {
        this.id = id;
        this.fullName = fullName;
        this.address = address;
        this.email = email;
        this.password = password;
    }

    public Student(String fullName, String address, String email, String password) {
        this.fullName = fullName;
        this.address = address;
        this.email = email;
        this.password = password;
    }

    
}
