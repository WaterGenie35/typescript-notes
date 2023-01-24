# TypeScript Notes


## Resources

### General
- [Official Documentation](https://www.typescriptlang.org/docs/)
    - See the reference section for
        [cheat sheets](https://www.typescriptlang.org/cheatsheets),
        features ([enums](https://www.typescriptlang.org/docs/handbook/enums.html),
            [utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html),
            [decorators](https://www.typescriptlang.org/docs/handbook/decorators.html),
            etc.),
        and more.
- [TS Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### JavaScript
- [Microsoft Developer Hub's Resources](https://developer.microsoft.com/en-gb/javascript/)
- [MDN's Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [A JS Learning Roadmap](https://roadmap.sh/javascript)

### Tooling, Style Guides, and Best Practices
- [ESLint](https://eslint.org/) for style checking,
    [Prettier](https://prettier.io/) for code formatter,
    [JEST](https://jestjs.io/) for testing,
    etc.
- [JS Standard Style](https://www.npmjs.com/package/standard)
    - See also Google TS Style.
- [Official TS Doc's Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [Google TS Style](https://github.com/google/gts) (tooling)
    - [Google TS Style Guide](https://google.github.io/styleguide/tsguide.html)
- [AWS Prescriptive Guidance on TS](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-cdk-typescript-iac/best-practices.html)
    - Tailored for AWS cloud development kit, but some sections are general enough.
    - [Reusable Patterns](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-cdk-typescript-iac/reusable-patterns-best-practices.html)
    - [TS Best Practices](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-cdk-typescript-iac/typescript-best-practices.html)
- [Microsoft's Coding Guidelines for TS Contributors](https://github.com/microsoft/TypeScript/wiki/Coding-guidelines)
    - Not meant to be a guideline for the general TS community.


## Notes

See `handbook` directory for handbook notes.

### General

- Strict superset of JavaScript (static type checking).
- Uses a structural type system!
    - Objects with the same shape are considered the same type.
    - Objects' shape can be a superset of the checked type and they will still pass.
        ```typescript
        interface Point {
            x: number;
            y: number;
        }

        function foo(point: Point) {}

        foo({x: 1, y: 1});  // OK
        foo({x: 1, y: 1, z: 1});  // OK
        foo({x: 1});  // Not OK
        ```

### To Check

- [TS for Functional Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html)
    - Goes a little more in-depth, consider looking into functional language first (e.g. Haskell).
    - [Union types are untagged.](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions)
    - [Recursive intersection and union for conflicts](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#intersections)
