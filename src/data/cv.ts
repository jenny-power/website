export const experiences = [
	{
		company: 'Mathematics-Driven Innovation Centre (M-DICE), Heriot-Watt University',
		time: 'June 2025 - Present',
		title: 'Innovation Research Associate',
		location: 'Edinburgh, U.K.',
		description: '',
	},
	{
		company: 'Institute for Mathematical Innovation (IMI), University of Bath',
		time: 'January 2024 - April 2024',
		title: 'Mathematical Innovation Research Assistant',
		location: 'Bath, U.K.',
		description: '',
	},
	{
		company: 'TNO Holst Centre',
		time: 'January 2019 - August 2019',
		title: 'Physics Research Intern',
		location: 'Eindhoven, The Netherlands',
		description: '',
	},
	{
		company: 'Mathematics Applications Consortium for Science and Industry (MACSI), University of Limerick',
		time: 'June 2018 - August 2018',
		title: 'Mathematical Research Intern',
		location: 'Limerick, Ireland',
		description: '',
	},
];


export const teaching = [
	{
		company: 'We Solve Problems',
		time: 'October 2024 - June 2025',
		title: 'Specialist Maths Tutor',
		location: 'Bath, U.K.',
		description: '',
	},	
		{
		company: 'University of Bath',
		time: 'October 2020 ‑ January 2023',
		title: 'Graduate Teaching Assistant',
		location: 'Bath, U.K.',
		description: '',
	},
	{
		company: 'Studyclix',
		time: 'July 2021 ‑ January 2022',
		title: 'Mathematics Content Creator',
		location: 'Ireland (Remote)',
		description: '',
	},
	{
		company: 'Self-Employed',
		time: 'September 2016 - May 2021',
		title: 'Private Maths Tutor',
		location: 'Ireland',
		description: '',
	},
	// {
	// 	company: 'Parallel by Simon Singh',
	// 	time: 'October 2025 - Present',
	// 	title: 'Maths Circles Presenter',
	// 	location: 'U.K. (Remote)',
	// 	description: '',
	// },
	{
		company: 'University of Limerick',
		time: 'March 2018 - May 2018',
		title: 'Physics Peer Mentor',
		location: 'Limerick, Ireland',
		description: '',
	},	
];



export const education = [
	{
		school: 'University of Bath',
		time: '2021 - 2025',
		degree: 'PhD in Statistical Applied Mathematics',
		location: 'Bath, U.K.',
		description: '',
	},
	{
		school: 'University of Limerick',
		time: '2016 - 2020',
		degree: 'Bachelor of Science (BSc) in Mathematics and Physics',
		location: 'Limerick, Ireland',
		description: '',
	},
		{
		school: 'University of Bath',
		time: '2020 - 2021',
		degree: 'Master of Research (MRes) in Statistical Applied Mathematics',
		location: 'Bath, U.K.',
		description: '',
	},
];

export const skills = [
	{
		title: '',
		description: '',
	},
	// {
	// 	title: 'Experimental Techniques',
	// 	description: 'Spectroscopy, Isolation of Radioactive Elements, Radiation Measurement',
	// },
];

export const publications = [
	{
		title: 'Adaptive Regularisation for PDE-constrained Optimal Control',
		authors: 'Jenny Power, Tristan Pryer',
		journal: 'Journal of Computational and Applied Mathematics',
		time: '2025',
		link: 'https://doi.org/10.1016/j.cam.2025.116651',
		abstract: 'PDE-constrained optimal control problems require regularisation to ensure well-posedness, introducing small perturbations that make the solutions challenging to approximate accurately. We propose a finite element approach that couples both regularisation and discretisation adaptivity, varying both the regularisation parameter and mesh-size locally based on rigorous a posteriori error estimates aiming to dynamically balance induced regularisation and discretisation errors, offering a robust and efficient method for solving these problems. We demonstrate the efficacy of our analysis with several numerical experiments.',
	},
	{
		title: 'ARHCS (Automatic Rainfall Half-Life Cluster System): A landslides early warning system (LEWS) using cluster analysis and automatic threshold definition',
		authors: 'Cassiano Antonio Bortolozo, Luana Albertani Pampuch, Marcio Roberto Magalhães De Andrade, Daniel Metodiev, Adenilson Roberto Carvalho, Tatiana Sussel Gonçalves Mendes, Tristan Pryer, Harideva Marturano Egas, Rodolfo Moreda Mendes, Isadora Araújo Sousa, Jenny Power',
		journal: 'International Journal of Geosciences',
		time: '2024',
		link: 'https://doi.org/10.4236/ijg.2024.151005',
		abstract: 'A significant portion of Landslide Early Warning Systems (LEWS) relies on the definition of operational thresholds and the monitoring of cumulative rainfall for alert issuance. These thresholds can be obtained in various ways, but most often they are based on previous landslide data. This approach introduces several limitations. For instance, there is a requirement for the location to have been previously monitored in some way to have this type of information recorded. Another significant limitation is the need for information regarding the location and timing of incidents. Despite the current ease of obtaining location information (GPS, drone images, etc.), the timing of the event remains challenging to ascertain for a considerable portion of landslide data. Concerning rainfall monitoring, there are multiple ways to consider it, for instance, examining accumulations over various intervals (1 h, 6 h, 24 h, 72 h), as well as in the calculation of effective rainfall, which represents the precipitation that actually infiltrates the soil. However, in the vast majority of cases, both the thresholds and the rain monitoring approach are defined manually and subjectively, relying on the operators’ experience. This makes the process labor-intensive and time-consuming, hindering the establishment of a truly standardized and rapidly scalable methodology on a large scale. In this work, we propose a Landslides Early Warning System (LEWS) based on the concept of rainfall half-life and the determination of thresholds using Cluster Analysis and data inversion. The system is designed to be applied in extensive monitoring networks, such as the one utilized by Cemaden, Brazil’s National Center for Monitoring and Early Warning of Natural Disasters.',
	},
];
