const page  = `LOG INTHE WORLD'S LARGEST WEB DEVELOPER SITE
JS Reference
JS by Category
JS by Alphabet

JavaScript
JS Array
JS Boolean
JS Classes
JS Date
JS Error
JS Global
JS JSON
JS Math
JS Number
JS Operators
JS RegExp
JS Statements
JS String
charAt()
charCodeAt()
concat()
constructor
endsWith()
fromCharCode()
includes()
indexOf()
lastIndexOf()
length
localeCompare()
match()
prototype
repeat()
replace()
search()
slice()
split()
startsWith()
substr()
substring()
toLocaleLowerCase()
toLocaleUpperCase()
toLowerCase()
toString()
toUpperCase()
trim()
valueOf()

HTML DOM
DOM Attributes
DOM Document
DOM Element
DOM Events
DOM Event Objects
DOM HTMLCollection
DOM Location
DOM Navigator
DOM Screen
DOM Style
DOM Window

Web APIs
API Console
API Geolocation
API History
API Storage

HTML Objects
<a>
<abbr>
<address>
<area>
<article>
<aside>
<audio>
<b>
<base>
<bdo>
<blockquote>
<body>
<br>
<button>
<canvas>
<caption>
<cite>
<code>
<col>
<colgroup>
<datalist>
<dd>
<del>
<details>
<dfn>
<dialog>
<div>
<dl>
<dt>
<em>
<embed>
<fieldset>
<figcaption>
<figure>
<footer>
<form>
<head>
<header>
<h1> - <h6>
<hr>
<html>
<i>
<iframe>
<img>
<ins>
<input> button
<input> checkbox
<input> color
<input> date
<input> datetime
<input> datetime-local
<input> email
<input> file
<input> hidden
<input> image
<input> month
<input> number
<input> password
<input> radio
<input> range
<input> reset
<input> search
<input> submit
<input> text
<input> time
<input> url
<input> week
<kbd>
<label>
<legend>
<li>
<link>
<map>
<mark>
<menu>
<menuitem>
<meta>
<meter>
<nav>
<object>
<ol>
<optgroup>
<option>
<output>
<p>
<param>
<pre>
<progress>
<q>
<s>
<samp>
<script>
<section>
<select>
<small>
<source>
<span>
<strong>
<style>
<sub>
<summary>
<sup>
<table>
<tbody>
<td>
<tfoot>
<th>
<thead>
<tr>
<textarea>
<time>
<title>
<track>
<u>
<ul>
<var>
<video>

Other References
CSSStyleDeclaration
JS Conversion





JavaScript String match() Method
Example
Search a string for "ain":

var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);
More "Try it Yourself" examples below.

Definition and Usage
The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

Read more about regular expressions in our RegExp Tutorial and our RegExp Object Reference.

Note: If the regular expression does not include the g modifier (to perform a global search), the match() method will return only the first match in the string.

This method returns null if no match is found.

Browser Support
Method					
match()	Yes	Yes	Yes	Yes	Yes
Syntax
string.match(regexp)
Parameter Values
Parameter	Description
regexp	Required. The value to search for, as a regular expression.
ADVERTISEMENT


Technical Details
Return Value:	An Array, containing the matches, one item for each match, or null if no match is found
JavaScript Version:	ECMAScript 1
More Examples
Example
Perform a global, case-insensitive search for "ain":

var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/gi);

ADVERTISEMENT


COLOR PICKER
colorpicker
SHARE
 

HOW TO
Tabs
Dropdowns
Accordions
Side Navigation
Top Navigation
Modal Boxes
Progress Bars
Parallax
Login Form
HTML Includes
Google Maps
Range Sliders
Tooltips
Slideshow
Filter List
Sort List
Certificates
ADVERTISEMENT


ADVERTISEMENT


Top Tutorials
HTML Tutorial
CSS Tutorial
JavaScript Tutorial
How To Tutorial
SQL Tutorial
Python Tutorial
W3.CSS Tutorial
Bootstrap Tutorial
PHP Tutorial
Java Tutorial
C++ Tutorial
jQuery Tutorial
Top References
HTML Reference
CSS Reference
JavaScript Reference
SQL Reference
Python Reference
W3.CSS Reference
Bootstrap Reference
PHP Reference
HTML Colors
Java Reference
Angular Reference
jQuery Reference
Top Examples
HTML Examples
CSS Examples
JavaScript Examples
How To Examples
SQL Examples
Python Examples
W3.CSS Examples
Bootstrap Examples
PHP Examples
Java Examples
XML Examples
jQuery Examples
Web Certificates
HTML Certificate
CSS Certificate
JavaScript Certificate
SQL Certificate
Python Certificate
PHP Certificate
Bootstrap Certificate
XML Certificate
jQuery Certificate
W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.

Copyright 1999-2020 by Refsnes Data. All Rights Reserved.
W3Schools is Powered by W3.CSS.

W3Schools.com`
const paragraph = document.querySelector('p').innerHTML
const charsPage = [...page]
// const lettersNumbers = [...new Set(paragraph)]

const filteredLetters = charsPage.filter(char => char.match(/[a-z0-9]/i))
console.log(filteredLetters)
// const mapped = filteredLetters.map (char => char.toLowerCase())
// console.log(mapped)
const result = filteredLetters.reduce(countLetters , {})
function countLetters(acc , item) {
    // acc[item] = acc[item] + 1 || 1
    acc[item] ? acc[item] = acc[item] + 1 : acc[item] = 1
    return acc
}

console.log(result)

const sorted = Object.entries(result).sort(sortedByValue)

function sortedByValue(a,b) {
    return a[1] - b[1]

}
console.log(sorted)
















