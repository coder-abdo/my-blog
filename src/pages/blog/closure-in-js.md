---
layout: "../../components/BlogLayout.astro"
title: Closure in Javascript
author: Abdelmonaem
date: 2023-06-02
description: A post describe what is the closure in javascript under the hood.
image: { src: "/images/closure.png", title: "closure in js" }
draft: false
category: javascript
---

# Closure in JavaScript

In JavaScript, a closure is created when a function is defined inside another function, and the inner function refers to variables from the outer function. In other words, a closure allows a function to access variables from an outer function even after the outer function has returned.

Here's an example:

```javascript
function outerFunction() {
  const message = "Hello, ";

  function innerFunction(name) {
    console.log(message + name);
  }

  return innerFunction;
}

const greeting = outerFunction();
greeting("John"); // Output: "Hello, John"
```

In the above example, the `outerFunction` defines a variable `message` and a nested function `innerFunction` that takes a parameter `name` and logs a message to the console by concatenating the `message` with the `name` parameter.

The `outerFunction` then returns the `innerFunction` as a value. When we call `outerFunction` and assign the returned value to `greeting`, we are actually assigning the `innerFunction` to `greeting`.

Finally, we call `greeting` with a name parameter, which invokes the `innerFunction` and logs the message to the console.

The interesting part here is that `innerFunction` still has access to the `message` variable, even though `outerFunction` has already returned and its execution context has been destroyed. This is because the `innerFunction` forms a closure over the`message` variable, keeping a reference to it in its own lexical environment.

Here's another example to illustrate closure:

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3
```

In this example, the `counter` function returns an inner function that increments a `count` variable and logs its value to the console. Every time we call `increment`, the `count` variable is incremented and its new value is logged to the console.

Again, the `increment` function forms a closure over the `count` variable, keeping a reference to it in its own lexical environment. This allows the `count` variable to persist between function calls, and for the `increment` function to maintain its state.

In conclusion, closures are a powerful feature of JavaScript that allow functions to maintain access to variables from their parent scopes even after those scopes have returned. Closures are commonly used for creating private variables and functions, implementing currying and partial application, and for creating iterators and generators.
