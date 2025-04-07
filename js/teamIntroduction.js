import { db } from './firebaseConfig.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const container = document.getElementById("team-container");

async function loadTeamMembers() {
  const querySnapshot = await getDocs(collection(db, "team"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="${data.photo}" alt="${data.name}" />
      <h3>${data.name}</h3>
      <p>${data.role}</p>
      <button onclick="location.href='team_details.html?id=${doc.id}'">상세 정보</button>
    `;
    container.appendChild(card);
  });
}

loadTeamMembers();