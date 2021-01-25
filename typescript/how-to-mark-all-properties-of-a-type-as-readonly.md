# How to mark all properties of a type as readonly in TypeScript

```typescript
type DeepReadonlyObject<T> = { readonly [K in keyof T]: DeepReadOnly<T[K]> }

type DeepReadOnly<T> = T extends (infer E)[]
  ? ReadonlyArray<DeepReadonlyObject<E>>
  : T extends object
  ? DeepReadonlyObject<T>
  : T

interface IShape {
  type: string
}

interface ICompositeShape extends IShape {
  childItems: IShape[]
}

type ReadonlyShape = DeepReadOnly<ICompositeShape>

const obj1 = {
  type: "shape1",
  childItems: [{ type: "shape2" }, { type: "shape3" }]
}

// Ok
obj1.childItems[0].type = "jjj"

const readOnlyObj1: ReadonlyShape = obj1

// Error
readOnlyObj1.childItems[0].type = ""
```
