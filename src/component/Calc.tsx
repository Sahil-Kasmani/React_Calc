import React from "react";
import "./Calc.css";

interface propType {
    setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const Calc: React.FC<propType> = ({ setDisplay }) => {
    const handleCalc = (value: string) => {
        setDisplay((prev) => {
            const lastChar = prev.slice(-1);
            const operators = ["/", "*", "-", "+"];

            if (value === "AC") {
                return "0";
            }
            if (value === "C") {
                if (prev === "0" || prev.length === 1) {
                    return "0";
                }
                return prev.slice(0, -1);
            }
            if (value === "=") {
                if (prev === "" || prev === "Error") {
                    return "0";
                }
                try {
                    return eval(prev).toString();
                } catch {
                    return "Error";
                }
            }
            if (value === "%") {
                try {
                    return (eval(prev) / 100).toString();
                } catch {
                    return "Error";
                }
            }
            if (prev === "0" && value !== "." && !operators.includes(value)) {
                return value;
            }
            if (operators.includes(value)) {
                if (operators.includes(lastChar)) {
                    return prev.slice(0, -1) + value;
                } else {
                    return prev + value;
                }
            }

            return prev + value;
        });
    };

    const buttons = [
        "AC",
        "C",
        "%",
        "/",
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "0",
        ".",
        "=",
    ];

    return (
        <>
            <form>
                <div className="calc">
                    {buttons.map((item) => (
                        <button
                            key={item}
                            id={
                                ["/", "*", "-", "+", "="].includes(item)
                                    ? "bg-color"
                                    : ["AC", "%", "C"].includes(item)
                                        ? "bg-color2"
                                        : ""
                            }
                            className={`items ${item === "=" ? "item-equal" : ""}`}
                            onClick={(e) => {
                                e.preventDefault(), handleCalc(item);
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </form>
        </>
    );
};

export default Calc;
