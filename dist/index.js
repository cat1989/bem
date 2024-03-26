"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toFirstCharUpperCase = ([firstChar, ...rest]) => `${firstChar.toUpperCase()}${rest.join("")}`;
const toPascalCase = (text) => text.split(/[^A-Za-z0-9]/).map(toFirstCharUpperCase).join("");
const createBem = (block, namespace) => {
    const base = [namespace, block].filter((item) => item).join("-");
    const name = toPascalCase(base);
    function bem(element, modifier) {
        const items = [base];
        const modifiers = [];
        if (element) {
            if (Array.isArray(element)) {
                modifiers.push(...element);
            }
            else {
                items.push(element);
            }
            if (modifier) {
                if (Array.isArray(modifier)) {
                    modifiers.push(...modifier);
                }
                else {
                    modifiers.push(modifier);
                }
            }
        }
        const basicClassName = items.join("__");
        return [
            basicClassName,
            ...modifiers.map((modifier) => `${basicClassName}--${modifier}`),
        ];
    }
    return {
        name,
        bem,
    };
};
exports.default = createBem;
