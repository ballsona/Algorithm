import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 2와 5로 나누어 떨어지지 않는 정수 n이 주어졌을 때, 각 자릿수가 모두 1로만 이루어진 n의 배수 중 가장 작은 수의 자리수
 * 
 * -> 11,111,1111... 이런식으로 반복문을 통해서 풀이를 하니 시간 초과가 뜨고 숫자가 비약적으로 커진다.
 * -> (A+B)%C = ((A%C) + (B%C))%C 라는 모듈러 연산을 활용하여 연산 숫자의 크기를 줄여서 구현에 성공했다. (10430 문제 참고)
 */
class S3_4375 {
    static String s;
    static int n,x,cnt;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while((s = br.readLine()) != null) {
            n = Integer.parseInt(s);
            x = 0; cnt = 1;

            while ((x = (10*x+1)%n) != 0) {
                cnt++;
            }
            System.out.println(cnt);
        }
    }
}
