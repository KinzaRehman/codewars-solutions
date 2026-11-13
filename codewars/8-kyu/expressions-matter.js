/**
 * Expressions Matter
 * Codewars 8 kyu
 * Solved: 2026-11-04
 *
 * With a,b,c and + and *, place brackets to get the biggest value.
 *
 * Example: expressionsMatter(2,1,2) → 6
 *
 * Big O (optimized): Time O(1), space O(1). Only 4 bracketings exist — list them all.
 */

const expressionsMatter = (a,b,c) => Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
