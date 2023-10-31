import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class B2_1978 {
    static int N;
    static int count = 0;

    private static boolean isPrime(int num) {
        if(num == 2 || num == 3) return true;
        if(num < 2 || num % 2 == 0 || num % 3 == 0) return false;
        for(int j=4; j<num; j++) {
            if(num % j == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        String[] inputs = br.readLine().split(" ");

        for(int i=0;i<N;i++) {
            int num = Integer.parseInt(inputs[i]);
            if(isPrime(num)) count++;
        }
        System.out.println(count);
    }
}
