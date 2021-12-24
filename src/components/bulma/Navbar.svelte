<script context="module">
	let current = 0;
</script>
<script>
	current = current + 1;
	//import { faInfo, faLock, faHome, faExclamationCircle, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
	let id = current;
	function handleClick(event) {
		let burgerIcon = event.target;
		let dropMenu = document.getElementById(burgerIcon.dataset.target);
		burgerIcon.classList.toggle('is-active');
		dropMenu.classList.toggle('is-active');
	}
</script>

<nav class="navbar">
	<div class="navbar-brand">
		<slot name="brand"></slot>
		<div id="burger{id}" class="navbar-burger" data-target="navbar{id}" on:click={handleClick}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
	<div class="navbar-menu" id="navbar{id}">
		<slot name="navbar-start"></slot>
		<slot name="navbar-end"></slot>
	</div>
</nav>
