import { useState, useEffect } from "react";
import BackButton from "../../../../components/BackButton";
import ConverterButtons from "./weightConvData";
import { weightConversion } from "./weightConversion";

const WEIGHT_UNITS = [
  { label: "Grams", value: "g" },
  { label: "Kilograms", value: "kg" },
  { label: "Ounces", value: "oz" },
  { label: "Pounds", value: "lb" },
];

export default function WeightConverter() {
  const [input, setInput] = useState({ value: "0", unit: "g" });
  const [output, setOutput] = useState({ value: 0, unit: "oz" });

  // Recalculate when unit dropdowns change
  useEffect(() => {
    setOutput((prevOutput) => ({
      ...prevOutput,
      value: weightConversion(input.value, input.unit, prevOutput.unit),
    }));
  }, [input.unit, output.unit, input.value]);

  return (
    <main className="grid h-screen grid-rows-3 md:grid-rows-4 lg:grid-cols-5 lg:grid-rows-1">
      <BackButton path="/cooking101" />
      <section className="grid md:grid-cols-2 lg:order-2 lg:col-span-2 lg:grid-cols-1">
        {/* Input Section */}
        <div className="flex items-center justify-between gap-7 bg-accent px-8 text-dark lg:flex-col-reverse lg:justify-center lg:gap-5">
          <div className="flex-1 scrollbar-none overflow-scroll font-tall text-7xl lg:flex-none lg:text-9xl">
            {input.value}
          </div>

          <div className="flex flex-col items-end lg:flex-row lg:gap-2">
            <label
              htmlFor="inputUnit"
              className="text-lg font-semibold tracking-wider"
            >
              From
            </label>
            <select
              id="inputUnit"
              className="rounded-full bg-dark px-2 py-1 text-accent focus:outline-none"
              value={input.unit}
              onChange={(e) => setInput({ ...input, unit: e.target.value })}
            >
              {WEIGHT_UNITS.map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Output Section */}
        <div className="flex items-center justify-between bg-dark px-8 text-accent lg:flex-col-reverse lg:justify-center lg:gap-5">
          <div className="flex-1 scrollbar-none overflow-scroll font-tall text-7xl lg:flex-none lg:text-9xl">
            {output.value}
          </div>

          <div className="flex flex-col items-end lg:flex-row lg:gap-2">
            <label
              htmlFor="outputUnit"
              className="text-lg font-semibold tracking-wider"
            >
              To
            </label>
            <select
              id="outputUnit"
              className="rounded-full bg-accent px-2 py-1 text-dark focus:outline-none"
              value={output.unit}
              onChange={(e) => setOutput({ ...output, unit: e.target.value })}
            >
              {WEIGHT_UNITS.map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="bg-whiteblue-400 row-span-2 grid grid-cols-3 grid-rows-4 gap-3 p-4 pb-6 md:row-span-3 md:grid-cols-4 md:grid-rows-3 lg:col-span-3 lg:row-span-1 lg:gap-4">
        <ConverterButtons
          input={input}
          setInput={setInput}
          setOutput={setOutput}
          output={output}
        />
      </section>
    </main>
  );
}
