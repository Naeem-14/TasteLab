import { useState } from "react";
import BackButton from "../../../components/BackButton";
import ConverterButtons from "./ConverterButtons";

export default function TemperatureConvertor() {
  const [input, setInput] = useState({ value: "0", unit: "celcius" });
  const [output, setOutput] = useState({ value: 0, unit: "celcius" });

  return (
    <main className="grid h-screen grid-rows-3 md:grid-rows-4 lg:grid-cols-5 lg:grid-rows-1">
      <BackButton />
      <section className="grid md:grid-cols-2 lg:order-2 lg:col-span-2 lg:grid-cols-1">
        {/* input section */}
        <div className="flex items-center justify-between gap-7 bg-accent px-8 text-dark lg:flex-col-reverse lg:justify-center lg:gap-5">
          <div className="flex-1 scrollbar-none overflow-scroll font-tall text-7xl lg:flex-none lg:text-9xl">
            {input.value}
          </div>

          <div className="flex flex-col items-end lg:flex-row lg:gap-2">
            <label
              htmlFor="input"
              className="text-lg font-semibold tracking-wider"
            >
              From
            </label>
            <select
              id="input"
              className="rounded-full bg-dark px-2 py-1 text-accent focus:outline-none"
              value={input.unit}
              onChange={(e) => setInput({ ...input, unit: e.target.value })}
            >
              <option value="celcius">Celcius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="gasMark">Gas Mark</option>
            </select>
          </div>
        </div>

        {/* output section */}
        <div className="flex items-center justify-between bg-dark px-8 text-accent lg:flex-col-reverse lg:justify-center lg:gap-5">
          <div className="flex-1 scrollbar-none overflow-scroll font-tall text-7xl lg:flex-none lg:text-9xl">
            {output.value}
          </div>

          <div className="flex flex-col items-end lg:flex-row lg:gap-2">
            <label
              htmlFor="input"
              className="text-lg font-semibold tracking-wider"
            >
              To
            </label>
            <select
              id="input"
              className="rounded-full bg-accent px-2 py-1 text-dark focus:outline-none"
              value={output.unit}
              onChange={(e) => setOutput({ ...output, unit: e.target.value })}
            >
              <option value="celcius">Celcius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="gasMark">Gas Mark</option>
            </select>
          </div>
        </div>
      </section>

      {/* buttons section */}
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
