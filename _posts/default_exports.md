---
title: 'Understand the difference between default and named imports and exports.'
excerpt: 'The default exports tend to be used for whatever you normally expect to get from the module. The named exports tend to be used for utilities that might be handy, but aren’t always necessary. However it is up to you to choose how to export things: for example, a module might have no default export at all.'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2019-01-01T05:35:07.322Z'
author:
    name: Tharaka
    picture: '/assets/blog/authors/tim.jpeg'
ogImage:
    url: '/assets/blog/hello-world/cover.jpg'
---

I just saw this discussion on default and named imports and exports when you are using ES6 modules. Though I'd just share it.

Question by [onyGW](http://stackoverflow.com/users/2228325/tonygw)

"It seems to be obvious, but I found myself a bit confused about when to use curly braces for importing a single module in ES6. For example, in the React-Native project I am working on, I have the following file and its content:"

**initialState.js:**

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
var initialState = {
    todo: {
        todos: [
            {id: 1, task: 'Finish Coding', completed: false},
            {id: 2, task: 'Do Laundry', completed: false},
            {id: 2, task: 'Shopping Groceries', completed: false},
        ]
    }
};

export default initialState;
```

</div>

In the `TodoReducer.js`, I have to import it without curly braces:

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
import initialState from './todoInitialState';
```

</div>

If I enclose the initialState in curly braces, I get the following error for the following line of code:

**Cannot read property todo of undefined**

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
export default function todos(state = **initialState.todo**, action) {
    ...
}
```

</div>

Similar errors also happen to my components with the curly braces. I was wondering when I should use curly braces for a single import, because obviously, when importing multiple component/modules, you have to enclose them in curly braces, which I know.

Edit:

The SO post at [<ins>here</ins>](http://stackoverflow.com/questions/31096597/using-brackets-with-javascript-import-syntax) does not answer my question, instead I am asking *when* I should or should not use curly braces for importing a single module, or I should never use curly braces for importing a single module in ES6 (this is apparently not the case, as I have seen single import with curly braces required)

Answer by [<ins>Dan Abramov</ins>](https://twitter.com/dan_abramov)

This is a **default import**:

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
// B.js
import A from './A'
```

</div>

It only works if A contains a **default export**:

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
// A.js
export default 42
```

</div>

In this case it doesn’t matter what name you assign to it when importing:

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
// B.js
import A from './A'
import MyA from './A'
import Something from './A'
```

</div>

Because it will always resolve to whatever is the **default export** of A.

This is a **named import** called A:

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
import { A } from './A'
```

</div>

It only works if A contains a **named export** called A:

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
export const A = 42
```

</div>

In this case the name matters because you’re importing a **specific thing by its export name**:

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
// B.js
import { A } from './A'
import { myA } from './A' // Doesn't work!
import { Something } from './A' // Doesn't work!
```

</div>

To make these work, you would add a corresponding **named export** to A:

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
// A.js
export const A = 42
export const myA = 43
export const Something = 44
```

</div>

A module can only have one default export, but as many named exports as you like (zero, one, or many). You can import them together:

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
// B.js
import A, { myA, Something } from './A'
```

</div>

Here, we import the default export as A, and named exports called myA and Something as myAand Something, respectively.

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
// A.js
export default 42
export const myA = 43
export const Something = 44
```

</div>

We can also assign them all different names when importing:

<div style="background-color: rgb(242, 240, 240); padding: 20px; font-size:15px;">

```
// B.js
import X, { myA as myX, Something as XSomething } from './A'
```

</div>

The **default exports** tend to be used for whatever you normally expect to get from the module. The **named exports** tend to be used for utilities that might be handy, but aren’t always necessary. However it is up to you to choose how to export things: for example, a module might have no **default export** at all.
