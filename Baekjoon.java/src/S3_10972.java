import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;
import java.util.stream.Stream;

/**
 * 1부터 N까지의 수로 이루어진 순열. 사전순으로 다음에 오는 순열을 구하는 프로그램을 작성해라 (마지막인 경우 -1)
 */
class Main {
    static int N, j;
    static int[] temp, res;


    private static int[] findNextArray(int[] arr) {
        int len = arr.length;
        temp = new int[len];

        for(j=len-1;j>0;j--){
            if(arr[j] > arr[j-1]) {
                int[] slicedArr = Arrays.copyOfRange(arr,j-1, len);
                temp[j-1] = Arrays.stream(slicedArr).filter(n -> n != arr[j-1]).min().getAsInt();
                slicedArr = Arrays.stream(slicedArr).filter(n -> n != temp[j-1]).sorted().toArray();

                for(int i=j;i<len;i++) {
                    temp[i] = slicedArr[i - slicedArr.length];
                }
                break;
            }
        }
        for(int j=0;j<len;j++) {
            if(temp[j] > 0) break;
            temp[j] = arr[j];

        }

        return temp;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());

        String[] inputs = br.readLine().split(" ");
        int[] nums = new int[N];
        for(int i=0;i<N;i++) nums[i] = Integer.parseInt(inputs[i]);

        int b = -1;
        for(int i=0;i<N-1;i++) {
            // 오름차순이 아닌 구간 찾기 (i+1부터)
            if(nums[i] != nums[i+1]-1) {
                if(i != 0)
                    findNextArray(Arrays.copyOfRange(nums, i + 1, nums.length));

                b = i+1;
                break;
            }
        }
        for(int i=0;i<temp.length;i++) {
            System.out.println(temp[i]);
        }
    }
}

// 순열 푸는 법
// 내림차순 배열이 끝나는 지점을 찾기
// 1,2,3,4,5,6 -> 2,3,6,5,4,1
