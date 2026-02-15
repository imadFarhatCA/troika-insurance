<script lang="ts">
	type IconName = 'email' | 'phone' | 'facebook' | 'instagram' | 'shield' | 'info' | 'users' |
		'message-circle' | 'handshake' | 'target' | 'clock' | 'trending-up' | 'award' | 'star';

	export let name: IconName;
	export let size: number = 24;
	export let color: string = 'currentColor';
	export let strokeWidth: number = 2;
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke={color}
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
>
	{#if name === 'email'}
		<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
		<polyline points="22,6 12,13 2,6"></polyline>
	{:else if name === 'phone'}
		<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
	{:else if name === 'facebook'}
		<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
	{:else if name === 'instagram'}
		<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
		<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
		<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
	{:else if name === 'shield'}
		<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
	{:else if name === 'info'}
		<circle cx="12" cy="12" r="10"/>
		<line x1="12" y1="16" x2="12" y2="12"/>
		<line x1="12" y1="8" x2="12.01" y2="8"/>
	{:else if name === 'users'}
		<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
		<circle cx="9" cy="7" r="4"/>
		<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
		<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
	{:else if name === 'message-circle'}
		<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
	{:else if name === 'handshake'}
		<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
		<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
	{:else if name === 'target'}
		<circle cx="12" cy="12" r="10"/>
		<circle cx="12" cy="12" r="6"/>
		<circle cx="12" cy="12" r="2"/>
	{:else if name === 'clock'}
		<circle cx="12" cy="12" r="10"/>
		<polyline points="12 6 12 12 16 14"/>
	{:else if name === 'trending-up'}
		<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
		<polyline points="17 6 23 6 23 12"/>
	{:else if name === 'award'}
		<circle cx="12" cy="8" r="7"/>
		<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
	{:else if name === 'star'}
		<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
	{/if}
</svg>
