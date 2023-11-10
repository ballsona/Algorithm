import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * [다이나믹 프로그래밍]
 *  2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램
 *  첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력
 */
class Main {
    static int X;
    static long sum;
    private static long dp(int n, int div) {

        sum = 1;
        for(int i=1;i<=n;i++) {
            sum += dp(i, div-1);
        }
        return sum;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        X = Integer.parseInt(br.readLine());

       int sum = X-1; int cnt = 1;

       for(int i=X-4;i>0;i=i-2) {
           sum += (cnt *(2*i+1)) % 10007;
       }

        System.out.println(sum % 10007);
    }
}
