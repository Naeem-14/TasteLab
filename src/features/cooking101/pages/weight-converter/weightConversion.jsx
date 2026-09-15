const GRAM_CONVERSIONS = {
  g: 1,
  kg: 1000,
  oz: 28.3495,
  lb: 453.592,
};

export function weightConversion(val, fromUnit, toUnit) {
  const numericVal = parseFloat(val);
  if (isNaN(numericVal)) return "0";

  // Convert "from" unit to Grams
  const valueInGrams = numericVal * (GRAM_CONVERSIONS[fromUnit] || 1);

  // Convert Grams to "to" unit
  const result = valueInGrams / (GRAM_CONVERSIONS[toUnit] || 1);

  // Round to max 2 decimal places
  return Math.round(result * 100) / 100;
}
