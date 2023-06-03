---
layout: "../../components/BlogLayout.astro"
title: Asynchronous in Javascript
author: Abdelmonaem
date: 2023-06-03
description: A post describe how the Concurency works in javascript under the hood.
image: { src: "/images/async-in-js.png", title: "Async in js" }
draft: true
category: javascript
---

# Asynchronous in JavaScript

JavaScript is a single-threaded language, meaning that it can only execute one task at a time. However, JavaScript also has built-in mechanisms for performing asynchronous operations, allowing it to handle tasks that take a long time to complete without blocking the main thread.

Asynchronous operations in JavaScript are typically handled using callbacks, promises, or async/await syntax.

## Callbacks

Callbacks are functions that are passed as arguments to other functions and are called when a certain event occurs. For example, the `setTimeout` function takes a callback function as its first argument and executes it after a certain amount of time has passed:

```javascript
console.log("Start");
setTimeout(() => {
  console.log("End");
}, 1000);
console.log("Middle");
```

In this example, the `setTimeout` function is called with a callback function that logs "End" to the console after one second. The "Start" and "Middle" messages are logged synchronously before the callback is executed, demonstrating the asynchronous nature of the `setTimeout` function.

## Promises

Promises are objects that represent the eventual completion or failure of an asynchronous operation and allow for more concise and readable code than callbacks. Promises have three states: pending, fulfilled, and rejected.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
      resolve(randomNum);
    } else {
      reject(new Error("Number is less than 0.5"));
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log(`Success: ${result}`);
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });
```

In this example, a promise is created that resolves with a random number greater than 0.5 after one second, or rejects with an error message if the random number is less than 0.5. The `then` method is called on the promise to handle the success case, and the `catch` method is called to handle the error case.

## Async/await

Async/await is a newer syntax that provides a more synchronous-looking way to write asynchronous code. Async functions return promises, and the `await` keyword can be used to pause the execution of an async function until a promise is resolved.

```javascript
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Start");
  await timeout(1000);
  console.log("Middle");
  await timeout(1000);
  console.log("End");
}

asyncFunction();
```

In this example, the `asyncFunction` logs "Start", waits for one second using the `timeout` function, logs "Middle", waits for another second using the `timeout` function, and logs "End". The `await` keyword is used to pause the execution of the `asyncFunction` until the promises returned by the `timeout` function are resolved.

Async/await syntax can also be used with `try`/`catch` blocks to handle errors in a more synchronous-looking way.

In conclusion, JavaScript provides several mechanisms for handling asynchronous operations, including callbacks, promises, and async/await syntax. Understanding these mechanisms is essential for writing efficient and scalable JavaScript code.
