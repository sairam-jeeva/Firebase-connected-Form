
const firebaseConfig = {
        apiKey: "AIzaSyC1SCfVfF2MRGZsSZIII0-xdKp8qfctiPo",
        authDomain: "contactform-16977.firebaseapp.com",
        databaseURL: "https://contactform-16977-default-rtdb.firebaseio.com",
        projectId: "contactform-16977",
        storageBucket: "contactform-16977.appspot.com",
        messagingSenderId: "929511117867",
        appId: "1:929511117867:web:84150ab42ca6b6291b866e"
      };

  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };