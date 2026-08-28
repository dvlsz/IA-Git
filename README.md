# Calculator

A simple JavaScript calculator that supports the four basic arithmetic operations.

## Supported Operations

- `addition`
- `subtraction`
- `multiplication`
- `division`

## Usage

Import or load `index.js`, then call the `calculator` function with an operation and two numbers:

```javascript
calculator('addition', 10, 5); // 15
calculator('subtraction', 10, 5); // 5
calculator('multiplication', 10, 5); // 50
calculator('division', 10, 5); // 2
```

```javascript
calculator(operation, number1, number2);
```

If an unsupported operation is provided, the function returns `0`.

## Requirements

- JavaScript runtime, such as Node.js or a web browser
