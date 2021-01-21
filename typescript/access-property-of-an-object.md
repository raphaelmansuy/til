# How to access the property of an object?

```typescript
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
```

Usage:

```typescript
const todo = {
  id: 1,
  text: "Buy milk",
  due: new Date(2016, 11, 31)
}

const id = prop(todo, "id") // number
const text = prop(todo, "text") // string
const due = prop(todo, "due") // Date
```

[This example comes from this article](https://mariusschulz.com/blog/keyof-and-lookup-types-in-typescript)
