const ML_CONVERSIONS = {
  ml: 1,
  l: 1000,
  tsp: 4.92892,
  tbsp: 14.7868,
  cup: 240, // Standard US culinary cup
  flOz: 29.5735,
  pt: 473.176,
};

export function volumeConversion(val, fromUnit, toUnit) {
  const numericVal = parseFloat(val);
  if (isNaN(numericVal)) return "0";

  // Convert "from" unit to Milliliters
  const valueInMl = numericVal * (ML_CONVERSIONS[fromUnit] || 1);

  // Convert Milliliters to "to" unit
  const result = valueInMl / (ML_CONVERSIONS[toUnit] || 1);

  // Round to max 2 decimal places cleanly
  return Math.round(result * 100) / 100;
}
