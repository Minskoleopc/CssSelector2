// 1
// selecting the element by tagName

// <div>Elementone</div>
// <p id = "one" class = "two">ParaOne</p>
// <span>SpanOne</span>

//p

//2
// Selecting the element by id 
//<p id = "one">para</p>

// #one

// 3 Selecting the element by class
//<button class ="btn btn-primary">Submit</button>
//.btn-primary 

//4 Selecting the element by attribute
// tagName[attribute="value"]
// p[name="nm"]

// //5Selecting the element by multiple attributes
// <p id = "para" class = "red" name = "nm">para</p>
//<p id = "para" class = "red" name = "email">para2</p>

//p[class="red"][name= "email"]


// 5 Partial match on attribute values
//Starts with (^=)
//<a href = "https://facebook.com/ide">facebook</a>
//<a href = "https://google.com/qwe">Google</a>

//a[href^="https://facebook"]

//EndsWith ($=)
// <a href = "https://facebook.com/ide">facebook</a>
// <a href = "https://google.com">Google</a>
//a[href$=".com"]

//Contains(*=)
// <a href = "https://facebook.com/ide">facebook</a>
// <a href = "https://google.com">Google</a>
//a[href *= "google"]

// Direct child selector
{/* <ul>
<li>Item 1</li>
<ol>
    <li>Item 2</li>
</ol>
</ul> */}


// Descendent selector 
// ul > li
{/* <ul>
<li>Apple</li>
<li>Mango</li>
<li>Banana</li>
<li>Grapes</li>
<li>Papaya</li>
</ul> */}



// ul li

// Adjacent sibling
// <!--
//     <h1 id="one">Main title</h1>
//     <h2>Subtitle</h2> -->
//h1 + h2

// General sibling selector
    // <h1 id="one">Main title</h1>
    // <h2>Subtitle</h2> -->
    // <span>Description</span>
    //h1 ~ span



{/* <ul id = "one">
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
    <span>Not a list</span>
    <li>Grapes</li>
</ul> */}
//#one li:nth-child(4)

{/* <ul id = "one">
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
    <span>Not a list</span>
    <li>Grapes</li>
</ul> */}
//#one li:nth-of-type(4)











