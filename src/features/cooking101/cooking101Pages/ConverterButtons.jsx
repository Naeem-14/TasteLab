import { useEffect, useCallback } from "react";
import { temperatureConversion } from "../../../utils/temperatureConversion";

const buttonsData = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "AC",
];

export default function ConverterButtons({ setInput, setOutput }) {
  // Shared handler for button clicks and keyboard events
  const processInput = useCallback(
    (actionKey) => {
      if (actionKey === "AC" || actionKey === "Escape") {
        setInput((prev) => ({ ...prev, value: "0" }));
        setOutput((prev) => ({ ...prev, value: "0" }));
        return;
      }

      if (actionKey === "Backspace") {
        setInput((prevInput) => {
          const updatedVal =
            prevInput.value.length > 1 ? prevInput.value.slice(0, -1) : "0";
          setOutput((prevOutput) => ({
            ...prevOutput,
            value: temperatureConversion(
              updatedVal,
              prevInput.unit,
              prevOutput.unit,
            ),
          }));
          return { ...prevInput, value: updatedVal };
        });
        return;
      }

      setInput((prevInput) => {
        if (actionKey === "." && prevInput.value.includes(".")) {
          return prevInput;
        }

        const nextInputValue =
          actionKey === "."
            ? prevInput.value + "."
            : prevInput.value === "0"
              ? actionKey
              : prevInput.value + actionKey;

        setOutput((prevOutput) => ({
          ...prevOutput,
          value: temperatureConversion(
            nextInputValue,
            prevInput.unit,
            prevOutput.unit,
          ),
        }));

        return { ...prevInput, value: nextInputValue };
      });
    },
    [setInput, setOutput],
  );

  // Keyboard support with proper cleanup
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
        processInput(e.key);
      } else if (e.key === "Backspace") {
        processInput("Backspace");
      } else if (e.key === "Escape") {
        processInput("Escape");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [processInput]);

  return (
    <>
      {buttonsData.map((button) => {
        let buttonStyle =
          "rounded-4xl border transition md:text-xl lg:text-2xl ";

        if (button === "AC") {
          buttonStyle +=
            "border-accent bg-accent text-white hover:bg-accent/88";
        } else if (button === ".") {
          buttonStyle +=
            "border-dark bg-dark font-bold text-white hover:bg-dark/94";
        } else {
          buttonStyle +=
            "border-slate-300/70 bg-slate-100  hover:border-slate-400/50 hover:bg-slate-200/90";
        }

        return (
          <button
            key={button}
            className={buttonStyle}
            onClick={() => processInput(button)}
          >
            {button}
          </button>
        );
      })}
    </>
  );
}
