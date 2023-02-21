// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDyvOb6lV360HrwX8XXjRZWVrT1vJPIh9M",
  authDomain: "rod-alexanderson.firebaseapp.com",
  databaseURL: "https://rod-alexanderson-default-rtdb.firebaseio.com",
  projectId: "rod-alexanderson",
  storageBucket: "rod-alexanderson.appspot.com",
  messagingSenderId: "25820827324",
  appId: "1:25820827324:web:cf71da204253d0006d0ab9"
};

firebase.initializeApp(config);

	// Reference messages collection
  var messagesRef = firebase.database().ref('contactformmessages');

  $('#form').submit(function(e) {
    e.preventDefault();
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name: $('#name').val(),
    email: $('#email').val(),
    services: $('#services').val(),
    extra: $('#extra').val()
    });
    $('.success-message').show();
    $('#form')[0].reset();
    });



// const { default: firebase } = require("@firebase/app-compat")

// const form = document.getElementById('form')

// if(form) {
//   form.addEventListener('submit',contactForm )
// }

// function contactForm(event) {
//   event.preventDefault()
//   const name = document.getElementById('name')
//   const email = document.getElementById('email')
//   const services = document.getElementById('services')
//   const extra = document.getElementById('extra')

//   const data = {
//     'name': name.value,
//     'email': email.value,
//     'services': services.value,
//     'extra': extra.value,
//   }
//   saveContactForm(data)
//   form.reset()
// }

// function saveContactForm(data) {
//   firebase.database().ref('contact').push(data)
//   .then(function() {
//     console.log('mensaje guardado')
//   }) . catch(function() {
//     console.log('mensaje no guardado')
//   })
// }