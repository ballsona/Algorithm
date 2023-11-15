import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

/**
 * DFS and BFS
 * - 컴퓨터 여러대가 네트워크로 연결되어 있을 때, 1번 컴퓨터가 바이러스 걸리면 같이 걸리게 되는 컴퓨터 개수
 * - DFS -> Stack 사용
 * - BFS -> Queue 사용
 * */
class S3_2606 {
    static int N,M, s,d;
    static String[] inputs;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine()); // node 개수
        M = Integer.parseInt(br.readLine()); // edge 개수

        LinkedList[] nodes = new LinkedList[N];
        for(int i=0;i<N;i++) nodes[i] = new LinkedList<Integer>();
        for(int i=0;i<M;i++) {
            inputs = br.readLine().split(" ");
            s = Integer.parseInt(inputs[0]);
            d = Integer.parseInt(inputs[1]);
            nodes[s-1].add(d);
            nodes[d-1].add(s);
        }

        System.out.println(dfs(nodes));
        System.out.println(bfs(nodes));

    }

    static int p;
    private static int dfs(LinkedList<Integer>[] nodes) {
        int[] visited = new int[N];
        Stack<Integer> stack = new Stack<>();
        stack.add(0); // 1번 컴퓨터 바이러스 걸림

        while(!stack.isEmpty()){
            p = stack.pop();
            if(visited[p] == 1)
                continue;
            visited[p] = 1;
            for(Integer adj_node: nodes[p]) {
                if(visited[adj_node-1] != 1) stack.add(adj_node-1);
            }
        }
        return Arrays.stream(visited).filter(v -> v==1).sum() - 1;
    }
    private static int bfs(LinkedList<Integer>[] nodes) {
        int[] visited = new int[N];
        Queue<Integer> queue = new LinkedList<>();
        queue.add(0); // 1번 컴퓨터 바이러스 걸림

        while(!queue.isEmpty()){
            p = queue.poll();
            if(visited[p] == 1)
                continue;
            visited[p] = 1;
            for(Integer adj_node: nodes[p]) {
                if(visited[adj_node-1] != 1) queue.add(adj_node-1);
            }
        }
        return Arrays.stream(visited).filter(v -> v==1).sum() - 1;
    }
}
