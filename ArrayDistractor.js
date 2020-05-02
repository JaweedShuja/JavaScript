import React,{useState} from 'react'

const [counter, setCounter] = useState(0);
this is called array destructing;

example

let arr = ['red', 'green'];
arr[0] // red

now destructing

const [colorOne, colorTwo] = arr;
colorOne // red
colorTwo // green
