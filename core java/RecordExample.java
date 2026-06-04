import java.util.List;

record Person(
        String name,
        int age) {}

public class RecordExample {

    public static void main(String[] args) {

        Person p1 =
                new Person("John",20);

        Person p2 =
                new Person("David",30);

        System.out.println(p1);
        System.out.println(p2);

        List<Person> people =
                List.of(p1,p2);

        people.stream()
                .filter(p -> p.age() > 25)
                .forEach(System.out::println);
    }
}