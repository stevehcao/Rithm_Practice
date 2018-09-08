// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

var beginWord = "hit"
var endWord = "cog"
var wordList = ["hot","dot","dog","lot","log","cog"]

ladderLength(beginWord, endWord, wordList);

function ladderLength(beginWord, endWord, wordList) {
  // set frontier of graph this is an array of things you will traverse
  // exploredList
  // frontier should be your starting node, in this case "hit"
  let frontier = [];
  // array of neighbors? or object?
  let exploredList = {};
  // push in only the word?
  frontier.push(beginWord);

  // write helper function in order to get neighbors
  // while loop over frontier which are nodes you might look at
  while (frontier.length > 0) {
    let currentWord = frontier.shift();
    let neighbors = [];
    let letterDiff = 0;
    console.log(neighbors);
    if (currentWord === endWord) {
      // do something once the endWord is found
      let currentItr = currentWord;
      let shortestPath = [];
      while (currentItr !== null) {
        shortestPath.push(currentItr);
        currentItr = exploredList[currentItr];
      }
      return shortestPath;
    } else if (exploredList[currentWord] !== undefined) {
      continue;
    }
    // function getNeighbors(word, wordList) {} maybe

    // return an array of the current node's neighbor
    // see if string is a count is only 1 away
    for (let word of wordList) {
      // check for letter differences
      // push to neighbors
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] !== word[i]) {
          letterDiff++
        }
      }
      // if the letter diff is 1 then that means the
      // word is a neighbor
      if (letterDiff === 1) {
        neighbors.push(word);
        letterDiff = 0;
      } else {
        letterDiff = 0;
      }
    }
    // loop over the currentNode neighbors?
    for (let neighbor of neighbors) {
      frontier.push(neighbor)
    }
  }
}
