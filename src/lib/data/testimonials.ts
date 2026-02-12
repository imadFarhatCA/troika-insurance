export interface Testimonial {
	initials: string;
	name: string;
	handle: string;
	quote: string;
}

export const testimonials: Testimonial[] = [
	{
		initials: 'JD',
		name: 'John Davis',
		handle: '@johndavis',
		quote: "Switched to Troika for homeowners insurance and couldn't be happier. The process was incredibly smooth and I'm saving $200/year!"
	},
	{
		initials: 'SM',
		name: 'Sarah Martinez',
		handle: '@sarahm',
		quote: 'Filed a claim and got paid in literally 3 minutes. This is the future of insurance. No more waiting weeks for a response!'
	},
	{
		initials: 'MK',
		name: 'Michael Kim',
		handle: '@mkim_biz',
		quote: "Best business insurance I've found. Clear pricing, no hidden fees, and actual human support when I need it."
	},
	{
		initials: 'AL',
		name: 'Amanda Lopez',
		handle: '@alopez',
		quote: 'Finally, an insurance company that speaks plain English. Got my car insured in under 5 minutes from my phone.'
	}
];
