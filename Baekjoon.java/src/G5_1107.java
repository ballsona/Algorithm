import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 첫째줄에는 이동해야할 채널 N(0<=N<=500,000)이 주어지고, 셋째줄에는 0~9 중 고장난 숫자 버튼이 주어진다.
 * 100번에서 N번으로 채널을 이동할 때 버튼을 눌러야할 최소 횟수
 * -> 브루트포스 알고리즘
 */
class Main {
    static int m,i,j, target, cnt;
    static String s, brokens;
    static boolean[] buttons;


    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 이동하려는 채널 target
        s = br.readLine();
        target = Integer.parseInt(s);


        // 0~9 까지의 숫자 버튼 사용 가능한 지에 대한 여부 (true면 사용 가능)
        m = Integer.parseInt(br.readLine());
        buttons = new boolean[10];

        if(m == 0) {
            for(i=0;i<10;i++) {
                buttons[i] = true;
            }
        } else {
            brokens = br.readLine();
            for(i=0;i<10;i++) {
                buttons[i] = !brokens.contains(String.valueOf(i));
            }
        }

        // +/- 버튼만 이용해서 이동하는 경우
        cnt =  Math.abs(target - 100);

        // target의 근사치를 입력한 후, +/- 버튼으로 이동하는 경우
        String str;  boolean isAvailable;
        for(i=0;i<999999;i++) {
            str = String.valueOf(i);
            isAvailable = true;

            for(j=0;j<str.length();j++) {
                // 고장난 버튼을 포함한 숫자라면 pass
                if(!buttons[str.charAt(j)-'0']) {
                    isAvailable = false; break;
                }
            }
            if(isAvailable) {
                cnt = Math.min(cnt, str.length() + Math.abs(target - i));
            }
        }

        System.out.println(cnt);
    }
}
