/**
 * Find an Employee's Role
 * Codewars 7 kyu
 * Solved: 2026
 *
 * Given firstName + lastName, find the employee in the preloaded employees array and return their role, or 'Does not work here!' if not found.
 *
 * Example: find('Dipper','Pines') → 'Boss'
 *
 * Big O (optimized): Time O(n), space O(1).
 */

const find = (first, last) => {
  const e = employees.find(p => p.firstName === first && p.lastName === last);
  return e ? e.role : 'Does not work here!';
};
