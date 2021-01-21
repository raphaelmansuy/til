# Composable functional programming with Typescript

> 💣 The interface definition is necessary because Typescript doesn't know how to infer type

```typescript
interface Box<T> {
  inspect(): string
  map<U>(f: (arg0: T) => U): Box<U>
  fold<U>(f: (arg0: T) => U): U
}

function Box<T>(x: T): Box<T> {
  return {
    inspect: () => `Box(${x})`,
    map: (f) => Box(f(x)),
    fold: (f) => f(x)
  }
}

const expr = Box(Math.PI) // Box(1.5707963267948966)
  .map((x) => Math.cos(x) * 200) // Box(6.123233995736766e-17)
  .map((x) => x.toFixed(4)) // Box("0.0000")
  .map((x) => String(x))
  .map((x) => x.trim())

console.log(expr.fold((x) => x))
```

[Playground Link](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgPmQG8AoZZUAZwAcIEwAKASgC5lKwpQBzM5AWzjVsAVXwMYbBnCjcADG1xNkAXkIjWaLKPx8Y6ADYATHRKkz5i5WuQa2IkgF8SJGAFcQ9YOhBacBBkwrNgx-QlJyKAgwNyhfCPIKEBo6MClrQgADUIYAEiJMRyZMgBo+ckFqKRgMvwlApiYyxOR9Y2ramAa+Z2cSBB8OZAhMaihVOoBZODAACwA6AAUASWUAejW6gEZ5gFYAdjl9gE4ANgBmACZTk4AWAA4z06Y+ecqGBtVCabn5gcpPgAqZCXORydabHKneZbS5Xc7nY7HA7nG6nU4QAC0W32L3IbyEH0wtUw8zA6AAYsBMBAjAxbo1kBs6gAiOTzMFgll45AE6hE2oAZU4PAaPL5Aq+yFJIv4zBe-UGhgg8wM6G4DBGY3mbTpnxsxKYQA)

[Typescript Resources](https://www.typescriptlang.org/)
