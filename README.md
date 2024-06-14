# String Calculator with Next.js

This project is a simple String Calculator implemented in Next.js and TypeScript. It includes test-driven development (TDD) and continuous integration/continuous deployment (CI/CD) setup with GitHub Actions.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone git@github.com:mehulbhanderiw/string-calculator.git
cd string-calculator
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Running Tests

To run the tests for the String Calculator, use the following command:

```bash
npm test
```

## String Calculator Features

- **Empty String**: Returns 0
  - Input: “”, Output: 0

- **Single Number**: Returns the number itself
  - Input: “1”, Output: 1

- **Two Numbers**: Returns the sum of the two numbers
  - Input: “1,5”, Output: 6

- **Multiple Numbers**: Returns the sum of all numbers
  - Allow the add method to handle any amount of numbers.

- **New Lines as Delimiters**: Handles new lines between numbers
  - Input: "1\n2,3" should return 6

- **Custom Delimiters**: Supports different delimiters specified in the format `//[delimiter]\n[numbers]`
  - For example, "//;\n1;2" where the delimiter is ";" should return 3.

- **Negative Numbers**: Throws an exception with a message listing all negative numbers
  - Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".


## CI/CD with GitHub Actions

![CI](https://github.com/mehulbhanderiw/string-calculator/actions/workflows/ci.yml/badge.svg)

This project includes a CI/CD pipeline set up with GitHub Actions. The workflow is triggered on `push` and `pull_request` events to the `main` branch and runs the tests automatically.

The workflow file is located at `.github/workflows/ci.yml`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

