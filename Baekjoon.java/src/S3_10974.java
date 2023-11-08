import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

/**
 * N(1 ≤ N ≤ 8)이 주어졌을 때, 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력 (마지막인 경우 -1)
 */
class S3_10974 {
    static int N, n;
    static int[] res;
    static StringBuilder sb;

    // 다음으로 올 숫자를 생성하는 함수 (10972 참고)
    private static int[] getNextArray(int[] nums) {
        res = new int[N];

        for (int i = N - 1; i > 0; i--) {
            if (nums[i] > nums[i - 1]) {
                n = i - 1;
                break;
            }
        }
        for (int i = N - 1; i > n; i--) {
            if (nums[i] > nums[n]) {
                int temp = nums[i];
                nums[i] = nums[n]; nums[n] = temp;
                break;
            }
        }

        for (int i = 0; i <= n; i++) {
            res[i] = nums[i];
        }
        int[] sortedNums = Arrays.stream(Arrays.copyOfRange(nums, n + 1, nums.length)).sorted().toArray();
        for (int i = 0; i < sortedNums.length; i++) {
            res[i+n+1] = sortedNums[i];
        }

        return res;
    }

    private static void printArray(int[] nums) {
        sb = new StringBuilder();
        for(int i=0;i<N;i++) {
            sb.append(nums[i]).append(" ");
        }
        System.out.println(sb);
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        int[] inputs = new int[N];

        int c = 1;
        for (int i = 1; i <= N; i++) {
            inputs[i-1] = i;
            c *= i;
        }

        int[] temp = inputs;
        while(c > 0) {
            printArray(temp);
            temp = getNextArray(temp);
            c--;
        }
    }
}