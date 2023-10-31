import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 브루트포스 방식으로 풀이했던 문제.
 * 2차원 배열의 각 요소들을 순회하며 만약 인근 요소와 값이 다르다면 값을 교체 후,
 * 각 열/행 들의 문자 개수 최댓값을  구해주는 문제였다.
 */
class S2_3085 {
    static String s;
    static int N, m,c,t, max;
    static char[][] candy;
    static char temp;

    // [x1,y1] 좌표와 [x2,y2] 좌표의 값을 바꾸는 함수
    static void swap(int x1, int y1, int x2, int y2) {
        temp = candy[x1][y1];
        candy[x1][y1] = candy[x2][y2];
        candy[x2][y2] = temp;
    }

    // x번째 열이 가지는 최댓값 구하기
    static int findMaxInCol(int x) {
        m = 1; c = 1;
        for(int i=0;i<N-1;i++) {
            if(candy[i][x] == candy[i+1][x]) {
                c++;
                m = Math.max(m,c);
            }
            else c = 1;
        }
        return m;
    }

    // x번째 행이 가지는 최댓값 구하기
    static int findMaxInRow(int x) {
        m = 1; c = 1;
        for(int j=0;j<N-1;j++) {
            if(candy[x][j] == candy[x][j+1]) {
                c++;
                m = Math.max(m,c);
            }
            else c = 1;
        }
        return m;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());

        candy = new char[N][N];
        for(int i=0;i<N;i++) {
            s = br.readLine();
            for(int j=0;j<N;j++){
                candy[i][j] = s.charAt(j);
            }
        }

        for(int i=0;i<N;i++) {
            for(int j=0;j<N;j++) {
                // 행에서 옆 친구랑 바꿔가면서 비교하기
                if(j<N-1 && candy[i][j] != candy[i][j+1]) {
                    swap(i,j,i,j+1);
                    for(int z=0;z<N;z++) {
                        if((t = findMaxInCol(z)) > max)  max = t;
                        if((t = findMaxInRow(z)) > max)  max = t;
                    }
                    swap(i,j+1,i,j);
                }
                // 열에서 옆 친구랑 바꿔가면서 비교하기
                if(i<N-1 && candy[i][j] != candy[i+1][j]) {
                    swap(i,j,i+1,j);
                    for(int z=0;z<N;z++) {
                        if((t = findMaxInRow(z)) > max)  max = t;
                        if((t = findMaxInCol(z)) > max)  max = t;
                    }
                    swap(i+1,j,i,j);
                }
            }
        }
        System.out.println(max);
    }
}