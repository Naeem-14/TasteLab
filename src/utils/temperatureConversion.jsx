export const gasMarks = [
  { mark: "1/4", numMark: 0.25, c: 110, f: 225 },
  { mark: "1/2", numMark: 0.5, c: 130, f: 250 },
  { mark: "1", numMark: 1, c: 140, f: 275 },
  { mark: "2", numMark: 2, c: 150, f: 300 },
  { mark: "3", numMark: 3, c: 170, f: 325 },
  { mark: "4", numMark: 4, c: 180, f: 350 },
  { mark: "5", numMark: 5, c: 190, f: 375 },
  { mark: "6", numMark: 6, c: 200, f: 400 },
  { mark: "7", numMark: 7, c: 220, f: 425 },
  { mark: "8", numMark: 8, c: 230, f: 450 },
  { mark: "9", numMark: 9, c: 240, f: 475 },
];

export function temperatureConversion(val, fromUnit, toUnit) {
  const num = Number(val);
  if (isNaN(num) || val === "") return "0";

  if (fromUnit === toUnit) return val;

  if (fromUnit === "celcius" && toUnit === "fahrenheit") {
    return (num * 1.8 + 32).toFixed(1);
  }
  if (fromUnit === "fahrenheit" && toUnit === "celcius") {
    return (((num - 32) * 5) / 9).toFixed(1);
  }

  if (fromUnit === "gasMark") {
    const match = gasMarks.reduce((prev, curr) =>
      Math.abs(curr.numMark - num) < Math.abs(prev.numMark - num) ? curr : prev,
    );
    return toUnit === "fahrenheit" ? String(match.f) : String(match.c);
  }

  if (toUnit === "gasMark") {
    const targetKey = fromUnit === "fahrenheit" ? "f" : "c";
    const closest = gasMarks.reduce((prev, curr) =>
      Math.abs(curr[targetKey] - num) < Math.abs(prev[targetKey] - num)
        ? curr
        : prev,
    );
    return closest.mark;
  }

  return "0";
}
