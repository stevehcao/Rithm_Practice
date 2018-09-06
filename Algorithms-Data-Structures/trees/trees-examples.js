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

function DFS(node) {
  if (node === undefined) {
    return;
  }

  for (let node of node.children) {
    DFS(node);
  }
}
