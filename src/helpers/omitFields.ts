/**
 * Removes specified keys from an object and returns a new object without those keys.
 *
 * @template T - The original object type
 * @template K - The keys to omit from the object
 * @param {T} formObject - The original object
 * @param {K[]} keys - An array of keys to remove from the object
 * @returns {Omit<T, K>} A new object without the specified keys
 */
export function omitFields<T extends object, K extends keyof T>(
  formObject: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...formObject };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
}
