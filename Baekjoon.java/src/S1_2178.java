import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;


/**
 * N×M 크기의 배열. (1,1)에서 (N,M)으로 이동할 때 최단 거리 구하기
 * - 최단 거리는 BFS 기법!
 */
class S1_2178 {
    static int N,M;
    static String[] inputs;

    static int[] dx = {-1,1,0,0};
    static int[] dy = {0,0,-1,1};
    static int[][] arr; // arr[i][j]는 (0,0)에서 (i,j)으로 이동할 때 최단 거리

    private static void bfs() {
        int x,y;
        int[] node;
        int[][] visited = new int[N][M];

        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{0,0});

        while(!queue.isEmpty()) {
            node = queue.poll();
            x = node[0]; y = node[1];
            if(visited[x][y] == 1)
                continue;
            // 노드 방문
            visited[x][y] = 1;
            for(int i = 0; i < 4; i++) {
                int nX = x+dx[i], nY = y+dy[i];
                if(nX >= N || nX < 0 || nY >= M || nY < 0 || arr[nX][nY] == 0)
                    continue;
                else {
                    queue.add(new int[]{nX,nY});
                    if(visited[nX][nY] == 0) {
                        arr[nX][nY] = arr[x][y] + 1;
                    } else {
                        arr[nX][nY] = Math.min(arr[x][y]+1, arr[nX][nY]);
                    }
                }
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        inputs = br.readLine().split(" ");
        N = Integer.parseInt(inputs[0]);
        M = Integer.parseInt(inputs[1]);

        arr = new int[N][M];
        for(int i=0;i<N;i++) {
            inputs = br.readLine().split("");
            arr[i] = Arrays.stream(inputs).mapToInt(Integer::parseInt).toArray();
        }

        bfs();
        System.out.println(arr[N-1][M-1]);
    }
}
