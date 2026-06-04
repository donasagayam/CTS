import java.util.ArrayList;
import java.util.Collections;

public class LambdaExample {

    public static void main(String[] args) {

        ArrayList<String> list =
                new ArrayList<>();

        list.add("Orange");
        list.add("Apple");
        list.add("Banana");
        list.add("Mango");

        Collections.sort(
                list,
                (a,b) -> a.compareTo(b));

        System.out.println(list);
    }
}   