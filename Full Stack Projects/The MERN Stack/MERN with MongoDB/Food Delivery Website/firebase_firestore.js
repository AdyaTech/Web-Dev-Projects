// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } 
  from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDpdXMciolSBM_eAXQzR_S4VyFWWYBswvM",
  authDomain: "food-delivery-website-001.firebaseapp.com",
  projectId: "food-delivery-website-001",
  storageBucket: "food-delivery-website-001.appspot.com",
  messagingSenderId: "181011038661",
  appId: "1:181011038661:web:5f36d3a41ff70efd00cbac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form Submission
const form = document.querySelector(".cta-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const source = document.getElementById("select-where").value;

  if (!name || !email || !source) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const subscriptionsRef = collection(db, "subscriptions");
    await addDoc(subscriptionsRef, {
      name,
      email,
      source,
      timestamp: serverTimestamp()
    });

    alert("Thank you! Your subscription is confirmed.");
    form.reset();
  } catch (err) {
    console.error("Firestore error:", err.code, err.message);
    alert("Oops! Something went wrong. Please try again.");
  }
});
