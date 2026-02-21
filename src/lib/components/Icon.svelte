<script lang="ts">
	type IconName = 'email' | 'phone' | 'facebook' | 'instagram' | 'shield' | 'info' | 'users' |
		'message-circle' | 'handshake' | 'target' | 'clock' | 'trending-up' | 'award' | 'star' |
		'building' | 'truck' | 'layers' | 'zap' | 'file' | 'briefcase' | 'tag' | 'trending-down' |
		'package' | 'tool' | 'home' | 'settings' | 'monitor' | 'car' | 'compass' | 'anchor' |
		'bar-chart' | 'file-text' | 'coffee';

	export let name: IconName;
	export let size: number = 24;
	export let color: string = 'currentColor';
	export let strokeWidth: number = 2;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round">
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
	{:else if name === 'trending-down'}
		<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
		<polyline points="17 18 23 18 23 12"/>
	{:else if name === 'award'}
		<circle cx="12" cy="8" r="7"/>
		<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
	{:else if name === 'star'}
		<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
	{:else if name === 'building'}
		<rect x="2" y="3" width="20" height="18" rx="1"/>
		<path d="M9 3v18"/>
		<path d="M5 8h1"/><path d="M5 12h1"/><path d="M5 16h1"/>
		<path d="M13 8h3"/><path d="M13 12h3"/><path d="M13 16h3"/>
	{:else if name === 'truck'}
		<path d="M1 3h15v13H1z"/>
		<path d="M16 8h4l3 3v5h-7V8z"/>
		<circle cx="5.5" cy="18.5" r="2.5"/>
		<circle cx="18.5" cy="18.5" r="2.5"/>
	{:else if name === 'layers'}
		<polygon points="12 2 2 7 12 12 22 7 12 2"/>
		<polyline points="2 17 12 22 22 17"/>
		<polyline points="2 12 12 17 22 12"/>
	{:else if name === 'zap'}
		<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
	{:else if name === 'file'}
		<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
		<polyline points="14 2 14 8 20 8"/>
	{:else if name === 'file-text'}
		<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
		<polyline points="14 2 14 8 20 8"/>
		<line x1="16" y1="13" x2="8" y2="13"/>
		<line x1="16" y1="17" x2="8" y2="17"/>
		<polyline points="10 9 9 9 8 9"/>
	{:else if name === 'briefcase'}
		<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
		<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
	{:else if name === 'tag'}
		<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
		<line x1="7" y1="7" x2="7.01" y2="7"/>
	{:else if name === 'package'}
		<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
		<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
		<polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
		<line x1="12" y1="22.08" x2="12" y2="12"/>
	{:else if name === 'tool'}
		<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
	{:else if name === 'home'}
		<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
		<polyline points="9 22 9 12 15 12 15 22"/>
	{:else if name === 'settings'}
		<circle cx="12" cy="12" r="3"/>
		<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
	{:else if name === 'monitor'}
		<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
		<line x1="8" y1="21" x2="16" y2="21"/>
		<line x1="12" y1="17" x2="12" y2="21"/>
	{:else if name === 'car'}
		<path d="M19 17H5a2 2 0 0 1-2-2V9l2-4h14l2 4v6a2 2 0 0 1-2 2z"/>
		<circle cx="7" cy="17" r="2"/>
		<circle cx="17" cy="17" r="2"/>
	{:else if name === 'compass'}
		<circle cx="12" cy="12" r="10"/>
		<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
	{:else if name === 'anchor'}
		<circle cx="12" cy="5" r="3"/>
		<line x1="12" y1="22" x2="12" y2="8"/>
		<path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
	{:else if name === 'bar-chart'}
		<line x1="18" y1="20" x2="18" y2="10"/>
		<line x1="12" y1="20" x2="12" y2="4"/>
		<line x1="6" y1="20" x2="6" y2="14"/>
	{:else if name === 'coffee'}
		<path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
		<path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
		<line x1="6" y1="1" x2="6" y2="4"/>
		<line x1="10" y1="1" x2="10" y2="4"/>
		<line x1="14" y1="1" x2="14" y2="4"/>
	{/if}
</svg>
