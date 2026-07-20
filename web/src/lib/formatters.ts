/**
 * Removes extra spaces and trims text.
 */
export function cleanSpaces(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/**
 * Converts text into Title Case.
 * Example:
 * premium wheat flour -> Premium Wheat Flour
 * shree ram traders -> Shree Ram Traders
 */
export function toTitleCase(value: string): string {
  return cleanSpaces(value)
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Converts text to uppercase.
 * Example:
 * pwf001 -> PWF001
 */
export function toUpperCase(value: string): string {
  return cleanSpaces(value).toUpperCase();
}

/**
 * Allows only numbers with decimal.
 */
export function numericOnly(value: string): string {
  return value.replace(/[^\d.]/g, "");
}