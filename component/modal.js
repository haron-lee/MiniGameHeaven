import GameBox from "./gameBox.js";

class Modal {
  #width;
  #height;
  #gameId;
  #modal;
  #splash;

  constructor(width, height, id) {
    this.#height = height;
    this.#width = width;
    this.#gameId = id;
    this.#modal = document.createElement("div");
    this.#splash = document.createElement("div");
  }

  showModal() {
    const $main = document.querySelector("#app");

    this.#modal.className = "modal-screen";
    this.#modal.style.width = this.#width + "px";
    this.#modal.style.height = this.#height + "px";
    this.#splash.className = "splash-screen";
    this.#splash.style.width = this.#width + "px";
    this.#splash.style.height = this.#height + "px";
    this.#splash.innerHTML = `
    <div class="loading-container">
		<div class="loading"></div>
		<div id="loading-text">loading</div>
	</div>`;
    this.#modal.appendChild(this.#splash);
    $main.appendChild(this.#modal);
    setTimeout(() => {
      this.#modal.style.opacity = 1;
      this.#splash.style.opacity = 1;
    }, 10);
    setTimeout(() => {
      this.showGame();
    }, 1500);
  }

  showGame() {
    const playGame = new GameBox(this.#gameId);
    playGame.onGame();
    setTimeout(() => {
      this.#splash.style.opacity = 0;
    }, 500);
    setTimeout(() => {
      this.#splash.remove();
    }, 2000);
  }
  closeGame() {
    console.log("test");
    const $closeModal = document.querySelector(".modal-screen");
    setTimeout(() => {
      $closeModal.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
      $closeModal.remove();
    }, 300);
  }
}

// function setGameScreen() {
//   let newGameScreen = document.createElement("div");
//   let closeGameBtn = document.createElement("button");
//   closeGameBtn.className = "game-close-btn";
//   closeGameBtn.type = "button";
//   closeGameBtn.textContent = "X";
//   newGameScreen.appendChild(closeGameBtn);
//   newGameScreen.classList.add("modal-screen", "game-screen");
//   $main.appendChild(newGameScreen);
//   document.querySelector(".game-close-btn").addEventListener("click", offGame);
//   offModal();
// }

// function gameFadeOff() {
//   const $gameScreen = document.querySelector(".game-screen");
//   $gameScreen.style.opacity = 1;
//   $gameScreen.remove();
// }

// function offGame() {
//   const $gameScreen = document.querySelector(".game-screen");
//   $gameScreen.style.opacity = 0;
//   setTimeout(gameFadeOff, 3000);
//   autoRotateMouseCheck = true;
// }

// function onModal(screen) {
//   autoRotateMouseCheck = false;

//   let newModal = document.createElement("div");
//   let closeModalBtn = document.createElement("button");
//   closeModalBtn.className = "modal-close-btn";
//   closeModalBtn.type = "button";
//   closeModalBtn.textContent = "X";
//   newModal.appendChild(closeModalBtn);
//   newModal.className = "modal-screen";
//   $main.appendChild(newModal);
//   setTimeout(setModalOn, 500);
//   setTimeout(setGameScreen, 1100);
// }

// function setModalOn() {
//   document.querySelector(".modal-screen").style.transition = "all 1s";
//   document.querySelector(".modal-screen").style.opacity = 1;
//   document
//     .querySelector(".modal-close-btn")
//     .addEventListener("click", offModal);
// }

// function setModalOff() {
//   const $forDel = document.querySelector(".modal-screen");
//   $forDel.remove();
// }

// function offModal() {
//   const $forDel = document.querySelector(".modal-screen");
//   $forDel.style.opacity = 0;
//   setTimeout(setModalOff, 3000);
//   autoRotateMouseCheck = true;
// }

export default Modal;
