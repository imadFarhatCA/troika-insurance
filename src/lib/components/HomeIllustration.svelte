<!-- Cross-section house illustration for the Homeowners hero -->
<svg
	viewBox="0 0 380 420"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class="home-illustration"
	aria-hidden="true"
>
	<defs>
		<linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" stop-color="#a0339e"/>
			<stop offset="100%" stop-color="#72187a"/>
		</linearGradient>
		<linearGradient id="skyBg" x1="0%" y1="0%" x2="0%" y2="100%">
			<stop offset="0%" stop-color="#f7f2ff"/>
			<stop offset="100%" stop-color="#fdfbff"/>
		</linearGradient>
		<filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
			<feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#c4a0dc" flood-opacity="0.22"/>
		</filter>
		<clipPath id="leftHalf">
			<rect x="28" y="0" width="142" height="420"/>
		</clipPath>
		<clipPath id="rightHalf">
			<rect x="170" y="0" width="142" height="420"/>
		</clipPath>
	</defs>

	<!-- ── Background ───────────────────────────────────────── -->
	<rect width="380" height="420" fill="url(#skyBg)"/>
	<ellipse cx="178" cy="285" rx="185" ry="148" fill="#ede4ff" opacity="0.38"/>

	<!-- ── Shield aura (behind house) ──────────────────────── -->
	<path
		d="M190,24 C240,24 362,72 362,188 C362,292 292,350 190,384
		   C88,350 18,292 18,188 C18,72 140,24 190,24Z"
		fill="rgba(146,39,143,0.032)"
		stroke="#92278f"
		stroke-width="1.4"
		stroke-dasharray="10,7"
		opacity="0.52"
	/>

	<!-- ── Ground ───────────────────────────────────────────── -->
	<ellipse cx="182" cy="368" rx="188" ry="11" fill="#e0d8f0"/>
	<rect x="28" y="360" width="284" height="14" rx="4" fill="#ddd4ee"/>

	<!-- ── House walls ──────────────────────────────────────── -->

	<!-- Left exterior wall -->
	<rect x="28" y="148" width="142" height="214" fill="#f0eaf8" stroke="#ddd4f0" stroke-width="1.5"/>

	<!-- Right interior cutaway wall -->
	<rect x="170" y="148" width="142" height="214" fill="#faf8ff"/>
	<!-- Dashed border for cutaway effect -->
	<path
		d="M170,148 L312,148 L312,360 L170,360"
		stroke="none"
	/>
	<path
		d="M312,148 L312,360 L170,360"
		stroke="#d8cce8"
		stroke-width="1.5"
		stroke-dasharray="6,4"
	/>

	<!-- Floor divider line -->
	<rect x="170" y="252" width="142" height="5" rx="1" fill="#e4d6f4"/>

	<!-- Cutaway vertical line -->
	<line x1="170" y1="148" x2="170" y2="360" stroke="#d4c4e8" stroke-width="1.5" stroke-dasharray="5,4"/>

	<!-- ── Left Exterior ─────────────────────────────────────── -->

	<!-- Upper window -->
	<rect x="46" y="164" width="84" height="68" rx="5" fill="#deeeff" stroke="#c4d8f4" stroke-width="1.5"/>
	<!-- Window glass shimmer -->
	<rect x="49" y="167" width="24" height="62" rx="2" fill="white" opacity="0.28"/>
	<!-- Cross bars -->
	<line x1="88" y1="164" x2="88" y2="232" stroke="#c4d8f4" stroke-width="1"/>
	<line x1="46" y1="198" x2="130" y2="198" stroke="#c4d8f4" stroke-width="1"/>
	<!-- Curtain hints -->
	<path d="M46,164 L60,164 L46,186Z" fill="#e8d8f4" opacity="0.7"/>
	<path d="M130,164 L116,164 L130,186Z" fill="#e8d8f4" opacity="0.7"/>
	<!-- Sill -->
	<rect x="41" y="230" width="94" height="5" rx="2" fill="#d4c4e8"/>

	<!-- Door -->
	<rect x="60" y="284" width="72" height="78" rx="5" fill="#e2ceee" stroke="#cbb8e0" stroke-width="1.5"/>
	<!-- Door arch -->
	<path d="M60,284 Q96,256 132,284" fill="#d4bce8" stroke="#cbb8e0" stroke-width="1.5"/>
	<!-- Door panel inset -->
	<rect x="72" y="298" width="48" height="30" rx="4" fill="#d4bce4" opacity="0.65"/>
	<!-- Door window in arch -->
	<path d="M76,268 Q96,256 116,268 Q116,278 96,278 Q76,278 76,268Z" fill="#deeeff" stroke="#c4d8f4" stroke-width="1" opacity="0.9"/>
	<!-- Knob -->
	<circle cx="125" cy="325" r="5" fill="#92278f" opacity="0.75"/>
	<!-- Step -->
	<rect x="50" y="358" width="92" height="8" rx="3" fill="#cec0e0"/>

	<!-- ── Right Interior ────────────────────────────────────── -->

	<!-- Interior window right wall upper -->
	<rect x="296" y="168" width="16" height="62" rx="3" fill="#deeeff" stroke="#c4d8f4" stroke-width="1"/>
	<line x1="296" y1="199" x2="312" y2="199" stroke="#c4d8f4" stroke-width="1"/>

	<!-- Interior window right wall lower -->
	<rect x="296" y="268" width="16" height="56" rx="3" fill="#deeeff" stroke="#c4d8f4" stroke-width="1"/>
	<line x1="296" y1="296" x2="312" y2="296" stroke="#c4d8f4" stroke-width="1"/>

	<!-- ── BEDROOM (upper, y=148–252) ───────────────────────── -->

	<!-- Bed frame -->
	<rect x="178" y="165" width="108" height="72" rx="7" fill="#dccaf0"/>
	<!-- Headboard -->
	<rect x="178" y="161" width="26" height="72" rx="6" fill="#c8b0e4"/>
	<!-- Pillow 1 -->
	<rect x="182" y="169" width="20" height="14" rx="4" fill="#f2ecff"/>
	<!-- Pillow 2 (partially under blanket) -->
	<rect x="182" y="186" width="20" height="10" rx="3" fill="#ece4f8" opacity="0.8"/>
	<!-- Blanket body -->
	<path d="M204,168 Q255,164 286,172 L286,236 Q255,232 204,236Z" fill="#c8b0e8" opacity="0.6"/>
	<!-- Blanket fold line -->
	<path d="M204,175 Q255,171 286,179" stroke="#b89ed8" stroke-width="1.2" opacity="0.5" fill="none"/>
	<!-- Bolster pillow -->
	<rect x="266" y="170" width="22" height="16" rx="5" fill="#ede6ff" opacity="0.9"/>

	<!-- Bedside table -->
	<rect x="292" y="218" width="20" height="24" rx="3" fill="#d8c8ec"/>
	<!-- Lamp pole -->
	<rect x="299" y="204" width="5" height="15" rx="2" fill="#c8b4dc"/>
	<!-- Lamp shade -->
	<ellipse cx="302" cy="200" rx="14" ry="7" fill="#f4f0ff" stroke="#ccc0e0" stroke-width="1"/>
	<!-- Warm glow -->
	<ellipse cx="302" cy="212" rx="17" ry="9" fill="#ffe89a" opacity="0.13"/>

	<!-- Plant (top-right corner of bedroom) -->
	<rect x="286" y="182" width="11" height="20" rx="3" fill="#d0bce0"/>
	<ellipse cx="291" cy="178" rx="13" ry="9" fill="#bed8a8"/>
	<ellipse cx="284" cy="183" rx="9" ry="7" fill="#aecca0"/>
	<!-- Pot -->
	<path d="M286,198 L296,198 L294,204 L288,204Z" fill="#cebce0"/>

	<!-- ── LIVING ROOM (lower, y=257–360) ───────────────────── -->

	<!-- Rug -->
	<ellipse cx="228" cy="352" rx="50" ry="9" fill="#e8d8f8" opacity="0.5"/>

	<!-- Sofa back -->
	<rect x="178" y="289" width="102" height="14" rx="6" fill="#b898cc"/>
	<!-- Sofa seat -->
	<rect x="178" y="300" width="102" height="44" rx="7" fill="#c8a8e0"/>
	<!-- Left armrest -->
	<rect x="176" y="297" width="13" height="44" rx="4" fill="#b898cc"/>
	<!-- Right armrest -->
	<rect x="267" y="297" width="13" height="44" rx="4" fill="#b898cc"/>
	<!-- Cushion left -->
	<rect x="192" y="295" width="38" height="46" rx="4" fill="#d4b8ec" opacity="0.72"/>
	<!-- Cushion right -->
	<rect x="234" y="295" width="38" height="46" rx="4" fill="#d4b8ec" opacity="0.72"/>
	<!-- Cushion seam hints -->
	<line x1="211" y1="296" x2="211" y2="340" stroke="#c8aae0" stroke-width="1" opacity="0.5"/>
	<line x1="253" y1="296" x2="253" y2="340" stroke="#c8aae0" stroke-width="1" opacity="0.5"/>

	<!-- Coffee table -->
	<rect x="194" y="348" width="54" height="10" rx="4" fill="#ded0f4"/>
	<rect x="198" y="357" width="5" height="9" rx="1" fill="#cec0e4"/>
	<rect x="238" y="357" width="5" height="9" rx="1" fill="#cec0e4"/>
	<!-- Table item (small vase) -->
	<rect x="218" y="341" width="6" height="9" rx="2" fill="#c8b4dc"/>
	<ellipse cx="221" cy="340" rx="6" ry="4" fill="#b8d4a8"/>

	<!-- Floor lamp -->
	<line x1="292" y1="344" x2="292" y2="270" stroke="#d0bce0" stroke-width="2.5" stroke-linecap="round"/>
	<!-- Lamp arm curve -->
	<path d="M292,270 Q302,261 309,267" stroke="#d0bce0" stroke-width="2" fill="none" stroke-linecap="round"/>
	<!-- Lamp shade -->
	<path d="M304,264 Q310,261 316,265 L313,278 Q310,280 307,278Z" fill="#f4f0ff" stroke="#d0bce0" stroke-width="1"/>
	<!-- Lamp glow -->
	<ellipse cx="310" cy="279" rx="13" ry="7" fill="#ffe89a" opacity="0.14"/>

	<!-- ── Roof ──────────────────────────────────────────────── -->
	<polygon points="10,152 190,36 370,152" fill="url(#roofGrad)" filter="url(#softShadow)"/>
	<!-- Roof ridge -->
	<line x1="10" y1="152" x2="370" y2="152" stroke="#6a1869" stroke-width="2.5"/>
	<!-- Subtle roof facet -->
	<path d="M190,36 L10,152" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>

	<!-- ── Chimney ───────────────────────────────────────────── -->
	<rect x="281" y="66" width="24" height="78" rx="2" fill="#7a1d7a"/>
	<!-- Chimney cap -->
	<rect x="277" y="61" width="32" height="9" rx="2" fill="#681668"/>
	<!-- Smoke puffs -->
	<circle cx="293" cy="48" r="12" fill="white" opacity="0.48"/>
	<circle cx="302" cy="35" r="8.5" fill="white" opacity="0.3"/>
	<circle cx="297" cy="22" r="5.5" fill="white" opacity="0.16"/>

	<!-- ── Floating shield badge ─────────────────────────────── -->
	<circle cx="348" cy="62" r="26" fill="white" filter="url(#softShadow)" opacity="0.95"/>
	<circle cx="348" cy="62" r="26" fill="none" stroke="#e8d8f4" stroke-width="1.5"/>
	<!-- Shield icon -->
	<path
		d="M348,47 C348,47 360,52 360,60 C360,67 355,72 348,74
		   C341,72 336,67 336,60 C336,52 348,47Z"
		fill="none"
		stroke="#92278f"
		stroke-width="2"
	/>
	<!-- Checkmark inside shield -->
	<path
		d="M342,61 L346,65 L354,57"
		stroke="#92278f"
		stroke-width="2.2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>

	<!-- ── Decorative dots / sparkles ───────────────────────── -->
	<circle cx="22" cy="105" r="3.5" fill="#d8bced" opacity="0.55"/>
	<circle cx="14" cy="88"  r="2"   fill="#cca8e4" opacity="0.38"/>
	<circle cx="352" cy="96" r="2.5" fill="#d8bced" opacity="0.45"/>
	<circle cx="364" cy="112" r="3"  fill="#e0ccf4" opacity="0.4"/>
	<!-- Star sparkle top-left of shield -->
	<path d="M326,38 L327.5,42 L332,42 L328.5,44.5 L330,48.5 L326,46 L322,48.5 L323.5,44.5 L320,42 L324.5,42Z"
		fill="#e8d4f8" opacity="0.5"/>

</svg>

<style>
.home-illustration {
	width: 100%;
	height: auto;
	display: block;
}
</style>
