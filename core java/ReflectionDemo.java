import java.lang.reflect.Method;

class Sample {

    public void show() {
        System.out.println(
                "Reflection Example");
    }
}

public class ReflectionDemo {

    public static void main(String[] args)
            throws Exception {

        Class<?> c =
                Class.forName("Sample");

        Object obj =
                c.getDeclaredConstructor()
                        .newInstance();

        Method[] methods =
                c.getDeclaredMethods();

        for(Method m : methods) {

            System.out.println(
                    m.getName());

            m.invoke(obj);
        }
    }
}