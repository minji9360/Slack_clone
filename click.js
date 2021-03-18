const buttons = document.querySelector(".menu");
const channels = document.querySelector(".channels");

function clickMenu(button) {
	// menu 버튼 전체 클릭 상태 비활성화로 변경
	for (i = 0; i < buttons.childElementCount; i++) {
		if (buttons.children[i].classList.contains("click")) {
			buttons.children[i].classList.remove("click");
		}
		if (buttons.children[i].children[0].classList.contains("menu__img")) {
			buttons.children[i].children[0].classList.remove("hidden");
			buttons.children[i].children[1].classList.add("hidden");
		}
	}

	for (i = 0; i < channels.childElementCount; i++)
		channels.children[i].classList.remove("click");

	// 클릭한 버튼 활성화
	if (button.children[0].classList.contains("menu__img")) {
		// 메뉴 아이콘이 있을 경우
		button.children[0].classList.add("hidden");
		button.children[1].classList.remove("hidden");
	}
	button.classList.add("click");
}

function init() {}

init();
