import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

/**
 * 1부터 N까지의 수로 이루어진 순열. 사전 순으로 바로 이전 오는 순열을 구하는 프로그램을 작성해라 (마지막인 경우 -1)
 */
class Main {
    static int N;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        N = Integer.parseInt(br.readLine());

        String[] inputs = br.readLine().split(" ");
        int[] nums = new int[N];
        for (int i = 0; i < N; i++) nums[i] = Integer.parseInt(inputs[i]);

        int n = N;

        // 오른쪽부터 배열을 순회하며, 내림차순이 끊기는 구간을 찾는다.
        // 예를 들어 순열이 [1,2,5,4,3] 이라면 1,2 / 5,4,3 으로 구간을 나눌 수 있으므로 n = 1 이다.
        for (int i = N - 1; i > 0; i--) {
            if (nums[i] > nums[i - 1]) {
                n = i - 1;
                break;
            }
        }

        // 만약 n이 N이라면, 즉 순열의 모든 요소가 내림차순으로 정렬되어 있다면 -1을 출력한다.
        if (n == N) {
            System.out.println(-1);
            return;
        }

        // 내림차순인 구간을 오른쪽부터 순회하며 n에 해당하는 값보다 큰 값을 찾으면 두 값을 바꿔준다.
        // 예를 들어 [1,2,5,4,3]인 경우 n에 해당하는 수 2와 배열 마지막에 위치하고 있는 3을 바꾸게 된다. -> [1,3,5,4,2]
        // 즉 n 이후의 숫자들이 모두 내림차순이라는 건, 사전순으로 정렬했을 때 다음으로 올 숫자에서 n의 값이 증가해야한다는 것을 의미한다.
        for (int i = N - 1; i > n; i--) {
            if (nums[i] > nums[n]) {
                int temp = nums[i];
                nums[i] = nums[n];
                nums[n] = temp;
                break;
            }
        }

        // 1부터 n까지의 값(1,3) 은 그대로 출력하고, 이후의 값은 오름차순으로 정렬(2,4,5)하여 출력한다. -> [1,3,2,4,5] 출력
        for (int i = 0; i <= n; i++) {
            sb.append(nums[i]).append(" ");
        }
        int[] sortedNums = Arrays.stream(Arrays.copyOfRange(nums, n + 1, nums.length)).sorted().toArray();
        for (int i = 0; i < sortedNums.length; i++) {
            sb.append(sortedNums[i]).append(" ");
        }

        System.out.println(sb);
    }
}