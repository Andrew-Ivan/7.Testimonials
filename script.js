let btnLeft = document.querySelector('.left');
let btnRight = document.querySelector('.right');
let imgBox = document.querySelector('.client__img');
let nameBox = document.querySelector('.client__name');
let textBox = document.querySelector('.client__feedback');

let boxStars = document.querySelector('.client__estimation');
let star = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/1200px-Full_Star_Yellow.svg.png';

for(let i = 0; i < 3; i++){
	boxStars.innerHTML += `<img class='client__star' src=${star}>`
}

const value = [
	{
	 img: 'https://static2.aniimg.com/upload/20170605/701/4/B/M/4BMGEF.jpg',
	 name: 'Naruto',
	 text: 'Если отказаться от надежды спасти друга означает поумнеть, то я лучше навсегда останусь глупцом.',
	 starValue: '3'
	},
	 {
	 img: 'https://pbs.twimg.com/media/D64qJi8XkAA9D3X.jpg:large',
	 name: 'Kakashi',
	 text: 'Быть другим — не значит быть лучше. Иначе говоря, гвоздь, который торчит, забьют первым.',
	 starValue: '4'
	},
	 {
	 img: 'https://damasktear.files.wordpress.com/2011/07/naruto-neji-coloured.png',
	 name: 'Neji',
	 text: 'Если ты сам ставишь пред собой потолок, то тебе никогда его не преодолеть... Разломай все свои стены и бесстрашно сделай огромный шаг вперёд.',
	 starValue: '2'
	},
	 {
	 img: 'https://yt3.ggpht.com/a/AATXAJygp7E82o9OrG5RqChhp5qly3RNbR7k99-IuKx1=s900-c-k-c0xffffffff-no-rj-mo',
	 name: 'Shikamaru',
	 text: 'Никогда не спорь с идиотом. Сначала он опустит тебя до своего уровня, а потом задавит опытом.',
	 starValue: '5'
	},
	 {
	 img: 'https://avatars.mds.yandex.net/get-zen_doc/119454/pub_5e99cbe66c0a0274c76e5175_5e9ad344fd549001b4cd6ce2/scale_1200',
	 name: 'Gaara',
	 text: 'Просто потому, что кто-то важен для вас, не обязательно означает, что человек хороший.',
	 starValue: '3'
	},

]

let counter = 0


btnLeft.onclick = function() {
	changeValue(0)
}


btnRight.onclick = function() {
	changeValue(1)
}

function changeValue(i) {

	if(i){
		if(counter >= value.length - 1) {
			counter = 0
		} else {
			counter++;
		}
	}else {
		if(counter == 0){
			counter = value.length - 1
		} else {
			counter--;
		}
	}
	
	boxStars.innerHTML = ''
	for(let i = 0; i < `${value[counter].starValue}`; i++){
		boxStars.innerHTML += `<img class='client__star' src=${star}>`
	}

	textBox.innerHTML = `"${value[counter].text}"`
	nameBox.innerHTML = `${value[counter].name}`
	imgBox.style.background = `url(${value[counter].img}) center/cover no-repeat`

}
