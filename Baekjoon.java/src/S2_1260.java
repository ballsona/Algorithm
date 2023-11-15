import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.Queue;


/**
 * DFS and BFS
 * - 주어진 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과 순서 대로 출력할 것.
 * - 방문할 수 있는 정점이 여러 개라면 정점 번호가 작은 순서 대로 방문할 것.
 * */
class S2_1260 {
    static int N,M,V, s,d;
    static String[] inputs;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        inputs = br.readLine().split(" ");
        N = Integer.parseInt(inputs[0]); // 정점 개수
        M = Integer.parseInt(inputs[1]); // 간선 개수
        V = Integer.parseInt(inputs[2]); // 탐색 시작할 정점 번호

        // 그래프 정점 및 간선 세팅
        Graph graph = new Graph(N);
        Vertex[] vlist = graph.setVertexList();

        for(int i = 0; i < M; i++) {
            inputs = br.readLine().split(" ");
            s = Integer.parseInt(inputs[0]);
            d = Integer.parseInt(inputs[1]);
            graph.addEdge(vlist[s-1], vlist[d-1]);
        }

        // DFS 출력
        graph.dfs(vlist,V-1);
        // 방문 정보 초기화
        for(int i=0;i<vlist.length;i++) {
            vlist[i].visited = false;
        }
        System.out.println();
        // BFS 출력
        graph.bfs(vlist,V-1);
    }


    /** 정점 클래스 */
    static private class Vertex {
        int num; // 정점 데이터 (숫자)
        boolean visited; // 정점 방문 여부
        LinkedList<Vertex> adlist = new LinkedList<>();

        public Vertex(int num) {
            this.num = num;
            this.visited = false;
        }
    }

    /** 그래프 클래스 */
    static private class Graph {
        int n;
        public Graph(int n) {
            this.n = n;
        }

        Vertex[] setVertexList() {
            Vertex[] vlist = new Vertex[n];
            for(int i=0;i<n;i++) {
                vlist[i] = new Vertex(i+1);
            }
            return vlist;
        };

        LinkedList<Vertex> sortAdList(LinkedList<Vertex> adlist) {
            adlist.sort(new Comparator<Vertex>() {
                public int compare(Vertex v1, Vertex v2) {
                    return v1.num - v2.num;
                }
            });
            return adlist;
        };

        void addEdge(Vertex s, Vertex d) {
            s.adlist.add(d);
            d.adlist.add(s);
            s.adlist = sortAdList(s.adlist);
            d.adlist = sortAdList(d.adlist);
        };

        // i를 시작으로 dfs 탐색 - 재귀
        void dfs(Vertex[] vlist, int i) {
            if(vlist[i].visited) return;

            vlist[i].visited = true;
            System.out.print(vlist[i].num + " ");

            for(Vertex adjV: vlist[i].adlist) {
                if(!adjV.visited) {
                    dfs(vlist, adjV.num - 1);
                }
            }
        }

        // i를 시작으로 bfs 탐색
        void bfs(Vertex[] vlist, int i) {
            Queue<Integer> queue = new LinkedList<>();
            queue.add(i);

            int curr;
            while(!queue.isEmpty()) {
                curr = queue.poll();
                if(vlist[curr].visited) continue;

                vlist[curr].visited = true;
                System.out.print(vlist[curr].num+ " ");

                for(Vertex adjV: vlist[curr].adlist) {
                    if(!adjV.visited && !queue.contains(adjV.num-1)) {
                        queue.add(adjV.num - 1);
                    }
                }
            }
        }
    }
}
