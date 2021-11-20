function combine(n: number, k: number): number[][] {
    let result = [];
    
    function dfs(current, start) {
        if(current.length == k) {
            result.push(current);
            return;
        }
        for(let i = start; i <= n; i++) {
            dfs(current.concat(i), i + 1);
        }
        
    }
    dfs([], 1);
    return result;
};