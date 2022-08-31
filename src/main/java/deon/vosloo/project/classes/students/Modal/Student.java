package deon.vosloo.project.classes.students.Modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "student")
public class Student 
{   
    @Id @Column @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String fullName;

    @Column
	private String address;

    @Column
	private String email;

    @Column
    private String password;

    public long getID() {
        return id;
    }

    public void setID(long studentID) {
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

    public Student(long studentID, String fullName, String address, String email, String password) 
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
