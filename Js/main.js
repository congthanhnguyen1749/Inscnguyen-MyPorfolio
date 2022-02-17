let begin = document.querySelector(".begin__align");

setTimeout(() => {
	begin.style = "animation: animationoutheader 3.3s 1s ease forwards alternate";

	setTimeout(() => {
		begin.style = "display:none";
	}, 4300);
}, 15000);