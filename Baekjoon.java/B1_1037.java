import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

class B1_1037 {
    static int C, max, min;

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        C = Integer.parseInt(br.readLine());

        String[] inputs = br.readLine().split(" ");
        int[] divs = new int[C];
        
        for(int i=0;i<C;i++) {
            divs[i] = Integer.parseInt(inputs[i]);
        }

        max = Arrays.stream(divs).max().orElse(0);
        min = Arrays.stream(divs).min().orElse(0);
        System.out.println(max*min);
    }
}

// N의 약수의 개수와 약수들을 가지고 N을 구하기 -> 약수 중 최솟값*최댓값