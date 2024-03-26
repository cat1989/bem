const createBem = require('../dist').default

test("Basic: name", () => {
    const {
        name,
    } = createBem('block', 'namespace')
    expect(name).toBe("NamespaceBlock")
})

test("Basic: name without namespace", () => {
    const {
        name,
    } = createBem('block')
    expect(name).toBe("Block")
})

test("Basic: name with dash", () => {
    const {
        name,
    } = createBem('block-name', 'namespace-name')
    expect(name).toBe("NamespaceNameBlockName")
})

test("Basic: bem", () => {
    const {
        bem,
    } = createBem("block", "namespace")
    expect(bem().join("")).toBe("namespace-block")
})

test("Basic: bem with dash", () => {
    const {
        bem,
    } = createBem("block-name", "namespace-name")
    expect(bem().join("")).toBe("namespace-name-block-name")
})

test("Basic: element", () => {
    const {
        bem,
    } = createBem("block", "namespace")
    expect(bem("element").join("")).toBe("namespace-block__element")
})
