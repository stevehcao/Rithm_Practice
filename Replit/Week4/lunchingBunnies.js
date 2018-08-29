// http://temp.joelburton.com/challenges/leveret-lunch/

/** lunchCount: return # of carrots eaten
 *
 * params:
 * - garden: matrix of carrot counts
 *
 * returns: # of carrots
 */
// input: arr 
// output: number 
// 1) find center somehow 
// 2) from the center go in a center order WNES (y, x-1), (y-1, x) etc 
// 3) eat pick the largest number of carrots and move to that index
// 4) repeat till no more carrots to be had 