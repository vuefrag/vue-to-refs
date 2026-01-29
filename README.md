<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-to-refs/main/banner.svg" alt="vue-to-refs" width="100%" />
</p>

<h1 align="center">vue-to-refs</h1>

<p align="center">A Vue 3 composition API utility extending native toRefs to accept refs wrapping objects (not just plain objects). Includes replaceRef option for immutable update patterns.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-to-refs"><img src="https://img.shields.io/npm/v/vue-to-refs.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-to-refs"><img src="https://img.shields.io/npm/dm/vue-to-refs.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-to-refs
```

## Usage

```ts
import { toRefs } from 'vue-to-refs'
import { ref } from 'vue'

const state = ref({ name: 'John', age: 30 })
const refs = toRefs(state)

console.log(refs.name.value) // 'John'
console.log(refs.age.value) // 30

refs.name.value = 'Jane'
console.log(state.value.name) // 'Jane'
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
