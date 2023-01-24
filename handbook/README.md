# [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) Notes

## The Basics

- TypeScript is JavaScript with static type checking.
    - Static as in the check is done before the code runs.
    - As opposed to dynamic type checking (JS, Python, etc.).
- TS also consider some JS non-exceptions as errors.
    - E.g. accessing undefined properties return `undefined` in vanilla JS.
    - Just a safer trade-off.
    - As opposed to JS runtime exceptions.
- TS provides extra tooling (set the development environment up accordingly):
    - Type-checking
    - Code completion
    - Refactoring
    - Code navigation
- `tsc` is TS's type checker.
    - Transforms `.ts` files into `.js`.
        - Erases TS-specific syntaxes like type annotations.
        - ["Downlevel"](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#downleveling) to ES3 (although ES2015 is still a safe option).
            - Use `--target <name>` to change the target ECMAScript version.
    - Use [`--noEmitOnError`](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#emitting-with-errors) flag to be more strict.
- TS is not very strict by default (also facilitates migration from JS).
    - Use [`--strict`](https://www.typescriptlang.org/tsconfig#strict) to turn on all checks. Includes:
        - `--alwaysStrict` will emit `"use strict"`.
        - `--strictBindCallApply` will check argument types when calling functions with their `call`, `bind`, and `apply` methods (built-in).
        - `--strictFunctionTypes`
            - Only applies to function syntax and not method!
        - `--strictNullChecks`
            - E.g. prevent cases like when `Array.find` returns `undefined`.
        - `--strictPropertyInitialization` will check when properties are declared but not initialized in construction time.
            - Does not necessarily have to be initialized in the constructor (e.g. has a default value or can be `undefined`).
        - `--useUnknownInCatchVariables`
            - See the [error catching pattern](https://www.typescriptlang.org/tsconfig#useUnknownInCatchVariables).
        - `--noImplicitAny` will not fall back to `any` when missing type annotation "in some cases".
            - What are the exceptions (no type annotation but does not fall back to `any`)?
        - `--noImplicitThis`
            - Look into `this` properly first.
        - Note there are other checks not included in `--strict`!

## Everyday Types

- Prefer primitives over their built-in boxed counterparts.
    - Boxed operations return values in primitives form as well.
- Describe array with `[]` after the type, or use generics `Array<T>`.
- `any` turns off type-checking.
- "Contextual typing" - TS will still try to determine argument and return types of anonymous and arrow functions.
- Object types (e.g. `{ x: number, y: number }`) can have optional properties (`?` suffix).
    - E.g. `{ x: number, y: number, z?: number }`
    - When reading optional properties, check for `undefined` first.
- TS will only allow operations that are valid to every member of a union type.
    - Use ["narrowing"](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#working-with-union-types) to narrow down the types (`typeof varName === "typeName"`).
- "Type alias" is just a name for a type (e.g. `type Point = { x: number, y: number }`)
- `interface` is always extendable as opposed to `type`.
    - Declaring interfaces with the same name will merge their fields. This operation is not allowed with types.
        - Types can still be "extended" via intersections. But this is just a new type.
    - Heuristic: use `interface` until we need `type` features.
- "Type assertions" can be used to change the level of specificity (in either directions).
    - E.g. `const canvas = document.getElementById("main_canvas") as HTMLCanvasElement;`
    - Or `const canvas = <HTMLCanvasElement>document.getElementById("main_canvas");`
- Literal types can be useful in unions.
    - E.g. `function print(s: string, alignment: "left" | "right" | "center") {}`
    - Check when to use literal unions vs enum.
- Check [literal inference](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference) section.
    - Seems like just declaring explicit annotations could solve some of those issues.

## Narrowing

- Checking with `typeof` is a "type guard" and allows TS to narrow down the types.
    - Note `null` passes `typeof myVarThatIsPossiblyNull === "object"` check (for historical reasons).
- Checking existence of properties with `in` operator also allows TS to narrow.
- Variable assignability is always checked against the declared type.
- Type predicates (`argName is Type`) can be used to define a custom type guard.
- See [`discriminated unions`](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions) for narrowing on discriminant property (property common to all members of a union).
- It's important to communicate the type information to TS properly to take advantage of its type checking.
- `never` type can be used to handle exhaustive checks (e.g. will throw an error when there are new cases, but a switch somewhere doesn't handle it yet).
    ```typescript
    switch (something.discriminantProperty) {
        case 1:
            //
        case 2:
            //
        default:
            // Will cause an error when the discriminant property suddenly has a new member.
            const _exhaustiveCheck: never = something;
            return _exhaustiveCheck;
    }
    ```
    - This works because nothing is assignable to `never` except `never` itself.

## More on Functions

## Object Types

## Type Manipulation

## Classes

## Modules
