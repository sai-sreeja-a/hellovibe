# JavaScript & TypeScript Fundamentals

## Project Overview

This project demonstrates my understanding of JavaScript and TypeScript fundamentals through practical implementations.

The project includes:

- Custom JavaScript utility functions.
- Fetching data from multiple public APIs.
- Handling asynchronous operations using Promises and async/await.
- Building a typed ETL (Extract, Transform, Load) pipeline.
- Implementing a TypeScript order management system.
- Understanding important JavaScript concepts.

---

## 1. Closures

### What is a Closure?

A closure is a feature in JavaScript where an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.

Closures allow functions to maintain access to their surrounding scope.

### Example

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### Explanation

1. The `createCounter()` function creates a variable called `count`.
2. It returns an inner function.
3. The inner function accesses and modifies the `count` variable.
4. Even after `createCounter()` finishes execution, the inner function remembers the variable.
5. Each time we call `counter()`, the value increases.

### Common Uses of Closures

- Data privacy.
- Maintaining state between function calls.
- Function factories.
- Event handlers.
- Debouncing and throttling.

---

## 2. JavaScript Event Loop

### What is the Event Loop?

JavaScript is single-threaded, meaning it executes JavaScript code using one main call stack.

The event loop manages asynchronous operations and determines when their callbacks can execute.

It allows JavaScript to handle operations such as timers, promises, and API requests without blocking the main thread while those operations are waiting.

### Important Components

**1. Call Stack**

The call stack executes synchronous JavaScript functions. Functions are added to the stack when called and removed when they finish.

**2. Web APIs / Runtime APIs**

The browser or JavaScript runtime provides APIs for operations such as timers and network requests.

**3. Callback Queue (Task Queue)**

This queue holds callbacks from tasks such as `setTimeout` after they are ready to execute.

**4. Microtask Queue**

This queue holds higher-priority asynchronous callbacks, including Promise `.then()`, `.catch()`, and `.finally()` handlers.

**5. Event Loop**

The event loop checks whether the call stack is empty. When it is, it processes queued microtasks before moving to the next task.

### Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### Output

```text
Start
End
Promise
Timeout
```

### Explanation

1. `"Start"` is printed immediately because it is synchronous.
2. `setTimeout()` schedules its callback as a task.
3. The Promise callback is added to the microtask queue.
4. `"End"` is printed because synchronous execution continues.
5. After the call stack becomes empty, the event loop processes the microtask queue.
6. `"Promise"` is printed.
7. The event loop then processes the timer task, printing `"Timeout"`.

### Execution Order

The simplified execution order is:

1. Execute synchronous code.
2. Process available microtasks.
3. Process the next task from the task queue.
4. Repeat.

### Why is the Event Loop Important?

- It enables asynchronous JavaScript execution.
- It helps prevent blocking while waiting for asynchronous operations.
- It explains how Promises and timers are scheduled.
- It is important when working with APIs, user interactions, and timers.

---

## 3. `==` vs `===` in JavaScript

JavaScript provides two common equality operators: `==` and `===`.

### Loose Equality (`==`)

The `==` operator compares two values after performing type coercion when necessary.

This means JavaScript may convert one value to another type before comparing them.

Example:

```javascript
console.log(5 == "5");       // true
console.log(0 == false);     // true
console.log(null == undefined); // true
```

### Strict Equality (`===`)

The `===` operator compares both value and type without performing type coercion.

Example:

```javascript
console.log(5 === "5");      // false
console.log(0 === false);    // false
console.log(5 === 5);        // true
```

### Difference Between `==` and `===`

| Feature | `==` | `===` |
|---|---|---|
| Comparison | Value after coercion | Value and type |
| Type coercion | Yes, when needed | No |
| Strict comparison | No | Yes |
| Recommended usage | Only when coercion is intentional | Preferred in most cases |

### Practical Example

```javascript
const userInput = "100";
const actualAmount = 100;

if (userInput == actualAmount) {
  console.log("Values are equal");
}

if (userInput === actualAmount) {
  console.log("Values and types are equal");
}
```

Output:

```text
Values are equal
```

The first condition is true because JavaScript converts the string `"100"` into a number for comparison.

The second condition is false because one value is a string and the other is a number.

### Best Practice

Use `===` and `!==` in most situations because they avoid unexpected type coercion and make comparisons more predictable.

---

## 4. Project Structure

```text
set-02-javascript-typescript/
│
├── data/
│   └── messy-data.json
│
├── src/
│   ├── utilities/
│   │   ├── map.ts
│   │   ├── filter.ts
│   │   ├── reduce.ts
│   │   ├── debounce.ts
│   │   ├── deepClone.ts
│   │   └── forEach.ts
│   │
│   ├── etl/
│   │   ├── generateData.ts
│   │   ├── parser.ts
│   │   ├── validator.ts
│   │   ├── normalizer.ts
│   │   ├── grouping.ts
│   │   ├── summary.ts
│   │   └── index.ts
│   │
│   └── orders/
│       ├── types.ts
│       ├── orderService.ts
│       └── orderService.test.ts
│
├── tests/
│   ├── map.test.ts
│   ├── filter.test.ts
│   ├── reduce.test.ts
│   ├── debounce.test.ts
│   ├── deepClone.test.ts
│   └── forEach.test.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 5. Running the Project

### Install Dependencies

```bash
npm install
```

### Run All Tests

```bash
npm run test:run
```

### Check TypeScript Errors

```bash
npm run typecheck
```

### Generate Messy ETL Data

```bash
npm run etl
```

### Run the ETL Pipeline

```bash
npm run etl:run
```

---

## Conclusion

Through this project, I practised JavaScript fundamentals, asynchronous programming, TypeScript generics, data processing, and testing.

I also gained a better understanding of closures, the event loop, and equality operators in JavaScript.

This project helped me improve my problem-solving skills and understand how to write reusable, type-safe, and testable code.