function validPath(n: number, edges: number[][], start: number, end: number): boolean {
    const visitedVertices = [];
    const bfsQueue = [];
    bfsQueue.push(start);
    visitedVertices[start]=true;
    while(bfsQueue.length) {
        const currentVertix = bfsQueue.shift();
        if(currentVertix === end) {
            return true;
        }
        
        const neigbours = findNeighbours(edges, currentVertix);
        
        for(const n of neigbours) {
            if(!visitedVertices[n]) {
                visitedVertices[n]= true;
                bfsQueue.push(n);
            }
        }
    }
    
    return false;

};

function findNeighbours(edges: number[][], currentVertix: number) {
    const adjacencyList = [];
    for (const edge of edges) {
        if(edge[0] === currentVertix) {
            adjacencyList.push(edge[1])
        }  else if(edge[1] === currentVertix) {
            adjacencyList.push(edge[0])
        }
    }
    
    return adjacencyList;
}