"use client";

import { pastelColors } from "@/constants";
import { useEffect, useRef, useState } from "react";

type TProps = {
    selectedOption: string;
    setSelectedOption: (value: string) => void;
    options: string[];
};

export const Dropdown = (props: TProps) => {
    const { selectedOption, setSelectedOption, options } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isBelow, setIsBelow] = useState(false);
    const [findValue, setFindValue] = useState("");
    const ref = useRef<HTMLButtonElement>(null);
    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(findValue.toLowerCase())
    );

    useEffect(() => {
        if (ref.current) {
            const viewportHeight = window.innerHeight;
            const elementRect = ref.current.getBoundingClientRect();
            const below = elementRect.top > viewportHeight / 2;
            setIsBelow(below);
        }
    }, [isOpen]);

    const toggleDropdown = () => {
        setIsOpen((prev) => {
            if (prev) {
                setFindValue("");
            }
            return !prev;
        });
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        setFindValue("");
    };

    return (
        <div className="dropdown">
            <button
                onClick={toggleDropdown}
                className={`dropdown-button ${
                    isOpen
                        ? isBelow
                            ? "dropdown-button-open-reverse"
                            : "dropdown-button-open"
                        : ""
                }`}
                ref={ref}
            >
                {selectedOption} ▼
            </button>

            {isOpen && (
                <div
                    className={`dropdown-menu ${
                        isBelow ? "dropdown-menu-reverse" : ""
                    }`}
                >
                    <input
                        placeholder="Find"
                        className="dropdown-menu-find"
                        onChange={(e) => setFindValue(e.target.value)}
                    />
                    <ul className="dropdown-menu-ul">
                        {filteredOptions.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="dropdown-item"
                                style={{
                                    color: pastelColors[index % 5],
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
