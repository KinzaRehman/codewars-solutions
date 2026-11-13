/**
 * Validate a PIN Code
 * Codewars 7 kyu
 * Solved: 2026
 *
 * A valid PIN is exactly 4 or 6 digits — digits only, no letters, spaces or symbols.
 *
 * Example: '1234' → true,  '12345' → false,  'a234' → false
 *
 * Big O (optimized): Time O(n), space O(1).
 */

const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);
