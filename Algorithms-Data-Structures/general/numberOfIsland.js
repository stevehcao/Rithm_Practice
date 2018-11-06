/**
 * @param {character[][]} grid
 * @return {number}
 */
// undirected graph edge between two horizontal and vertical adjacent nodes of values 1
// scan the 2D grid map
// if contains 1 (island) then trigger a DFS, every visited node hsould be set to 0 to mark as visited node
// count the number of root nodes that trigger the DFS
var numIslands = function(grid) {
  // base case and in case grid is empty
  if (grid === null || grid.length === 0) return 0;

  let rows = grid.length;
  let cols = grid[0].length;
  let numIsles = 0;

  // traverse grid nested for loops
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // check if it is an island/land
      if (grid[row][col] === '1') {
        // increase count of island
        numIsles++;
        // DFS
        dfs(grid, row, col);
      }
    }
  }
  return numIsles;
};

function dfs(grid, row, col) {
  let numR = grid.length;
  let numC = grid[0].length;
  // base case for when searching
  if (
    row < 0 ||
    col < 0 ||
    row >= numR ||
    col >= numC ||
    grid[row][col] === '0'
  ) {
    return;
  }

  grid[row][col] = '0';
  dfs(grid, row - 1, col);
  dfs(grid, row + 1, col);
  dfs(grid, row, col - 1);
  dfs(grid, row, col + 1);
}

// input:
let arr = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '1']
]; // return 3

console.log(numIslands(arr));
