
// GET ELEMENT BY CLASSNAME

// console.log(document.getElementsByClassName("list-group-items"))

var c=document.getElementsByClassName("list-group-items")
console.log(c[0].textContent);
console.log(c[0].className); //why it is giving undefined
c[0].textContent="Hello1"
c[1].textContent="Hello2"
c[2].style.fontWeight="Bold";
c[2].style.background="green"

for(let i=0;i<c.length;i++)
{
    c[i].style.fontWeight="Bold";
}






// GET ELEMENT BY TAGNAME



// var c=document.getElementsByTagName("li")
// console.log(c[0].textContent);
// console.log(c[0].class); //why it is giving undefined
// c[0].textContent="Hello1"
// c[1].textContent="Hello2"
// c[2].style.fontWeight="Bold";
// c[2].style.background="green"

// for(let i=0;i<c.length;i++)
// {
//     c[i].style.fontWeight="Bold";
//     c[i].style.background="green"
// }


// GET ELEMENT BY querySelecter

// var q=document.querySelector("#item");
// q.children[1].style.background="green";
// q.children[2].style.visibility="hidden";
// console.log(q.children[1]);


// GET ELEMENT BY querySelecterAll


// var q=document.querySelectorAll('li')[1];  //working
// q.style.background="orange";


// var q=document.querySelectorAll('#item');
// console.log(q);
// q[0].children[0].style.background="orange";
// q[0].style.background="orange";   //not working,why?

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.background="red"
//     even[i].style.background="orange"
// }



//parentNode

// var p=document.querySelector('#items');
// console.log(p.parentNode.parentNode.parentNode.parentNode);



//parentNode
// var p=document.querySelector('#items');
// console.log(p.parentElement.parentElement.parentElement.parentElement);



//childNodes

// var p=document.querySelector('#container');
// console.log(p.childNodes)




//childElement

// var p=document.querySelector('#container');
// console.log(p.children[1])



//createElement

// var newDiv=document.createElement('div');

// newDiv.className="container1"
// newDiv.id="containerid1"
// newDiv.setAttribute('title','Hello2')
// console.log(newDiv);


// var newDivText=document.createTextNode('Babu Rao');
// console.log(newDivText);

// newDiv.appendChild(newDivText)

// console.log(newDiv);



// var container=document.querySelector('#child');

// var form=document.querySelector('form');

// container.insertBefore(newDiv,form);