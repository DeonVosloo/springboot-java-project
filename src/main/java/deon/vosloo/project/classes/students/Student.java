package deon.vosloo.project.classes.students;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "student")
public class Student 
{   
    @Id
    private int id;
    private String fullName;
	private String address;
	private String email;
    private String password;

    public int getStudentID() {
        return id;
    }

    public void setStudentID(int studentID) {
        this.id = studentID;
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

    public Student(int studentID, String fullName, String address, String email, String password) 
    {
        this.id = studentID;
        this.fullName = fullName;
        this.address = address;
        this.email = email;
        this.password = password;
    }

    public Student(String fullName, String address, String email, String password) 
    {
        this.fullName = fullName;
        this.address = address;
        this.email = email;
        this.password = password;
    }

    @Override
    public String toString() {
        return "Student{" +
			"id=" + id +
			", firstName='" + fullName + '\'' +
			", address='" + address + '\'' +
			", email='" + email + '\'' +
            ", password='" + password + '\'' +
			'}';

    }

}
