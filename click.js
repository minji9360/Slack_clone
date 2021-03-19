const buttons = document.querySelector(".menu");
const channels = document.querySelector(".channels");
const direct = document.querySelector(".direct__button");

function clickMenuSlide(button) {
	if (button.classList.contains("channel")) {
		// 클릭한 버튼이 channel일 경우
		if (button.classList.contains("slide")) {
			// 해당 버튼을 재클릭 하는 경우
			console.log(button);
			button.classList.remove("slide");
			button.children[0].classList.remove("close");
			for (i = 0; i < channels.childElementCount; i++) {
				channels.children[i].classList.remove("hidden");
			}
		} else {
			// 해당 버튼을 처음 클릭하는 경우
			button.classList.add("slide");
			button.children[0].classList.add("close");
			button.classList.add("slide");
			for (i = 0; i < channels.childElementCount; i++) {
				if (!channels.children[i].classList.contains("click")) {
					channels.children[i].classList.add("hidden");
				}
			}
		}
	} else {
		// 클릭한 버튼이 다이렉트일 경우
		if (button.classList.contains("slide")) {
			button.classList.remove("slide");
			button.children[0].classList.remove("close");
			direct.classList.remove("hidden");
		} else {
			if (!direct.classList.contains("click")) {
				button.classList.add("slide");
				button.children[0].classList.add("close");
				direct.classList.add("hidden");
			}
		}
	}
}

function clickMenu(button) {
	// menu 버튼 전체 클릭 상태 비활성화로 변경
	for (i = 0; i < buttons.childElementCount; i++) {
		if (buttons.children[i].classList.contains("click")) {
			buttons.children[i].classList.remove("click");
		}
		if (buttons.children[i].children[0].classList.contains("menu__img")) {
			if (
				!buttons.children[i].classList.contains("channel") &
				!buttons.children[i].classList.contains("direct")
			) {
				buttons.children[i].children[0].classList.remove("hidden");
				buttons.children[i].children[1].classList.add("hidden");
			}
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
