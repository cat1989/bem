const toFirstCharUpperCase = ([firstChar, ...rest]: string) => `${firstChar.toUpperCase()}${rest.join("")}`
const toPascalCase = (text: string) => text.split(/[^A-Za-z0-9]/).map(toFirstCharUpperCase).join("")

const createBem = (block: string, namespace?: string) => {
    const base = [namespace, block].filter((item) => item).join("-")
    const name = toPascalCase(base)
    function bem(): string[];
    function bem(element: string): string[];
    function bem(modifiers: string[]): string[];
    function bem(element: string, modifier: string): string[];
    function bem(element: string, modifiers: string[]): string[];
    function bem(element?: string | string[], modifier?: string | string[]) {
        const items = [base]
        const modifiers: string[] = []
        if (element) {
            if (Array.isArray(element)) {
                modifiers.push(...element)
            }
            else {
                items.push(element)
            }
            if (modifier) {
                if (Array.isArray(modifier)) {
                    modifiers.push(...modifier)
                }
                else {
                    modifiers.push(modifier)
                }
            }
        }
        const basicClassName = items.join("__")
        return [
            basicClassName,
            ...modifiers.map((modifier) => `${basicClassName}--${modifier}`),
        ]
    }
    return {
        name,
        bem,
    }
}

export default createBem
