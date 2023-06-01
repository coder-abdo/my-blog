---
layout: "../../components/BlogLayout.astro"
title: Centering Element in CSS
author: Abdelmonaem
date: 2023-06-04
description: A post describe how to center element in CSS with different methods.
image: { src: "/images/css.png", title: "centering in css" }
draft: false
category: CSS
---

# Centering Elements in CSS

Centering elements in CSS can be a tricky task, especially when dealing with different types of elements and layouts. However, there are several techniques that can be used to achieve centering in different scenarios.

## Horizontally Centering a Block-Level Element

To horizontally center a block-level element (such as a `div`), you can use the `margin: 0 auto;` shorthand property. This centers the element within its container by setting the left and right margins to `auto`.

```css
.container {
  width: 80%;
  margin: 0 auto;
}
```

In this example, the `.container` element is given a width of 80% and its left and right margins are set to `auto`, centering it within its parent container.

## Vertically Centering a Block-Level Element

Vertically centering a block-level element can be more challenging, as there is no straightforward way to do it using CSS alone. However, there are several techniques that can be used, such as using the `flexbox` or `grid` layout.

### Using Flexbox

To vertically center a block-level element using the `flexbox` layout, you can use the `align-items` and `justify-content` properties. Set the `display` property of the parent container to `flex` and use the `align-items` and `justify-content` properties with the `center` value to center the child element vertically and horizontally.

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

In this example, the `.container` element is set to a `flex` display, and its child element is centered both vertically and horizontally using the `align-items` and `justify-content` properties.

### Using Grid

To vertically center a block-level element using the `grid` layout, you can use the `align-items` and `justify-items` properties. Set the `display` property of the parent container to `grid` and use the `align-items` and `justify-items` properties with the `center` value to center the child element vertically and horizontally.

```css
.container {
  display: grid;
  align-items: center;
  justify-items: center;
}
```

In this example, the `.container` element is set to a `grid` display, and its child element is centered both vertically and horizontally using the `align-items` and `justify-items` properties.

## Centering an Inline Element

To center an inline element (such as an `img`), you can use the `text-align` property. Set the `text-align` property of the parent container to `center` to center the inline element.

```css
.container {
  text-align: center;
}
```

In this example, the `.container` element has its `text-align` set to `center`, centering the `img` element inside it.

In conclusion, centering elements in CSS can be achieved using a variety of techniques, depending on the type of element and layout. By understanding these techniques, you can create more visually appealing and user-friendly designs.
