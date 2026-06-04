import java.sql.*;

public class StudentDAO {

    static String url =
            "jdbc:mysql://localhost:3306/studentdb";

    static String user = "root";
    static String password = "root";

    public static void insertStudent(
            int id,
            String name) {

        try {
            Connection con =
                    DriverManager.getConnection(
                            url,user,password);

            PreparedStatement ps =
                    con.prepareStatement(
                            "INSERT INTO students VALUES (?,?)");

            ps.setInt(1,id);
            ps.setString(2,name);

            ps.executeUpdate();

            System.out.println("Inserted");

            con.close();
        }

        catch(Exception e) {
            System.out.println(e);
        }
    }

    public static void main(String[] args) {
        insertStudent(101,"John");
    }
}