<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import FocusAreas from '$lib/components/FocusAreas.svelte';
	import Repositories from '$lib/components/Repositories.svelte';
	import Playground from '$lib/components/Playground.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data }: { data: { repos: any[]; langColors: Record<string, string> } } = $props();
</script>

<Nav />
<Hero />
<FocusAreas />
<Repositories repos={data.repos} langColors={data.langColors} />
<Playground />
<About />
<Contact />
<Footer />
