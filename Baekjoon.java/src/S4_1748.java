import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 각 자릿수마다 숫자 개수가 몇개인지 구하고 단순히 더해주면 되는 문제
 * 예를 들어 3의 자리수(100~199)가 총 몇개인지 구하려면 3*(10^3 - 10^2) 으로 구하면 된다.
 * 10^n은 반복문으로 10을 n번 곱해줘도 되고, Math,pow(10,n)을 사용할 수도 있다.
 * 
 * 1....9 -> 1*(10-1)
 * 10...99 -> 2*(100-10)
 * 100..120 -> 3*(120-100+1)
 */
class S4_1748 {
    static int N, n,c;
    static double s;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());

        // N이 몇자리 수인지 먼저 구하기
        n = N;
        while(n != 0) {
            n = n / 10;
            c++;
        }

        s = c*(N-Math.pow(10,c-1)+1);
        while((c--) != 0) {
            s += c*(Math.pow(10,c)-Math.pow(10,c-1));
        }
        System.out.println((int)s);
    }
}


