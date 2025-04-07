import { db } from './firebaseConfig.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const container = document.getElementById("member-detail");

async function loadMember() {
  const docRef = doc(db, "team", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    container.innerHTML = `
      <h2>${data.name}</h2>
      <a href="team_introduction.html">← 돌아가기</a>
    `;
  } else {
    container.innerHTML = '<p>팀원 정보를 찾을 수 없습니다.</p>';
  }
}

loadMember();