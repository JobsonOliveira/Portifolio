const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 140})`;
}

setInterval(carrossel, 1800);


const controls = document.querySelectorAll('.control');
		let currentItem = 0
		const items = document.querySelectorAll('.item');
		const maxItems = items.length;
		
		controls.forEach((control) => {
			control.addEventListener("click", () => {
				const isLeft = control.classList.contains("arrow-left");
				
				if (isLeft){
					currentItem -= 1;
				}else{
					currentItem += 1;
				}
				
				if (currentItem >= maxItems){
					currentItem = 0;
				}
				if (currentItem < 0){
					currentItem = maxItems -1;
				}
				
				items.forEach(item => item.classList.remove('current-item'));
				
				items[currentItem].scrollIntoView({
					inline: "center",
					behavior: "smooth",
				});
				
				items[currentItem].classList.add("current-item");
				

			});
		});
function openGithub(){
	const win = window.open("https://github.com/JobsonOliveira")
}
function openLinkedin(){
	const win = window.open("https://www.linkedin.com/in/jobson-de-oliveira-coutinho-5882b9251")
}
function openGmail(){
	const win = window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzCpGdFlnfgqJsPvXtDdjjGnMqSpSMrhJBZHFNkFwJQJQqwJPcvSQJrwcGCJkFcLkhhDLbW")
}
function openInstagram(){
	const win = window.open("https://instagram.com/jobson_oliveira44?igshid=OTk0YzhjMDVlZA==")
}