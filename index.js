const input = document.getElementById('input');
const send_btn = document.getElementById('send_btn')
const ul = document.getElementById('ul')

send_btn.addEventListener('click', ()=> {
	value = input.value;
	if (value) {
		let li = document.createElement('li');
		const name = document.createElement('p')
		const msg = document.createElement('p')
		name.innerHTML="You"
		name.classList.add('fs-6', 'fw-bold', 'm-0', 'p-0', 'text-info', 'border-bottom')
		
		msg.innerHTML = value;
		msg.classList.add('m-0', 'p-0', 'text-light')
		
		li.appendChild(name)
		li.appendChild(msg)
		li.classList.add('m-1', 'p-2', 'message', 'rounded-3', 'bg-gray')
		ul.appendChild(li)
		input.value = "";
		
		
	} else {
		console.log('null');
	}
});