// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

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
      if (row < 0 || col < 0 || row >= numR || col >= numC || grid[row][col] === '0') {
          return;
      }
  
  grid[row][col] = '0';
  dfs(grid, row - 1, col);
  dfs(grid, row + 1, col);
  dfs(grid, row, col - 1);
  dfs(grid, row, col + 1);
}

function numOfIslands(grid) {

}