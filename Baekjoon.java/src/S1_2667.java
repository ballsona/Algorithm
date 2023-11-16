import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.*;

/**
 * 0과1로 구성 되어 있는 지도 배열. 1이 집 의미할 때, 단지 개수 + 집 개수 오름차순 정렬 후 출력
 * - 재귀 방식으로 DFS 구현. 가능한 계속 dfs() 호출하다가. 더이상 호출할 애 없을 때 멈추기.
 *
 * */
class Main {
    static int N,sum;
    static String[] inputs;
    static int[][] map, visited;


    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine()); // N*N 배열

        map = new int[N][N];
        visited = new int[N][N];
        for(int i=0;i<N;i++) {
            inputs = br.readLine().split("");
            map[i] = Arrays.stream(inputs).mapToInt(Integer::parseInt).toArray();
        }
        sum = 1;
        ArrayList<Integer> houses = new ArrayList<>();
        for(int i=0;i<N;i++) {
            for(int j=0;j<N;j++) {
                if(map[i][j] == 1 && visited[i][j] == 0) {
//                    houses.add(dfs(i,j,1));

                    System.out.println(dfs(i,j));
                    System.out.println(i+" "+j);
                }
            }
        }
        for(int i=0;i<N;i++) {
            for(int j=0;j<N;j++) {
                System.out.print(map[i][j]+" ");
            }
            System.out.println();
        }
    }

    static int[] dx = {-1,1,0,0};
    static int[] dy = {0,0,-1,1};
    static int nx, ny;

    private static int dfs(int x, int y) {
        map[x][y] = sum++;
        visited[x][y] = 1;
        for(int i=0;i<4;i++) {
            nx = x+dx[i]; ny = y+dy[i];
            if(nx >= 0 && nx < N && ny >= 0 && ny < N
                    && map[nx][ny] != 0 && visited[nx][ny] != 1)
                return dfs(nx,ny);
        }
        System.out.println("??");
        return sum;
    }
}
