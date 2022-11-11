# TypeScript

Abstraction database application

## Requirements

Install assignment dependencies:

```bash
$ yarn install
```

## Making the test suite pass


```bash
$ yarn test
```

# tests

- hello-world.ts
- hello-world.test.ts

```typescript
it('says hello world', () => {
  expect(hello()).toEqual('Hello, World!')
})
```

Run the test now, with the following command on the command-line:

```bash
$ yarn test
```

The test fails, which makes sense since you've not written any code yet.

The failure looks like this:

```
    × says hello world (5ms)

  ● Hello World › says hello world

    expect(received).toEqual(expected) // deep equality

    Expected: "Hello, World!"
    Received: "Goodbye, Mars!"

      4 |
      5 |   it('says hello world', () => {
    > 6 |     expect(hello()).toEqual('Hello, World!')
        |                     ^
      7 |   })
      8 |
      9 | })

      at Object.it (hello-world.test.ts:6:32)
```

And these are those code lines with probable defects in the `hello-world.test.ts` file:

the 6th line:

```typescript
    expect(hello()).toEqual('Hello, World!')
                    ^
```

Hence the problem is with the `hello()` function call.
We can see that the test is expecting `'Hello, World!'` as output, but instead is getting `"Goodbye, Mars!"`.

So let's check now this function in the `hello-worlds.ts` file:

```typescript
export function hello(): string {
  return 'Goodbye, Mars!'
}
```

Now we see that the function returns the incorrect string, which is the reason for our failure. Let's fix this by changing the returned value:

```typescript
export function hello(): string {
  return 'Hello, World!'
}
```

Run the test again:

```bash
 PASS  ./hello-world.test.ts
  Hello World
    √ says hello world (4ms)
```
