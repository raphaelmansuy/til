# Composable programming with Left, Right and Chaining

```typescript
interface Left<T> {
  inspect(): string
  map<U>(f: (arg0: T) => U): Left<T>
  fold<TF>(f: (arg0: T) => TF, g: (arg0: T) => TF): TF
}

interface Right<T> {
  inspect(): string
  map<U>(f: (arg0: T) => U): Right<U>
  fold<TF>(f: (arg0: T) => TF, g: (arg0: T) => TF): TF
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
    (x) => Math.sin(x),
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

function prop(obj: Record<any, any>, name: string) {
  const anyObj: any = obj
  return anyObj[name]
}

const colors = {
  red: "RED",
  green: "GREEN",
  blue: "BLUE"
}

const x = prop(colors, "blue")

function findColor(name: string) {
  const res = prop(colors, name)
  return res ? Left(res) : Right(8)
}

// Inferred type is findColor: (name: string) => Right<never, string> | Left<string, never>
// The parameter's type annotation is an object type
const z = findColor("xred").fold(
  (x: string) => x.toLowerCase(),
  (x) => "Null"
)
```

[Playground Link](https://www.typescriptlang.org/play?#code/PTAEEkDsDMFMCd6wCagC4E8AOtQEsBnUeAQ0mQHsBbAUTzQAsEAuUACgEpQBeAPlDqMEAHkiwAbggA0oSAFcqAIwT8APgPpN4wgmnh5IAcxljJ8XgFgAUNYNoE0EgGNcAGVjQ0wgCr8A3tag+JAEOE5onKy6+kaBoFQkWMIAqrxs0KxsJPCGAAys3lx8oMkcrO6ePpZWQdAUADbIPgBiaRns2XkFRfzezTKGmZ35oIU8vc1lo83WAL7WtpD28I4uoABKeIYMXr6gATXBobDhkaDRBoZxCUmp6UM5I2PFpayb216pcXWNLW0PXVGPWmAwBT2BfSmfTmCys0DkkHCeAokFAFV2aQAHt1yh4Mfs4kg0HJ4KiDkEggZjuFMsCAAbotgAEj8mNmHDpUjiQRumWgwMZmI4XMOtQayD5A2B0DYQri8ysCus8MRaGRqPeOyqspxGy2Wr25OIsGJpIJoqOYTQtPGoDpmoiLLZHJFFPiiT5wId6VlHGF3NAPwl7GgUtthl98phNisThRulAsExWHgAEYeGi8WwAOwcOIAOhubF9tsxoAA1KBU3nDvmg2wAyXigBZEiMfMEAy+10Upv8TFxGtxkJoRPJ+AAJgz3oAHDWgoXEsWhaWK1X56A6+KGxa+6Ay5XUz2gnuD1XB7DhwQGrB8-UKBGkynq9Yrze7w+2E-JzXlQikSioAphQWBsBQigAFZvCcFDwE0ZAYDICG8CYJBULAUR6JcXBGleo4IQA8pBrAIRm4EQYSJokqihGQQA2pAaGwAAutGr7xqOcb3vARDcOaQRIMGABE6w0AAIkJPaGEgsCQKwQkAOKiTQAByklxIo9RyBhoBCQAQq4yQ0EJbGxhx+4ZsBoFcbBBAyEJmnaUJv5wv+aqAdABjIAAwg0sFsIx6GYTEhg4XEeHGrxQHwCBbA2TxqHoRuRLUZFoAAPyZp4bBIAQXBvPqERzqZIAQDACCCeg2C4IQgZeb53GZIFOkXEYXqFaIEjSOcWFGGoWVeK1xiyF15jWKV3hMEB2RMcsADkRCYDgoBkJAFBoG26r4EQZCgORJyjktsDsSOoAAF4Zp55ANf5QmYoJzlbo0O4ntiPUhcCmL5mgFCuBQADuCDeSQBCwJwPZ7kJKlyPU9QmVYLlAA)

```

```
