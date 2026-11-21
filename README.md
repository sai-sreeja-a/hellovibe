# Set 02 – JavaScript & TypeScript

## 📌 Project Overview

This project focuses on implementing JavaScript utility functions and building a TypeScript-based ETL (Extract, Transform, Load) data processing pipeline.

It also includes order management services, TypeScript interfaces, and unit tests to validate the functionality of the implemented methods.

## 📂 Project Structure

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

## 🚀 Key Modules

### 1. JavaScript Utilities

Implementation of commonly used JavaScript utility functions:

- **Map:** Transforms elements in an array.
- **Filter:** Filters elements based on a condition.
- **Reduce:** Reduces an array into a single value.
- **Debounce:** Controls the frequency of function execution.
- **Deep Clone:** Creates a deep copy of an object.
- **ForEach:** Iterates through array elements.

### 2. ETL Data Processing

A TypeScript-based ETL pipeline that works with data stored in JSON format.

The pipeline includes:

- **Data Generation:** Generates sample data.
- **Parser:** Reads and parses JSON data.
- **Validator:** Validates incoming data.
- **Normalizer:** Cleans and standardizes data.
- **Grouping:** Groups data based on defined criteria.
- **Summary:** Generates summarized results.
- **Index:** Coordinates the ETL processing workflow.

### 3. Order Management

The orders module includes:

- Type definitions using TypeScript.
- Order service implementation.
- Order service unit tests.

## 🧪 Testing

Unit tests are included to verify the JavaScript utility functions:

- map.test.ts
- filter.test.ts
- reduce.test.ts
- debounce.test.ts
- deepClone.test.ts
- forEach.test.ts

Order service testing is also included in the orders module.

## 🛠️ Technologies Used

- JavaScript
- TypeScript
- Node.js
- JSON
- Git
- GitHub

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/sai-sreeja-a/hellovibe.git
```

### 2. Navigate to the project directory

```bash
cd set-02-javascript-typescript
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run TypeScript type checking

```bash
npx tsc --noEmit
```

### 5. Run tests

Use the test script configured in package.json:

```bash
npm test
```

## 🎯 Learning Objectives

- Understand JavaScript array methods and their implementations.
- Work with asynchronous JavaScript concepts.
- Practice TypeScript interfaces and type definitions.
- Build a structured ETL data processing pipeline.
- Implement data validation and transformation.
- Understand unit testing and code quality.

## 👩‍💻 Author

**Sai Sreeja**

GitHub: [sai-sreeja-a](https://github.com/sai-sreeja-a)

---

*Set 02 – JavaScript & TypeScript*
