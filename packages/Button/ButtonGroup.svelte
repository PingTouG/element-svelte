<div class="es-button-group">
	<slot />
</div>

<style>
	.es-button-group {
		--radius: 4px;
		display: inline-block;
		vertical-align: middle;
	}

	:global(.es-button-group > .es-button) {
		float: left;
		position: relative;
	}

	:global(.es-button-group > .es-button:first-child) {
		border-radius: var(--radius) 0 0 var(--radius);
		margin-right: 1px;
	}

	:global(.es-button-group > .es-button:not(:first-child):not(:last-child)) {
		border-radius: 0;
		margin-right: 1px;
	}

	:global(.es-button-group > .es-button:last-child) {
		border-radius: 0 var(--radius) var(--radius) 0;
	}

	/* 
    
    &:first-child {
      border-top-left-radius: $radius;
      border-bottom-left-radius: $radius;
      border-right-color: $borderColor;
    }

    &:last-child {
      border-top-right-radius: $radius;
      border-bottom-right-radius: $radius;
      border-left-color: $borderColor;
    }

    &:not(:first-child):not(:last-child) {
      border-left-color: $borderColor;
      border-right-color: $borderColor;
    }

    &:not(:last-child) {
      margin-right: -1px;
    } */
</style>
