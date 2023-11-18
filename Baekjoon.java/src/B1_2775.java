import java.io.IOException;
import java.util.Scanner;

/**
 * 다이나믹 프로그래밍
 * - 거주 조건: a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야함.
 * - k층에 n호에는 몇 명이 살고 있는지 출력하기 (1 ≤ k, n ≤ 14)
 */
class Main {
    static int T,K,N;
    static int[][] arr = new int[15][15];

    // k-1층에 1~n호 살고 있는 사람 수 더하기
    private static int dp(int k, int n) {
        if(k == 0 || arr[k][n] != 0)
            return arr[k][n];

        int sum = 0;
        for(int i=1;i<=n;i++) sum += dp(k-1,i);
        return sum;
    }

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        T = sc.nextInt();

        for(int i=0;i<T;i++) {
            K = sc.nextInt();
            N = sc.nextInt();

            for(int j=1;j<15;j++) arr[0][j] = j;
            System.out.println(dp(K,N));
        }

    }
}

