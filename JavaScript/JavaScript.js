const BurgerMenu = document.getElementById("Burger");
const Page = document.getElementById("Page");


BurgerMenu.addEventListener("click", () => {
	if (Page.classList.contains("active")) {
		BurgerMenu.classList.remove("active");
		Page.classList.remove("active");
	} else {
		BurgerMenu.classList.add("active");
		Page.classList.add("active");
	}
});



