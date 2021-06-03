<div class="parent">
	<div class="col">
		<div class="sp sp-3balls" />
	</div>
</div>

<style>
	.parent {
		display: grid;
		place-items: center;
	}
	.col {
		padding: 10px;
		border-radius: 4px;
		height: 125px;
		margin-bottom: 10px;
	}

	.sp {
		width: 32px;
		height: 32px;
		clear: both;
		margin: 20px auto;
	}

	/* Spinner 3Balls Scale */
	.sp-3balls,
	.sp-3balls:before,
	.sp-3balls:after {
		border-radius: 50%;
		background-color: var(--brandColor);
		width: 18px;
		height: 18px;
		transform-origin: center center;
		display: inline-block;
	}

	.sp-3balls {
		position: relative;
		background-color: var(--brandColor);
		opacity: 1;
		-webkit-animation: spScaleAlpha 1s infinite linear;
		animation: spScaleAlpha 1s infinite linear;
	}

	.sp-3balls:before,
	.sp-3balls:after {
		content: '';
		position: relative;
		opacity: 0.25;
	}

	.sp-3balls:before {
		left: 30px;
		top: 0px;
		-webkit-animation: spScaleAlphaBefore 1s infinite linear;
		animation: spScaleAlphaBefore 1s infinite linear;
	}

	.sp-3balls:after {
		left: -30px;
		top: -23px;
		-webkit-animation: spScaleAlphaAfter 1s infinite linear;
		animation: spScaleAlphaAfter 1s infinite linear;
	}

	@-webkit-keyframes spScaleAlpha {
		0% {
			opacity: 1;
		}
		33% {
			opacity: 0.25;
		}
		66% {
			opacity: 0.25;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes spScaleAlpha {
		0% {
			opacity: 1;
		}
		33% {
			opacity: 0.25;
		}
		66% {
			opacity: 0.25;
		}
		100% {
			opacity: 1;
		}
	}
	@-webkit-keyframes spScaleAlphaBefore {
		0% {
			opacity: 0.25;
		}
		33% {
			opacity: 1;
		}
		66% {
			opacity: 0.25;
		}
	}
	@keyframes spScaleAlphaBefore {
		0% {
			opacity: 0.25;
		}
		33% {
			opacity: 1;
		}
		66% {
			opacity: 0.25;
		}
	}
	@-webkit-keyframes spScaleAlphaAfter {
		33% {
			opacity: 0.25;
		}
		66% {
			opacity: 1;
		}
		100% {
			opacity: 0.25;
		}
	}
	@keyframes spScaleAlphaAfter {
		33% {
			opacity: 0.25;
		}
		66% {
			opacity: 1;
		}
		100% {
			opacity: 0.25;
		}
	}
</style>
