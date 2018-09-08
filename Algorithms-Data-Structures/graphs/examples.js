function BFS(startNode, goalNode) {
  let frontier = [];
  let exploredList = {};
  frontier.push([startNode, null]);

  while (frontier.length > 0) {  
    let [currentNode, reachedFrom] = frontier.shift();

    if(currentNode === goalNode) {
      // Rebuild the path from the explored list
      let currentItr = currentNode;
      let shortestPath = [];
      while(currentItr !== null) {
        shortestPath.push(currentItr);
        currentItr = exploredList[currentItr];
      }

      return shortestPath.reverse();
    }
    else if(exploredList[currentNode] !== undefined) {
      continue;
    }

    for(let neighbor of currentNode.neighbors) {
      // NOTICE -- pushing currentNode as well as the neighbor.
      frontier.push([neighbor, currentNode]);
    }
    // this will make key value of where it came from
    // {'hot' : 'hit'
    //  'dot' : 'hot'
    // } 
    exploredList[currentNode] = reachedFrom;
  }

  return null; // Indicating no path exists
}