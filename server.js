/***************************************************************************************
 
step 1 -> $ npm init -y

step 2 -> $ npm install express

step 3 -> $ touch server.js

step 4 -> include the following boiler plate code for the server

// import express into this file
const express = require('express');

// initialize an instance of express
const app = express();

// define the port that the web server should run on
const port = 3000;

// Create a route
app.get('/', (req, res) => {
   console.log("Request received at the / endpoint")
   return res.send('Hello, how are you?')
});

// Start the server
app.listen(port, () => {
   console.log(`Server is running on port ${port}`)
});

step 5 -> $ node server.js

step 6 -> go to the browser and type 127.0.0.1:3000 to show the server

***************************************************************************************/


// import express into this file
const express = require('express');

// initialize an instance of express
const app = express();

// define the port that the web server should run on
const port = 3000;

// Create a route
// when the server receives a request at the / endpoint
// then execute the code that is provided
// console.log(...)
app.get('/', (req, res) => 
{
   console.log("Request received at the / endpoint")
   return res.send('Hello, how are you? +++++')
}
);

app.get('/download', (req, res) => 
{
   console.log("Request received at the /download endpoint")
   return res.send('placeholder for /download')
}
);

app.get('/nitro', (req, res) => 
{
   console.log("Request received at the /nitro endpoint")
   return res.send('placeholder for /nitro')
}
);

app.get('/etc', (req, res) => 
{
   console.log("Request received at the /etc endpoint")
   return res.send('placeholder for /etc')
}
);

app.get('/fib', (req, res) => 
{
    let n1 = 0;
    let n2 = 1;
    let next = 0;
    let output_string = "";

    for (let i = 0; i < 10; i++)
    {
        console.log(n1)

        // n1 = number data type (all numbers)
        // res.send() does not always output numbers
        // res.send() will output a string
        // res.send() will only be able to call once due to return
        // so we need to concatinate a string of fib numbers

        output_string = output_string + ' ' + `${n1}`;

        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }

    return res.send(output_string);
}
);

app.get('/webpage', (req, res) => 
{
   console.log("Request received at the /webpage endpoint")
   return res.send('<h1>Here is a webpage example</h1><p>This is a sentence.</p><p>This is another sentence.</p><a href="/fib">Calculate the first 10 Fib numbers.</a>')
}
);

/*
how do we make writing HTML easier?
solution 1: string interpolation
*/
app.get('/webpage2', (req, res) => 
{
    const output_html_string = `
        <main style="border:1px solid magenta; display:flex; flex-directionProw; width:500px; justify-content:space-between; font-family:Arial;">
        <p style="background-color:cyan;">Apple</p>
        <p style="background-color:yellow;">Orange</p>
        </main>
    `
    return res.send(output_html_string);
}
);

// modified fib 
app.get('/fib2', (req, res) => 
{
    let n1 = 0;
    let n2 = 1;
    let next = 0;
    let output_string = "";

    // setting the initial opening tag to <ol>
    output_string = '<ol>';


    for (let i = 0; i < 10; i++)
    {
        console.log(n1)

        // n1 = number data type (all numbers)
        // res.send() does not always output numbers
        // res.send() will output a string
        // res.send() will only be able to call once due to return
        // so we need to concatinate a string of fib numbers

        // append every number as a list
        output_string += '<li>' + `${n1}` + '</li>';

        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }

    // setting the closing to </ol>
    output_string += '</ol>';

    return res.send(output_string);
}
);

// Start the server
app.listen(port, () => 
{
   console.log(`Server is running on port ${port}`)
   
});
