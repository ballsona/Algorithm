import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 1 ≤ E ≤ 15, 1 ≤ S ≤ 28, 1 ≤ M ≤ 19 일때, 15*x + E  = 28*y + S = 19*z + M 을 만족하는 수를 구하기.
 */
class S5_1476 {
    static int E, S, M, n,c;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] inputs = br.readLine().split(" ");

        E = Integer.parseInt(inputs[0]); // 15
        S = Integer.parseInt(inputs[1]); // 28
        M = Integer.parseInt(inputs[2]); // 19

        c = 0;
        n = S;
        while(n % 15 != (E == 15 ? 0:E) || n % 19 != (M == 19 ? 0:M)) {
            c++;
            n = 28*c+ S;
        }
        System.out.println(n);
    }
}

// 
// 
//