// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import {
  getDatabase as getdatabase,
  ref as hero,
  set as sot,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdzTwdUGTyyVFchDbGr_E7Gv0SnQYBZxI",
  authDomain: "datastore-6f62a.firebaseapp.com",
  projectId: "datastore-6f62a",
  storageBucket: "datastore-6f62a.appspot.com",
  messagingSenderId: "709034801139",
  appId: "1:709034801139:web:72b3934e36c029d86f8486",
  measurementId: "G-NGJ5DKCC1B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

document.getElementById("submit").addEventListener("click", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const jobrole = document.getElementById("job_role").value;
  const message = document.getElementById("message").value;
  const resume = document.getElementById("resume").files[0];
  let ResumeURL = "";
  const applyLink = document.getElementById("apply");

  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    address === "" ||
    message === "" ||
    resume === "" ||
    jobrole === ""
  ) {
    alert("please fill the fields properly");
  } else {
    let resumeName = "";
    if (resume) {
      resumeName = resume.name;
    }

    if (resume) {
      const storageRef = ref(storage, `uploaded_resume/${resumeName}`);
      await uploadBytes(storageRef, resume);

      const URL = await getDownloadURL(storageRef);

      ResumeURL = URL;

      var params = {
        from_name: name,
        email_id: email,
        phone_number: phone,
        address: address,
        job_role: jobrole,
        message: message,
        resume_url: ResumeURL,
      };

      const update = await emailjs.send(
        "service_e4zj7bn",
        "template_e91nkg7",
        params
      );

      if (update.status === 200) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("address").value = "";
        document.getElementById("job_role").value = "";
        document.getElementById("message").value = "";
        document.getElementById("resume").value = "";
        console.log("HI")
        applyLink.href = "../careers/thanks.html";
      } else {
        applyLink.href = "../careers/error.html";
      }

      applyLink.click();
    }
  }
});
