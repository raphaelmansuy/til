# Composable programming with Left, Right and Chaining

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

interface Left<T> {
  inspect(): string
  map<U>(f: (arg0: T) => U): Left<T>
  fold<U>(f: (arg0: T) => U, g: (arg0: T) => U): U
}

interface Right<T> {
  inspect(): string
  map<U>(f: (arg0: T) => U): Right<U>
  fold<U>(f: (arg0: T) => U, g: (arg0: T) => U): U
}

function Left<T>(x: T): Left<T> {
  return {
    inspect: () => `Left(${x})`,
    map: (f) => Left(x),
    fold: (f, g) => f(x)
  }
}

function Right<T>(x: T): Right<T> {
  return {
    inspect: () => `Right(${x})`,
    map: (f) => Right(f(x)),
    fold: (f, g) => g(x)
  }
}

const expr1 = Left(7)
  .map((x) => x + 1)
  .fold(
    (x) => x,
    (x) => x
  )
const expr2 = Right(8)
  .map((x) => x + 1)
  .fold(
    (x) => x + 1,
    (x) => x + 1
  )

console.log(expr1)
console.log(expr2)
```

[Playground](https://www.typescriptlang.org/play?ssl=51&ssc=1&pln=1&pc=1#code/JYOwLgpgTgZghgYwgAgEIHsAeAeAKgPmQG8AoZc5UAZwAcIEwAKASgC5kqwpQBzMigLZwa2AKr5GMdozhQeABna5myALyFRbNFjH5+5GOgA2AE12TpshUpXrkm9qJIBfEiRgBXEA2DoQ2nAJGTBt2DEDCUgpkKAgwDyh-KOiKajoGaVtCAANwxgASIkxnZmyAGn0UoRppGCyAyWDmZgqUikNTWvqYJsrXVxJQSFhEFAAZCBgwPEjKtPomLU5uED5o6vMpZBk5RWRlNQ0tCamZyo6zcQttqz2Du1Ey5B5LXZtD+y0nAcHwaHgkMgAErAHgAC2mBGIcxAtAWLHYy14lQ2Vy2O2s+3qDmBoIhunOxkuEnRt3eDyeLxubyxHxx3zcnm8YF8-hOkIkISx7HZM2h0Vi8US-LalFh6TAmQ+2XZBSKJXKlXWwi6H1lmBaSvaRNqlO6vWi-UZXh8flx4I5wVC5vxUOS5EFCSSWvI8wy23q2RBFrlxVKrVF1VVdm9EMaGs1ouQF11z3qPANFCNbgQfk4yAgmBoUAAjGpkLKAOzMAB01WCH0wyAA1Mgc6WLhW7JgnlXm8wSKnYWAM1moAAmfOhpgADlL5bbhCrtfrJcbk+QmGrOdbleXHZTaeMEBLRnQCcz2frna3Rh3e4Pff7HaAA)