"use strict";

/* splitsquare.js - Joel Burton <joel@joelburton.com> */

/* dump(s) - returns split square as string
             (unlike Python version, which prints to console)
 */

function dump(s) {
    if (s === 0 || s === 1) {
        return s.toString();
    } else {
        // Array.map(fn) - return new array of [fn(item1), fn(item2), ...]
        return s.map(dump).join(" ");
    }
}


/* is_valid(s) - is this a valid split square? */

function is_valid(s) {
    if (s === 0 || s === 1) {
        return true;
    }

    if (Array.isArray(s) && s.length === 4) {
        // Array.every(fn) = for every item in array, is fn(item) true?
        return s.every(is_valid);
    }

    return false;
}


/* simplify(s) - simplify redundant splits in a split square */

function simplify(s) {
    // check if square is either 1 or 0 and return that
    if (s === 0 || s === 1) {
        return s;
    }
    // recursion through each quadrant
    // assume that all inputs are valid squares
    var q1 = simplify(s[0]);
    var q2 = simplify(s[1]);
    var q3 = simplify(s[2]);
    var q4 = simplify(s[3]);

    // check if all are equal to the first quad, if so return only q1 value
    if (Number.isInteger(q1) && (q1 === q2) && (q1 === q3) && (q1 === q4)) {
        return q1;
    }
    // return square
    return s;
}


/* add(s) - add two split squares */

function add(s1, s2) {
    if (Number.isInteger(s1) && Number.isInteger(s2)) {
        // Not || for "logical-or", but | for "bitwise-or"
        //   0|0=0  0|1=1  1|0=1  1|1=1
        return s1 | s2;
    }

    if (Array.isArray(s1) && !Array.isArray(s2)) {
        s2 = [s2, s2, s2, s2];
    }

    if (Array.isArray(s2) && !Array.isArray(s1)) {
        s1 = [s1, s1, s1, s1];
    }

    return [
        add(s1[0], s2[0]),
        add(s1[1], s2[1]),
        add(s1[2], s2[2]),
        add(s1[3], s2[3])
    ];
}


// allow testing from command line by exporting modules
if (typeof module === "object") {
    module.exports = {dump, is_valid, simplify, add};
}
