function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const oldColor = image[sr][sc];
    if(oldColor === newColor) return image;
    function fill(image: number[][], sr: number, sc: number, newColor: number, color: number) {
        if(sr < 0 || sc < 0 || sr > image.length-1 || sc > image[0].length-1 || image[sr][sc] !== color ) 
            return;
        
        image[sr][sc] = newColor;
        fill(image, sr+1, sc, newColor, oldColor);
        fill(image, sr-1, sc, newColor, oldColor);
        fill(image, sr, sc+1, newColor, oldColor);
        fill(image, sr, sc -1, newColor, oldColor);
        
    }
    fill(image, sr, sc, newColor, oldColor);
    return image;
};