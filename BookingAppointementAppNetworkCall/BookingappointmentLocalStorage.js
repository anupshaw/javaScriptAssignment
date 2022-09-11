const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.tel');
const mobileNo = document.querySelector('#tel');
const date = document.querySelector('#date')
const time = document.querySelector('#time')
const user = document.querySelector('#user')

const btn = document.querySelectorAll('#btn')[0];

// add event on button

btn.addEventListener("click", (e) => {



  //error

  if (nameInput.value == "" || emailInput.value == "" || mobileNo.value == "" || date.value == "" ||
    time.value == "") {
    document.getElementById('error').innerHTML = 'Please enter all the field';
  }

  // all the field should be filled 

  if (nameInput.value == "" || emailInput.value == "" || mobileNo.value == "" || date.value == "" ||
    time.value == "") {
    //style when user didn't  fill all the field

    document.querySelector('#btn').style.background = 'red';
    document.querySelector('#btn').style.color = 'Yellow';
    document.querySelector('#my_fieldset').style.background = 'Yellow';
    document.querySelector('#name').style.background = 'orange';
    document.querySelector('#email').style.background = 'orange';
    document.querySelector('#tel').style.background = 'orange';
    document.querySelector('#date').style.background = 'orange';
    document.querySelector('#time').style.background = 'orange';
    document.querySelector('body').style.backgroundImage = "url(product-failed.jpeg)";
    document.querySelector('body').style.backgroundSize = "cover";
    document.querySelector('body').style.backgroundRepeat = "no-repeat";


    // all the field should be filled otherwise it will give alert

    alert("Please enter all the field");
  }
  else {

    //style when user suceessfully fill the field

    document.querySelector('#btn').style.background = '';
    document.querySelector('#btn').style.color = '';
    document.querySelector('#my_fieldset').style.background = '';
    document.querySelector('#name').style.background = '';
    document.querySelector('#email').style.background = '';
    document.querySelector('#tel').style.background = '';
    document.querySelector('#date').style.background = '';
    document.querySelector('#time').style.background = '';
    document.querySelector('body').style.backgroundImage = 'url(160611383.jpg)';

    //display user details on screen

    //     e.preventDefault()
    //     var li = document.createElement('li');
    //     li.className = 'user_item'
    //     var newuser = document.createTextNode(`Name:${nameInput.value} ||  Email:${nameInput.value}
    //  || Phone:${mobileNo.value} || date:${date.value}  || Time:${time.value}`)
    //     console.log(newuser);
    //     li.appendChild(newuser);
    //     user.appendChild(li);



    let obj = {
      name: nameInput.value,
      email: emailInput.value,
      mobile: mobileNo.value,
      date: date.value,
      time: time.value
    }

    //to store object in cloud

    axios.post('https://crudcrud.com/api/5dbd6350c8ff4b129581992ce1fb61fe/userDetails',obj)
    .then((response)=>{ showUserDetails(response.data);
      console.log(response.data)})
    .catch((error)=>{console.log(error)})

    localStorage.setItem(obj.email, JSON.stringify(obj));


 //clear field

    nameInput.value = '';
    emailInput.value = "";
    mobileNo.value = "";
    date.value = "";
    time.value = "";

    //remove the error once field is correctly filled

    document.getElementById('error').innerHTML = '';

  }

})

//To fetch the all data from cloud

window.addEventListener('DOMContentLoaded', () => {

  axios.get('https://crudcrud.com/api/5dbd6350c8ff4b129581992ce1fb61fe/userDetails')
    .then((response)=>{ 
      let getArray = response.data;
      
      getArray.forEach((getObj) => {
          showUserDetails(getObj)
      })
    })
    .catch((error)=>{console.log(error)})
}
)

//function  showUserDetails

  function showUserDetails(userDetails) {
    let parentNode = document.getElementById('user');  //ul


    //Method 1:

    let childNode = `<li id='${userDetails._id}'> Name: ${userDetails.name}  :
                           Email:${userDetails.email}   Phone No:${userDetails.mobile}  : 
                             Date:${userDetails.date} : Time:${userDetails.time}
                             <button onclick=deleteuser('${userDetails._id}')>delete user</button>

                             <button onclick=EdituserDetails('${userDetails.name}','${userDetails.email}','${userDetails.mobile}','${userDetails.date}','${userDetails.time}','${userDetails._id}')>Edit userDetails</button>
                   </li>`;

    parentNode.innerHTML = parentNode.innerHTML + childNode;

    //Method 2:

    //  let btn=document.createElement('button');
    //  btn.appendChild(document.createTextNode('delete'));

    // let childNode=document.createElement('li');

    // let text=document.createTextNode(`Name: ${userDetails.name}  Email:${userDetails.email}`);

    // childNode.appendChild(text);

    // childNode.appendChild(btn);

    // parentNode.appendChild(childNode);

    // btn.addEventListener('click',removeChildElement);

  }

  // function for Edit the user details

  function EdituserDetails(name, email, mobile, Date, Time,userId) {
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('tel').value = mobile;
    document.getElementById('date').value = Date;
    document.getElementById('time').value = Time;
    console.log(userId)

    deleteuser(userId)


    //with put

    // axios.patch(`https://crudcrud.com/api/5dbd6350c8ff4b129581992ce1fb61fe/userDetails/${userId}`)
    // .then((response)=>{ console.log(userId);
    //    removeUserfromScreen(userId)})
    // .catch((error)=>{console.log(error)})

  }

  // function for delete the user details

  function deleteuser(userId) {

    console.log('id of user'+userId);

axios.delete(`https://crudcrud.com/api/5dbd6350c8ff4b129581992ce1fb61fe/userDetails/${userId}`)
.then((response)=>{console.log(`Deleted`);
        removeUserfromScreen(userId)
})
.catch((error)=>{console.log(error)})
}


function removeUserfromScreen(userId){
    let parentNode = document.getElementById('user');
    let childNodeToBeDeleted = document.getElementById(userId);
     parentNode.removeChild(childNodeToBeDeleted)
 }








