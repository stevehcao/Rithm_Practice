/**
 * DFS uses a stack
 * @param {object} rootNode 
 */
function DFS(rootNode) {
  // Check that a root node exists.
  if (rootNode === undefined) {
    return;
  }

  let stack = [];
  stack.push(rootNode);

  while (stack.length > 0) {
    let currentNode = stack.pop();
    for (let child of currentNode.children) {
      stack.push(child);
    }
  }
}

/**
 * 
 * @param {object} rootNode 
 * BFS uses a queue
 */
function BFS(rootNode) {
  // Check that a root node exists.
  if (rootNode === undefined) {
    return;
  }

  let queue = [];
  queue.push(rootNode);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    for (let child of currentNode.children) {
      queue.push(child);
    }
  }
}

function DFSrecurse(node) {
  if (node === undefined) {
    return;
  }

  for (let node of node.children) {
    DFS(node);
  }
}
