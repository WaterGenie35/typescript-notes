# TypeScript Notes

## Resources

- [Official Documentation](https://www.typescriptlang.org/docs/)
- [TS Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### JavaScript

- [Microsoft Developer Hub's Resources](https://developer.microsoft.com/en-gb/javascript/)
- [MDN's Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## Notes

### General

- Strict superset of JavaScript (compile-time type checking)
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

#### [TS for Functional Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html)
Goes a little more in-depth, consider looking into functional language first (e.g. Haskell).
- [Union types are untagged.](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions)
- [Recursive intersection and union for conflicts](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#intersections)
