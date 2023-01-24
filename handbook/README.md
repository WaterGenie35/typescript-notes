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
