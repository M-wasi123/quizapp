

const quest=[
    {
        que: `<h3>Q 1: What is the correct syntax for referring to an external script called "script.js"?</h3>`,
        ans1: `<script src="script.js">`,
        ans2: `<script href="script.js">`,
        ans3: `<script ref="script.js">`,
        ans4: `<script name="script.js">`,
        ans: `<script src="script.js">`
    },
    {
        que: `<h3>Q 2: How do you write "Hello World" in an alert box?</h3>`,
        ans1: `alertBox("Hello World");`,
        ans2: `msg("Hello World");`,
        ans3: `alert("Hello World");`,
        ans4: `msgBox("Hello World");`,
        ans: `alert("Hello World");`
    },
    {
        que: `<h3>Q 3: How do you create a function in JavaScript?</h3>`,
        ans1: `function myFunction()`,
        ans2: `function = myFunction()`,
        ans3: `function:myFunction()`,
        ans4: `function => myFunction()`,
        ans: `function myFunction()`
    },
    {
        que: `<h3>Q 4: How do you call a function named "myFunction"?</h3>`,
        ans1: `call myFunction()`,
        ans2: `call function myFunction()`,
        ans3: `myFunction()`,
        ans4: `myFunction`,
        ans: `myFunction()`
    },
    {
        que: `<h3>Q 5: How to write an IF statement in JavaScript?</h3>`,
        ans1: `if i == 5 then`,
        ans2: `if (i == 5)`,
        ans3: `if i = 5`,
        ans4: `if i = 5 then`,
        ans: `if (i == 5)`
    },
    {
        que: `<h3>Q 6: How to write an IF statement for executing some code if "i" is NOT equal to 5?</h3>`,
        ans1: `if (i != 5)`,
        ans2: `if (i <> 5)`,
        ans3: `if i <> 5`,
        ans4: `if i =! 5`,
        ans: `if (i != 5)`
    },
    {
        que: `<h3>Q 7: How does a WHILE loop start?</h3>`,
        ans1: `while (i <= 10; i++)`,
        ans2: `while (i <= 10)`,
        ans3: `while i = 1 to 10`,
        ans4: `while (i <= 10, i++)`,
        ans: `while (i <= 10)`
    },
    {
        que: `<h3>Q 8: How does a FOR loop start?</h3>`,
        ans1: `for (i <= 5; i++)`,
        ans2: `for (i = 0; i <= 5)`,
        ans3: `for i = 1 to 5`,
        ans4: `for (i = 0; i <= 5; i++)`,
        ans: `for (i = 0; i <= 5; i++)`
    },
    {
        que: `<h3>Q 9: How can you add a comment in JavaScript?</h3>`,
        ans1: `'This is a comment`,
        ans2: `<!-- This is a comment -->`,
        ans3: `// This is a comment`,
        ans4: `** This is a comment`,
        ans: `// This is a comment`
    },
    {
        que: `<h3>Q 10: How can you add a multi-line comment in JavaScript?</h3>`,
        ans1: `<!-- This comment has more than one line -->`,
        ans2: `// This comment has more than one line //`,
        ans3: `/* This comment has more than one line */`,
        ans4: `** This comment has more than one line **`,
        ans: `/* This comment has more than one line */`
    },
    {
        que: `<h3>Q 11: What is the correct way to write a JavaScript array?</h3>`,
        ans1: `var colors = "red", "green", "blue"`,
        ans2: `var colors = (1:"red", 2:"green", 3:"blue")`,
        ans3: `var colors = ["red", "green", "blue"]`,
        ans4: `var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")`,
        ans: `var colors = ["red", "green", "blue"]`
    },
    {
        que: `<h3>Q 12: How do you find the number with the highest value of x and y?</h3>`,
        ans1: `Math.max(x, y)`,
        ans2: `Math.ceil(x, y)`,
        ans3: `top(x, y)`,
        ans4: `ceil(x, y)`,
        ans: `Math.max(x, y)`
    },
    {
        que: `<h3>Q 13: What is the correct JavaScript syntax for opening a new window called "w2"?</h3>`,
        ans1: `w2 = window.open("http://www.example.com");`,
        ans2: `w2 = window.new("http://www.example.com");`,
        ans3: `w2 = open.new("http://www.example.com");`,
        ans4: `w2 = new.window("http://www.example.com");`,
        ans: `w2 = window.open("http://www.example.com");`
    },
    {
        que: `<h3>Q 14: Which event occurs when the user clicks on an HTML element?</h3>`,
        ans1: `onchange`,
        ans2: `onclick`,
        ans3: `onmouseclick`,
        ans4: `onmouseover`,
        ans: `onclick`
    },
    {
        que: `<h3>Q 15: How do you declare a JavaScript variable?</h3>`,
        ans1: `var carName`,
        ans2: `v carName;`,
        ans3: `variable carName;`,
        ans4: `carName;`,
        ans: `var carName`
    },
    {
        que: `<h3>Q 16: Which operator is used to assign a value to a variable?</h3>`,
        ans1: `*`,
        ans2: `-`,
        ans3: `+`,
        ans4: `=`,
        ans: `=`
    },
    {
        que: `<h3>Q 17: How to write an array in JavaScript?</h3>`,
        ans1: `var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")`,
        ans2: `var colors = "red", "green", "blue"`,
        ans3: `var colors = (1:"red", 2:"green", 3:"blue")`,
        ans4: `var colors = ["red", "green", "blue"]`,
        ans: `var colors = ["red", "green", "blue"]`
    },
    {
        que: `<h3>Q 18: How do you round the number 7.25, to the nearest integer?</h3>`,
        ans1: `Math.rnd(7.25)`,
        ans2: `rnd(7.25)`,
        ans3: `round(7.25)`,
        ans4: `Math.round(7.25)`,
        ans: `Math.round(7.25)`
    },
    {
        que: `<h3>Q 19: Which operator is used to compare two values?</h3>`,
        ans1: `=`,
        ans2: `==`,
        ans3: `===`,
        ans4: `!=`,
        ans: `==`
    },
    {
        que: `<h3>Q 20: How do you find the minimum value of x and y using JavaScript?</h3>`,
        ans1: `Math.min(x, y)`,
        ans2: `Math.lesser(x, y)`,
        ans3: `min(x, y)`,
        ans4: `Math.low(x, y)`,
        ans: `Math.min(x, y)`
    },
    {
        que: `<h3>Q 21: What will the following code return: typeof "Hello"?</h3>`,
        ans1: `string`,
        ans2: `int`,
        ans3: `boolean`,
        ans4: `undefined`,
        ans: `string`
    },
    {
        que: `<h3>Q 22: How can you detect the client's browser name?</h3>`,
        ans1: `client.navName`,
        ans2: `browser.name`,
        ans3: `navigator.appName`,
        ans4: `browser.appName`,
        ans: `navigator.appName`
    },
    {
        que: `<h3>Q 23: What is the correct way to write a JavaScript object?</h3>`,
        ans1: `var person = ("firstName":"John", "lastName":"Doe", "age":25)`,
        ans2: `var person = {firstName:"John", lastName:"Doe", age:25}`,
        ans3: `var person = ["firstName":"John", "lastName":"Doe", "age":25]`,
        ans4: `var person = "firstName":"John", "lastName":"Doe", "age":25`,
        ans: `var person = {firstName:"John", lastName:"Doe", age:25}`
    },
    {
        que: `<h3>Q 24: Which method can be used to convert an object to a JSON string?</h3>`,
        ans1: `JSON.parse()`,
        ans2: `JSON.stringify()`,
        ans3: `JSON.convert()`,
        ans4: `JSON.toString(`,
        ans: `JSON.stringify()`
    },
    {
        que: `<h3>Q 25: How do you remove the first element from an array and return that element?</h3>`,
        ans1: `array.pop()`,
        ans2: `array.shift()`,
        ans3: `array.unshift()`,
        ans4: `array.splice(0, 1)`,
        ans: `array.shift()`
    }

]


export {quest}