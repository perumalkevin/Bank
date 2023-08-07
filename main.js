const firebaseConfig = {
  apiKey: "AIzaSyAbYrHn1rj9-5BkF5fCl7bsfLCNOwYM6Sc",
  authDomain: "banking-a9d87.firebaseapp.com",
  projectId: "banking-a9d87",
  storageBucket: "banking-a9d87.appspot.com",
  messagingSenderId: "356086520863",
  appId: "1:356086520863:web:621ed6f9b5a8e18e35892a",
  measurementId: "G-QPZP113K8M"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const auth = firebase.auth();

  document.querySelector('#submit').addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#password').value;
    auth.createUserWithEmailAndPassword(email, pass).then(credential => {

      console.log(credential);

    })
  })

