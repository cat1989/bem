# bem
ClassList generator with BEM(Block Element Modifier).
```js
import createBem from 'bem'

const {
    name,
    bem,
} = createBem("container", "ns")

console.log(name)  // NsContainer

bem()  // ["ns-container"]
bem("button")  // ["ns-container__button"]
bem("button", "disabled")  // ["ns-container__button", "ns-container__button--disabled"]
bem("button", ["primary", "mini"])  // ["ns-container__button", "ns-container__button--primary", "ns-container__button--mini"]
```
