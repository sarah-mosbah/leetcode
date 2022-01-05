function canVisitAllRooms(rooms: number[][]): boolean {
    const visitedRooms = [];
    const bfsQueue = [0];
    let count = 1;
    visitedRooms[0] = true;
    while (bfsQueue.length) {
     let keys = rooms[bfsQueue.shift()];
     for (let k of keys)
       if (!visitedRooms[k]) {
           bfsQueue.push(k);
           visitedRooms[k] = true, count++;
       }
     }
   return count === rooms.length;
 
 };

 /// gogfoulf