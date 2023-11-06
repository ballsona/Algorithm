import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

/**
 * M이상 N이하의 소수를 모두 출력하기 (1 ≤ M ≤ N ≤ 1,000,000)
 */
class S3_1929 {
    static int M,N;
    static boolean[] isNotPrimes;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();

        M = Integer.parseInt(st.nextToken());
        N = Integer.parseInt(st.nextToken());

        isNotPrimes = new boolean[N+100]; // 소수면 false, 소수가 아니면 true

        for(int i=2; i<=N; i++) {
            if(isNotPrimes[i]) continue;

            for(int n=2; n*i <= N; n++) {
                isNotPrimes[i*n] = true;
            }

            if(i >= M && i <= N)
                sb.append(i).append("\n");
        }

        System.out.println(sb);
    }
}