// require('dotenv').config();

// const ACESS_TOKEN = process.env.ACESS_TOKEN;
let ACESS_TOKEN
const inputTxt = document.getElementById("input");
const image = document.getElementById("image");
const button = document.getElementById("btn");

async function query() {
    image.src = './loader.webp';
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
		{
			headers: { Authorization: `Bearer ${ACESS_TOKEN}` },
			method: "POST",
			body: JSON.stringify({inputs : inputTxt.value }),
		}
	);
	const result = await response.blob();
	return result;
}

button.addEventListener('click', async function(){
    query().then((response) => {
        const objectURL = URL.createObjectURL(response);
        image.src = objectURL;
})
});