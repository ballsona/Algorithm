import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;


//    정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.
//
//        - X가 3으로 나누어 떨어지면, 3으로 나눈다.
//        - X가 2로 나누어 떨어지면, 2로 나눈다.
//        - 1을 뺀다.
//        정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

/**
 * 1로 만들기. 다이나믹 프로그래밍
 *
 */
class Main {
    static int X;
    static long[] nums;
    private static int dp(int n, int count) {
        if(n < 2) return count;

        return Math.min(dp(n/2, count+1+(n%2)), dp(n/3, count+1+(n%3)));
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        X = Integer.parseInt(br.readLine());
        System.out.println(dp(X,0));
    }
}

// 1부터 X까지 담은 배열을 만든다.
// 2부터 순회하면서 해당 숫자가 1로 갈 수 있는 방법의 최소횟수를 배열에 넣는다.