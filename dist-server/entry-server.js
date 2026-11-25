import { renderToString } from "react-dom/server";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ValidationError, useForm } from "@formspree/react";
var Navigation_module_default = {
	header: "_header_em5zh_6",
	logo: "_logo_em5zh_21",
	nav: "_nav_em5zh_35",
	contactLink: "_contactLink_em5zh_43",
	menuButton: "_menuButton_em5zh_91",
	menuLines: "_menuLines_em5zh_139",
	menuButtonOpen: "_menuButtonOpen_em5zh_160",
	navOpen: "_navOpen_em5zh_180"
};
//#endregion
//#region src/components/Navigation.tsx
function Navigation() {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = () => setMenuOpen(false);
	return /* @__PURE__ */ jsxs("header", {
		className: Navigation_module_default.header,
		children: [
			/* @__PURE__ */ jsx("a", {
				href: "/",
				className: Navigation_module_default.logo,
				onClick: closeMenu,
				children: "JM."
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				className: `${Navigation_module_default.menuButton} ${menuOpen ? Navigation_module_default.menuButtonOpen : ""}`,
				"aria-label": menuOpen ? "Stäng meny" : "Öppna meny",
				"aria-expanded": menuOpen,
				"aria-controls": "main-navigation",
				onClick: () => setMenuOpen(!menuOpen),
				children: /* @__PURE__ */ jsxs("span", {
					className: Navigation_module_default.menuLines,
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ jsx("span", {}),
						/* @__PURE__ */ jsx("span", {}),
						/* @__PURE__ */ jsx("span", {})
					]
				})
			}),
			/* @__PURE__ */ jsxs("nav", {
				id: "main-navigation",
				className: `${Navigation_module_default.nav} ${menuOpen ? Navigation_module_default.navOpen : ""}`,
				"aria-label": "Huvudnavigation",
				children: [
					/* @__PURE__ */ jsx("a", {
						href: "#home",
						onClick: closeMenu,
						children: "Hem"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#about",
						onClick: closeMenu,
						children: "Om mig"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#services",
						onClick: closeMenu,
						children: "Det jag gör"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#projects",
						onClick: closeMenu,
						children: "Tidigare projekt"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#packages",
						onClick: closeMenu,
						children: "Paket"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#contact",
						onClick: closeMenu,
						children: "Kontakta mig"
					})
				]
			}),
			/* @__PURE__ */ jsxs("a", {
				href: "#contact",
				className: Navigation_module_default.contactLink,
				onClick: closeMenu,
				children: ["Säg hej ", /* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					children: "→"
				})]
			})
		]
	});
}
var Hero_module_default = {
	hero: "_hero_9gxk8_2",
	copy: "_copy_9gxk8_13",
	eyebrow: "_eyebrow_9gxk8_21",
	lead: "_lead_9gxk8_52",
	actions: "_actions_9gxk8_65",
	button: "_button_9gxk8_71",
	primary: "_primary_9gxk8_102",
	secondary: "_secondary_9gxk8_107",
	visual: "_visual_9gxk8_118"
};
//#endregion
//#region src/components/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: Hero_module_default.hero,
		id: "home",
		children: [/* @__PURE__ */ jsxs("div", {
			className: Hero_module_default.copy,
			children: [
				/* @__PURE__ */ jsxs("p", {
					className: Hero_module_default.eyebrow,
					children: [/* @__PURE__ */ jsx("span", { children: "Front End Developer ·" }), /* @__PURE__ */ jsx("span", { children: "Digital Growth Specialist" })]
				}),
				/* @__PURE__ */ jsxs("h1", { children: [
					"Jennie",
					/* @__PURE__ */ jsx("br", {}),
					"Modd",
					/* @__PURE__ */ jsx("span", { children: "." })
				] }),
				/* @__PURE__ */ jsxs("p", {
					className: Hero_module_default.lead,
					children: [
						"Jag kombinerar ",
						" ",
						/* @__PURE__ */ jsx("strong", { children: "digital growth marketing och webbutveckling." }),
						"Från strategi och idé till kod och resultat."
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: Hero_module_default.actions,
					children: /* @__PURE__ */ jsxs("a", {
						href: "#projects",
						className: `${Hero_module_default.button} ${Hero_module_default.primary}`,
						children: ["Se mina projekt ", /* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							children: "→"
						})]
					})
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: Hero_module_default.visual,
			children: /* @__PURE__ */ jsx("img", {
				src: "/images/jenniemodd-work.jpg",
				alt: "Jennie Modd, frontendutvecklare och digital growth specialist"
			})
		})]
	});
}
var About_module_default = {
	about: "_about_5isu1_6",
	eyebrow: "_eyebrow_5isu1_14",
	heading: "_heading_5isu1_36",
	content: "_content_5isu1_46",
	visual: "_visual_5isu1_57",
	portrait: "_portrait_5isu1_65",
	note: "_note_5isu1_75",
	copy: "_copy_5isu1_93",
	lead: "_lead_5isu1_97",
	description: "_description_5isu1_105",
	stats: "_stats_5isu1_114",
	stat: "_stat_5isu1_114",
	statNumber: "_statNumber_5isu1_126",
	button: "_button_5isu1_145",
	imageFrame: "_imageFrame_5isu1_237"
};
//#endregion
//#region src/components/About.tsx
function About() {
	return /* @__PURE__ */ jsxs("section", {
		className: About_module_default.about,
		id: "about",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: About_module_default.eyebrow,
				children: "01 · Om mig"
			}),
			/* @__PURE__ */ jsxs("h2", {
				className: About_module_default.heading,
				children: [
					"Ett bredare",
					/* @__PURE__ */ jsx("br", {}),
					"digitalt synsätt"
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: About_module_default.content,
				children: [/* @__PURE__ */ jsxs("div", {
					className: About_module_default.visual,
					children: [/* @__PURE__ */ jsx("img", {
						src: "/images/jennie_modd.jpg",
						alt: "Porträtt av mig, frontendutvecklare och digital growth specialist",
						className: About_module_default.portrait,
						loading: "lazy"
					}), /* @__PURE__ */ jsxs("div", {
						className: About_module_default.note,
						children: [
							"Trial",
							/* @__PURE__ */ jsx("br", {}),
							"error",
							/* @__PURE__ */ jsx("br", {}),
							"& repeat ✌🏼"
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: About_module_default.copy,
					children: [
						/* @__PURE__ */ jsx("p", {
							className: About_module_default.lead,
							children: "Jag är en digital growth specialist som arbetar med hela kundresan – från idé och strategi till genomförande. Jag stannar inte vid planen, utan är hands-on hela vägen: från att väcka intresse och locka nya kunder till konvertering och långsiktiga kundrelationer."
						}),
						/* @__PURE__ */ jsx("p", {
							className: About_module_default.description,
							children: "Du kan se mig som en hel marknadsavdelning i en person. Jag sätter upp spårningen, tar fram och kör annonser, jobbar med SEO och GEO, skapar innehållet och bygger webben. Med AI som en naturlig del av arbetssättet kan jag jobba effektivt, utan att tumma på kvalitet eller känsla. Just nu studerar jag till Front End Developer (examen 2027), och under tiden tar jag mig an uppdrag som frilanskonsult inom både digital marknadsföring och webbutveckling."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: About_module_default.stats,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: About_module_default.stat,
									children: [/* @__PURE__ */ jsx("span", {
										className: About_module_default.statNumber,
										children: "8+"
									}), /* @__PURE__ */ jsxs("p", { children: [
										"år arbetslivserfarenhet inom",
										/* @__PURE__ */ jsx("br", {}),
										"digital marknadsföring"
									] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: About_module_default.stat,
									children: [/* @__PURE__ */ jsx("span", {
										className: About_module_default.statNumber,
										children: "4+"
									}), /* @__PURE__ */ jsxs("p", { children: [
										"år utbildning inom",
										/* @__PURE__ */ jsx("br", {}),
										"digital Marknadsföring & teknik"
									] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: About_module_default.stat,
									children: [/* @__PURE__ */ jsx("span", {
										className: About_module_default.statNumber,
										children: "1"
									}), /* @__PURE__ */ jsxs("p", { children: [
										"år studier (so far!)",
										/* @__PURE__ */ jsx("br", {}),
										"till Front End Developer"
									] })]
								})
							]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#projects",
							className: About_module_default.button,
							children: ["Se mina projekt", /* @__PURE__ */ jsx("span", {
								"aria-hidden": "true",
								children: "→"
							})]
						})
					]
				})]
			})
		]
	});
}
var Services_module_default = {
	services: "_services_6yf56_2",
	inner: "_inner_6yf56_9",
	intro: "_intro_6yf56_19",
	eyebrow: "_eyebrow_6yf56_25",
	introText: "_introText_6yf56_53",
	list: "_list_6yf56_63",
	service: "_service_6yf56_2",
	serviceButton: "_serviceButton_6yf56_72",
	number: "_number_6yf56_87",
	serviceTitle: "_serviceTitle_6yf56_95",
	icon: "_icon_6yf56_103",
	open: "_open_6yf56_119",
	details: "_details_6yf56_133",
	reveal: "_reveal_6yf56_1",
	tags: "_tags_6yf56_146",
	tag: "_tag_6yf56_146"
};
//#endregion
//#region src/data/services.ts
var services = [
	{
		number: "01",
		title: "Frontendutveckling",
		description: "Jag hjälper er genom hela processen, från planering och design utifrån era mål och målgrupp till skiss och utveckling av en hemsida anpassad efter era behov och er budget. Fokus ligger på att skapa en hållbar och användarvänlig hemsida som fungerar många år framöver, är enkel att underhålla för er och enkelt att använda för era kunder.",
		skills: [
			"HTML",
			"CSS / Sass",
			"JavaScript",
			"TypeScript",
			"React",
			"MySQL",
			"MongoDB"
		]
	},
	{
		number: "02",
		title: "Digital strategi",
		description: "Skulle du fria till någon du precis träffat? Nä, tänkte väl inte det. Och det gör inte era kunder heller. Jag hjälper er ta fram en digital strategi anpassad efter er tid, resurser och behov som skapar synlighet från första mötet till att de blir en kund. Hemligheten? Våga smalna av. Ni behöver inte synas överallt och till alla, bara till rätt personer och i rätt tid. För ni vet vad de säger, en bra digital strategi och en röd tråd, ger en god natt sömn. ",
		skills: [
			"Övergripande digital strategi",
			"Influencer marketing strategi",
			"Sociala medier strategi",
			"Innehållsstrategi",
			"SEO-strategi",
			"E-post marknadsföring strategi",
			"Content marketing strategi"
		]
	},
	{
		number: "03",
		title: "Analys & spårning",
		description: "Hur vet vi att vi uppnått rätt mål? Jag hjälper er att göra en nulägesanalys över era digitala kanaler och er hemsida. Sätta upp KPI:er och spårningsplan samt implementera eller förbättra nuvarande spårning så att ni mäter rätt saker. Jag skapar även förståelse i vad ni mäter och varför - huvudnyckeln för att man ska förstå vad användaren gör och skapa insikter framåt. För alla insikter är bra insikter. ",
		skills: [
			"GA4",
			"Google Tag Manager",
			"Konverteringsspårning",
			"Analys & rapportering",
			"Spårningsplan",
			"A/B-testning"
		]
	},
	{
		number: "04",
		title: "Digital annonsering",
		description: "Jag planerar, tar fram material och innehåll skräddarsytt för varje kanal, sätter upp och optimerar samt följer upp resultat för digital annonsering. Har främst arbetat med Meta ads (Instagram och Facebook), YouTube, LinkedIn och Google Ads. Jag har med mig ett strategiskt helhetstänk som kompletterar kundresan och skapar resultat. ",
		skills: [
			"Google Ads",
			"Meta Ads",
			"LinkedIn Ads",
			"TikTok Ads",
			"YouTube Ads",
			"ChatGPT Ads",
			"Pinterest Ads"
		]
	},
	{
		number: "05",
		title: "Sociala medier",
		description: "Be social on social! Ett klassiskt uttryck, men vad innebär det egentligen? Jag hjälper er att ta fram en strategi för sociala medier som fungerar i praktiken och som hela teamet kan arbeta med. Vi utgår från rätt målgrupp, tänker kreativt och vågar gå utanför boxen. För nej, ni behöver inte nå alla. Fokus ligger på att skapa engagemang, bygga relationer och ha roligt längs vägen.",
		skills: [
			"Instagram",
			"Facebook",
			"YouTube",
			"TikTok",
			"LinkedIn"
		]
	},
	{
		number: "06",
		title: "SEO & AI-sök",
		description: "Jag ser över er befintliga SEO, både tekniskt och redaktionellt, analyserar relevanta sökord och tar fram en konkret plan för hur ni kan öka er synlighet i sökmotorer och AI-drivna sökresultat. Det kan handla om allt från tekniska förbättringar och innehållsoptimering till att skapa nytt innehåll som möter målgruppens frågor och behov. Allt behöver inte göras på en gång. Jag hjälper er att prioritera rätt insatser utifrån er tid, budget och era resurser med fokus på det som faktiskt ger resultat.",
		skills: [
			"Teknisk SEO",
			"On-page SEO",
			"SEO-optimerade texter",
			"AI-sök",
			"SEO-copywriting"
		]
	},
	{
		number: "07",
		title: "Innehållsproduktion",
		description: "Behöver ni nytt grafiskt material, engagerande video, uppdaterade bilder eller texter som träffar rätt? Jag hjälper er att skapa innehåll för webb och sociala medier, från fotografering, filmning och redigering till copywriting för nyhetsbrev, SEO-texter, hemsidor och kampanjmaterial. Med fyra års erfarenhet som drönaroperatör, ett stort fotointresse och erfarenhet av digital marknadsföring kombinerar jag text och visuellt innehåll för att skapa en röd tråd i er kommunikation. Alltid med fokus på ert varumärke, er målgrupp och era digitala kanaler.",
		skills: [
			"Copywriting",
			"Videoredigering",
			"Fotografering",
			"Bildredigering",
			"Grafisk design",
			"Content marketing",
			"Sociala medier"
		]
	}
];
//#endregion
//#region src/components/Services.tsx
function Services() {
	const [openService, setOpenService] = useState(null);
	return /* @__PURE__ */ jsx("section", {
		className: Services_module_default.services,
		id: "services",
		children: /* @__PURE__ */ jsxs("div", {
			className: Services_module_default.inner,
			children: [/* @__PURE__ */ jsxs("div", {
				className: Services_module_default.intro,
				children: [
					/* @__PURE__ */ jsx("p", {
						className: Services_module_default.eyebrow,
						children: "02 · Det jag gör"
					}),
					/* @__PURE__ */ jsxs("h2", { children: [
						"Det här kan",
						/* @__PURE__ */ jsx("br", {}),
						"jag hjälpa er med."
					] }),
					/* @__PURE__ */ jsx("p", {
						className: Services_module_default.introText,
						children: "Frilanskonsult inom digital marknadsföring och webbutveckling – från strategi och SEO/GEO till spårning, annonser och kod. Med fokus på helheten och det som gör skillnad."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: Services_module_default.list,
				children: services.map((service) => {
					const isOpen = openService === service.number;
					const detailsId = `service-details-${service.number}`;
					return /* @__PURE__ */ jsxs("article", {
						className: `${Services_module_default.service} ${isOpen ? Services_module_default.open : ""}`,
						onMouseEnter: () => setOpenService(service.number),
						onMouseLeave: () => setOpenService(null),
						children: [/* @__PURE__ */ jsxs("button", {
							type: "button",
							className: Services_module_default.serviceButton,
							"aria-expanded": isOpen,
							"aria-controls": detailsId,
							onClick: () => setOpenService(isOpen ? null : service.number),
							onFocus: () => setOpenService(service.number),
							onBlur: (event) => {
								if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) setOpenService(null);
							},
							children: [
								/* @__PURE__ */ jsx("span", {
									className: Services_module_default.number,
									children: service.number
								}),
								/* @__PURE__ */ jsx("span", {
									className: Services_module_default.serviceTitle,
									children: service.title
								}),
								/* @__PURE__ */ jsx("span", {
									className: Services_module_default.icon,
									"aria-hidden": "true",
									children: isOpen ? "−" : "+"
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							id: detailsId,
							className: Services_module_default.details,
							hidden: !isOpen,
							children: [/* @__PURE__ */ jsx("p", { children: service.description }), /* @__PURE__ */ jsx("div", {
								className: Services_module_default.tags,
								children: service.skills.map((skill) => /* @__PURE__ */ jsx("span", {
									className: Services_module_default.tag,
									children: skill
								}, skill))
							})]
						})]
					}, service.number);
				})
			})]
		})
	});
}
//#endregion
//#region src/data/project.ts
var projects$1 = [
	{
		id: 1,
		title: "Packlistan",
		description: "En packapp för friluftsliv byggd i React, där jag hämtar och sparar data via ett REST-API och kan filtrera och bocka av prylarna inför varje tur.",
		category: "Front end-utveckling",
		tags: [
			"TypeScript",
			"Vite",
			"React",
			"React Router",
			"REST API",
			"CSS Modules",
			"Custom Hooks",
			"localStorage",
			"Vercel",
			"ESLint"
		],
		image: "/images/og-image.png",
		githubUrl: "https://github.com/jenniemodd/app-outdoor-packing",
		liveUrl: "https://app-outdoor-packing.vercel.app/"
	},
	{
		id: 2,
		title: "Destination Funäsfjällen",
		description: "Projektledning av en ny webbplats med fokus på innehållsstrategi, SEO och användarupplevelse. Samt löpande arbete med huvudansvar över all marknadsföring.",
		category: "Digital marknadsföring",
		tags: [
			"SEO",
			"Google Ads",
			"Meta Ads",
			"GA4",
			"Innehållsproduktion",
			"WordPress",
			"Digital strategi",
			"Sociala medier",
			"E-post marknadsföring",
			"PR"
		],
		image: "/images/funasfjallen_logga.jpeg",
		liveUrl: "https://funasfjallen.se/",
		results: [
			{
				value: "+100 %",
				label: "Ökning av organisk trafik på ett år"
			},
			{
				value: "+29 %",
				label: "Ökad omsättning"
			},
			{
				value: "22 → 32 000",
				label: "Följare i sociala medier"
			},
			{
				value: "Ökad synlighet",
				label: "I AI-sök och på mer specifika sökningar"
			}
		]
	},
	{
		id: 3,
		title: "JAL Book Club",
		description: "Skolprojekt med fokus på API-utveckling. En online bokklubb, med boklistor och funktioner för att utforska böcker samt lämna recensioner.",
		category: "Front end-utveckling",
		tags: [
			"TypeScript",
			"HTML",
			"SCSS",
			"Vite",
			"Biome"
		],
		image: "/images/jal_bookclub.jpg",
		githubUrl: "https://github.com/AlexJCodes/jal-book-club",
		liveUrl: "https://jal-book-club-seven.vercel.app/"
	},
	{
		id: 4,
		title: "Ramundberget Alpina AB",
		description: "Digital kommunikation och webbansvar med fokus på SEO, innehåll, användarupplevelse och betald annonsering. Utvecklade webbplatsens innehåll och struktur för att bättre möta nya besökares behov.",
		category: "Digital marknadsföring",
		tags: [
			"SEO",
			"Digital strategi",
			"Sociala medier",
			"Meta Ads",
			"Google Ads",
			"Innehållsproduktion",
			"Google Analytics",
			"Episerver"
		],
		image: "/images/ramundberget_logga.jpg",
		liveUrl: "https://www.ramundberget.se/sv",
		results: [
			{
				value: "+20 %",
				label: "Ökning av organisk trafik på ett år"
			},
			{
				value: "+25 %",
				label: "Ökad omsättning under ett år"
			},
			{
				value: "12 → 19 000",
				label: "Följare i sociala medier under ett år"
			}
		]
	},
	{
		id: 5,
		title: "Alice in Wonderland",
		description: "Ett interaktivt spel utvecklat i ett grupprojekt med TypeScript.",
		category: "Front end-utveckling",
		tags: [
			"TypeScript",
			"Vite",
			"SCSS"
		],
		image: "/images/alice_in_wonderland.jpg",
		githubUrl: "https://github.com/jenniemodd/alice-in-wonderland",
		liveUrl: "https://alice-in-wonderland-six.vercel.app/"
	},
	{
		id: 6,
		title: "Fairly",
		description: "En budgetapp för par som vill få bättre överblick över sin gemensamma ekonomi.",
		category: "Front end-utveckling",
		tags: [
			"TypeScript",
			"HTML",
			"SCSS",
			"Vite"
		],
		image: "/images/fairly.jpg",
		githubUrl: "https://github.com/jenniemodd/fairly-app",
		liveUrl: "https://fairly-app.vercel.app/"
	}
];
//#endregion
//#region src/types/project.ts
var projectFilters = [
	"Alla",
	"Front end-utveckling",
	"Digital marknadsföring"
];
var ProjectCard_module_default = {
	card: "_card_57nug_6",
	image: "_image_57nug_33",
	content: "_content_57nug_47",
	featured: "_featured_57nug_83",
	results: "_results_57nug_103",
	resultsTitle: "_resultsTitle_57nug_113",
	resultsList: "_resultsList_57nug_122",
	result: "_result_57nug_103",
	resultValue: "_resultValue_57nug_141",
	resultLabel: "_resultLabel_57nug_151",
	tags: "_tags_57nug_163",
	tag: "_tag_57nug_163",
	links: "_links_57nug_184"
};
//#endregion
//#region src/components/ProjectCard.tsx
function ProjectCard({ project, featured = false }) {
	const hasResults = Boolean(project.results?.length);
	return /* @__PURE__ */ jsxs("article", {
		className: `${ProjectCard_module_default.card} ${featured ? ProjectCard_module_default.featured : ""}`,
		children: [/* @__PURE__ */ jsx("img", {
			className: ProjectCard_module_default.image,
			src: project.image,
			alt: `Skärmbild från ${project.title}`,
			loading: "lazy"
		}), /* @__PURE__ */ jsxs("div", {
			className: ProjectCard_module_default.content,
			children: [
				/* @__PURE__ */ jsx("p", { children: project.category }),
				/* @__PURE__ */ jsx("h3", { children: project.title }),
				/* @__PURE__ */ jsx("p", { children: project.description }),
				hasResults && /* @__PURE__ */ jsxs("div", {
					className: ProjectCard_module_default.results,
					children: [/* @__PURE__ */ jsx("p", {
						className: ProjectCard_module_default.resultsTitle,
						children: "Resultat"
					}), /* @__PURE__ */ jsx("div", {
						className: ProjectCard_module_default.resultsList,
						children: project.results.map((result) => /* @__PURE__ */ jsxs("div", {
							className: ProjectCard_module_default.result,
							children: [/* @__PURE__ */ jsx("p", {
								className: ProjectCard_module_default.resultValue,
								children: result.value
							}), /* @__PURE__ */ jsx("p", {
								className: ProjectCard_module_default.resultLabel,
								children: result.label
							})]
						}, result.label))
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: ProjectCard_module_default.tags,
					children: project.tags.map((tag) => /* @__PURE__ */ jsx("span", {
						className: ProjectCard_module_default.tag,
						children: tag
					}, tag))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: ProjectCard_module_default.links,
					children: [project.githubUrl && /* @__PURE__ */ jsx("a", {
						href: project.githubUrl,
						target: "_blank",
						rel: "noreferrer",
						children: "GitHub"
					}), project.liveUrl && /* @__PURE__ */ jsx("a", {
						href: project.liveUrl,
						target: "_blank",
						rel: "noreferrer",
						children: "Besök hemsidan"
					})]
				})
			]
		})]
	});
}
var Projects_module_default = {
	projects: "_projects_19pim_2",
	header: "_header_19pim_8",
	eyebrow: "_eyebrow_19pim_12",
	projectCategory: "_projectCategory_19pim_13",
	filters: "_filters_19pim_48",
	filter: "_filter_19pim_48",
	filterActive: "_filterActive_19pim_77",
	projectList: "_projectList_19pim_83",
	twoProjects: "_twoProjects_19pim_95",
	clearFilters: "_clearFilters_19pim_110",
	featured: "_featured_19pim_164",
	preview: "_preview_19pim_168",
	grid: "_grid_19pim_193",
	info: "_info_19pim_206",
	standard: "_standard_19pim_207",
	card: "_card_19pim_213"
};
//#endregion
//#region src/components/Projects.tsx
function Projects() {
	const [selectedTags, setSelectedTags] = useState([]);
	const filteredProjects = selectedTags.length === 0 ? projects$1 : projects$1.filter((project) => selectedTags.includes(project.category));
	function toggleFilter(filter) {
		if (filter === "Alla") {
			setSelectedTags([]);
			return;
		}
		setSelectedTags((currentTags) => currentTags.includes(filter) ? currentTags.filter((tag) => tag !== filter) : [...currentTags, filter]);
	}
	return /* @__PURE__ */ jsxs("section", {
		className: Projects_module_default.projects,
		id: "projects",
		children: [/* @__PURE__ */ jsxs("header", {
			className: Projects_module_default.header,
			children: [
				/* @__PURE__ */ jsx("p", {
					className: Projects_module_default.eyebrow,
					children: "03 · Utvalda projekt"
				}),
				/* @__PURE__ */ jsxs("h2", { children: [
					"Idéer som blivit",
					/* @__PURE__ */ jsx("br", {}),
					"något på riktigt."
				] }),
				/* @__PURE__ */ jsxs("div", {
					className: Projects_module_default.filters,
					"aria-label": "Filtrera projekt",
					children: [projectFilters.map((filter) => {
						const isActive = filter === "Alla" ? selectedTags.length === 0 : selectedTags.includes(filter);
						return /* @__PURE__ */ jsx("button", {
							type: "button",
							className: `${Projects_module_default.filter} ${isActive ? Projects_module_default.filterActive : ""}`,
							"aria-pressed": isActive,
							onClick: () => toggleFilter(filter),
							children: filter
						}, filter);
					}), /* @__PURE__ */ jsxs("button", {
						type: "button",
						className: Projects_module_default.clearFilters,
						onClick: () => setSelectedTags([]),
						disabled: selectedTags.length === 0,
						children: [/* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							children: "↺"
						}), "Rensa val"]
					})]
				})
			]
		}), filteredProjects.length > 0 ? /* @__PURE__ */ jsx("div", {
			className: `${Projects_module_default.projectList} ${filteredProjects.length === 2 && filteredProjects.every((project) => project.category === "Digital marknadsföring") ? Projects_module_default.twoProjects : ""}`,
			children: filteredProjects.map((project, index) => /* @__PURE__ */ jsx(ProjectCard, {
				project,
				featured: index === 0 && Boolean(project.results?.length)
			}, project.id))
		}) : /* @__PURE__ */ jsx("p", { children: "Inga projekt matchar det valda filtret ännu." })]
	});
}
//#endregion
//#region src/data/packages.ts
var packages$1 = [
	{
		id: 1,
		name: "Spårning & analys",
		description: "Få koll på vad som händer på er hemsida och fatta bättre beslut baserade på data.",
		features: [
			"Spårningsplan utifrån era mål",
			"GA4 & Google Tag Manager",
			"Konverteringsspårning",
			"Testning & dokumentation"
		],
		cta: "Kontakta mig för prisförslag",
		price: "5 000 kr"
	},
	{
		id: 2,
		name: "SEO och AI-sök",
		description: "Vill ni synas där kunderna söker? Vi lägger grunden för bättre organisk synlighet i sökmotorer och AI-drivna sökresultat.",
		features: [
			"SEO-översyn av er befintliga webbplats",
			"Sökordsanalys & prioritering",
			"3 SEO- & AI-anpassade texter",
			"Rekommendationer för fortsatt optimering"
		],
		cta: "Kontakta mig för prisförslag",
		price: "10 000 kr"
	},
	{
		id: 3,
		name: "Digital marknadsföring",
		description: "Vill ni komma igång med digital marknadsföring, få ordning på det ni redan gör eller ta nästa steg? Jag hjälper er att hitta rätt väg framåt, från strategi, till implementation och resultat. Allt utifrån era mål, er budget och era resurser.",
		features: [
			"Strategi och prioritering av digitala kanaler",
			"Tydlig kundresa med konkreta actions",
			"SEO, innehåll och sociala medier",
			"Spårning, analys och konverteringsoptimering",
			"Webb, användarupplevelse och förbättringar",
			"Innehållsproduktion"
		],
		cta: "Hör av dig!",
		price: "Efter behov",
		featured: true
	}
];
var Packages_module_default = {
	packages: "_packages_1m2hm_3",
	container: "_container_1m2hm_10",
	eyebrow: "_eyebrow_1m2hm_15",
	header: "_header_1m2hm_38",
	intro: "_intro_1m2hm_54",
	packageList: "_packageList_1m2hm_63",
	card: "_card_1m2hm_71",
	featured: "_featured_1m2hm_96",
	badge: "_badge_1m2hm_106",
	cardHeader: "_cardHeader_1m2hm_124",
	number: "_number_1m2hm_132",
	type: "_type_1m2hm_133",
	cardContent: "_cardContent_1m2hm_141",
	description: "_description_1m2hm_148",
	features: "_features_1m2hm_156",
	cardFooter: "_cardFooter_1m2hm_182",
	cta: "_cta_1m2hm_188",
	arrow: "_arrow_1m2hm_200",
	price: "_price_1m2hm_230"
};
//#endregion
//#region src/components/Packages.tsx
function Packages() {
	return /* @__PURE__ */ jsx("section", {
		className: Packages_module_default.packages,
		id: "packages",
		children: /* @__PURE__ */ jsxs("div", {
			className: Packages_module_default.container,
			children: [
				/* @__PURE__ */ jsx("p", {
					className: Packages_module_default.eyebrow,
					children: "04 · Paket"
				}),
				/* @__PURE__ */ jsxs("header", {
					className: Packages_module_default.header,
					children: [/* @__PURE__ */ jsxs("h2", { children: [
						"Rätt hjälp.",
						/* @__PURE__ */ jsx("br", {}),
						"Där ni är."
					] }), /* @__PURE__ */ jsx("p", {
						className: Packages_module_default.intro,
						children: "Tre paket, tre olika lösningar och utrymme för något helt eget! Utöver paketen hjälper jag dig även med webbutveckling och digitala insatser utifrån din verksamhets behov. Vi går igenom dina mål och hittar tillsammans en lösning som passar, oavsett om du behöver hjälp med en enskild insats eller vill ha ett mer långsiktigt samarbete. Hör av dig!"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: Packages_module_default.packageList,
					children: packages$1.map((item, index) => /* @__PURE__ */ jsxs("article", {
						className: `${Packages_module_default.card} ${item.featured ? Packages_module_default.featured : ""}`,
						children: [
							item.featured && /* @__PURE__ */ jsx("span", {
								className: Packages_module_default.badge,
								children: "Allt i allo-paket"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: Packages_module_default.cardHeader,
								children: [/* @__PURE__ */ jsx("span", {
									className: Packages_module_default.number,
									children: String(index + 1).padStart(2, "0")
								}), /* @__PURE__ */ jsx("span", {
									className: Packages_module_default.type,
									children: "Paketförslag"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: Packages_module_default.cardContent,
								children: [
									/* @__PURE__ */ jsx("h3", { children: item.name }),
									/* @__PURE__ */ jsx("p", {
										className: Packages_module_default.description,
										children: item.description
									}),
									/* @__PURE__ */ jsx("ul", {
										className: Packages_module_default.features,
										children: item.features.map((feature) => /* @__PURE__ */ jsx("li", { children: feature }, feature))
									})
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: Packages_module_default.cardFooter,
								children: /* @__PURE__ */ jsxs("a", {
									href: "#contact",
									className: Packages_module_default.cta,
									children: [
										/* @__PURE__ */ jsxs("p", {
											className: Packages_module_default.price,
											children: [/* @__PURE__ */ jsx("span", { children: "Från" }), /* @__PURE__ */ jsx("strong", { children: item.price })]
										}),
										/* @__PURE__ */ jsx("span", { children: item.cta }),
										/* @__PURE__ */ jsx("span", {
											className: Packages_module_default.arrow,
											"aria-hidden": "true",
											children: "→"
										})
									]
								})
							})
						]
					}, item.id))
				})
			]
		})
	});
}
var Contact_module_default = {
	contact: "_contact_1g48f_3",
	container: "_container_1g48f_10",
	intro: "_intro_1g48f_21",
	eyebrow: "_eyebrow_1g48f_26",
	heading: "_heading_1g48f_46",
	description: "_description_1g48f_67",
	contactLinks: "_contactLinks_1g48f_76",
	form: "_form_1g48f_118",
	field: "_field_1g48f_131",
	submit: "_submit_1g48f_191",
	arrow: "_arrow_1g48f_230",
	formError: "_formError_1g48f_251",
	fieldError: "_fieldError_1g48f_265"
};
//#endregion
//#region src/components/Contact.tsx
function Contact() {
	const [state, handleSubmit] = useForm("mrpeyvaj");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: ""
	});
	const [formErrors, setFormErrors] = useState({});
	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((currentData) => ({
			...currentData,
			[name]: value
		}));
		setFormErrors((currentErrors) => ({
			...currentErrors,
			[name]: ""
		}));
	}
	function validateForm() {
		const errors = {};
		if (!formData.name.trim()) errors.name = "Fyll i ditt namn.";
		if (!formData.email.trim()) errors.email = "Fyll i din e-postadress.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Ange en giltig e-postadress.";
		if (!formData.phone.trim()) errors.phone = "Fyll i ditt telefonnummer.";
		if (!formData.subject.trim()) errors.subject = "Ange vad ditt meddelande gäller.";
		if (!formData.message.trim()) errors.message = "Skriv ett meddelande.";
		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	}
	async function handleFormSubmit(event) {
		event.preventDefault();
		if (!validateForm()) return;
		await handleSubmit(event);
	}
	if (state.succeeded) return /* @__PURE__ */ jsx("section", {
		className: Contact_module_default.contact,
		id: "contact",
		children: /* @__PURE__ */ jsx("div", {
			className: Contact_module_default.container,
			children: /* @__PURE__ */ jsxs("div", {
				className: Contact_module_default.intro,
				children: [
					/* @__PURE__ */ jsx("p", {
						className: Contact_module_default.eyebrow,
						children: "05 · Kontakta mig"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: Contact_module_default.heading,
						children: [
							"Tack för",
							/* @__PURE__ */ jsx("br", {}),
							"ditt ",
							/* @__PURE__ */ jsx("span", { children: "meddelande!" })
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: Contact_module_default.description,
						children: "Ditt meddelande är skickat. Jag återkommer så snart jag kan!"
					}),
					/* @__PURE__ */ jsx("div", {
						className: Contact_module_default.contactLinks,
						children: /* @__PURE__ */ jsxs("a", {
							href: "mailto:hej@jenniemodd.se",
							children: [/* @__PURE__ */ jsx("span", {
								"aria-hidden": "true",
								children: "✉"
							}), "hej@jenniemodd.se"]
						})
					})
				]
			})
		})
	});
	return /* @__PURE__ */ jsx("section", {
		className: Contact_module_default.contact,
		id: "contact",
		children: /* @__PURE__ */ jsxs("div", {
			className: Contact_module_default.container,
			children: [/* @__PURE__ */ jsxs("div", {
				className: Contact_module_default.intro,
				children: [
					/* @__PURE__ */ jsx("p", {
						className: Contact_module_default.eyebrow,
						children: "06 · Kontakt"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: Contact_module_default.heading,
						children: [
							"Nyfiken?",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", { children: "Hör av dig!" })
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: Contact_module_default.description,
						children: "Har du en idé, ett problem som behöver lösas eller vet du kanske inte riktigt vad du behöver hjälp med än? Hör av dig! Se mig som ett bollplank. Vi kan prata om dina tankar, hitta möjligheter och se om vi finner något spännande att göra tillsammans."
					}),
					/* @__PURE__ */ jsx("p", {
						className: Contact_module_default.contactNote,
						children: "Det kostar ingenting att ta ett första samtal, och du behöver inte ha allt klart från början. No pressure, no stress! Bara ett förutsättningslöst samtal, mail eller sms och en chans att se vart det leder."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: Contact_module_default.contactLinks,
						children: [
							/* @__PURE__ */ jsxs("a", {
								href: "mailto:hej@jenniemodd.se",
								children: [/* @__PURE__ */ jsx("span", {
									"aria-hidden": "true",
									children: "✉"
								}), "hej@jenniemodd.se"]
							}),
							/* @__PURE__ */ jsx("a", {
								href: "https://www.linkedin.com/in/jenniemodd/",
								target: "_blank",
								rel: "noreferrer",
								children: "LinkedIn"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "https://github.com/jenniemodd",
								target: "_blank",
								rel: "noreferrer",
								children: "GitHub"
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("form", {
				className: Contact_module_default.form,
				onSubmit: handleFormSubmit,
				noValidate: true,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: Contact_module_default.field,
						children: [
							/* @__PURE__ */ jsx("label", {
								htmlFor: "name",
								children: "Namn"
							}),
							/* @__PURE__ */ jsx("input", {
								id: "name",
								name: "name",
								type: "text",
								placeholder: "Ditt namn",
								autoComplete: "name",
								value: formData.name,
								onChange: handleChange,
								"aria-invalid": Boolean(formErrors.name),
								"aria-describedby": formErrors.name ? "name-error" : void 0,
								required: true
							}),
							formErrors.name && /* @__PURE__ */ jsx("p", {
								id: "name-error",
								className: Contact_module_default.fieldError,
								role: "alert",
								children: formErrors.name
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: Contact_module_default.field,
						children: [
							/* @__PURE__ */ jsx("label", {
								htmlFor: "email",
								children: "E-post"
							}),
							/* @__PURE__ */ jsx("input", {
								id: "email",
								name: "email",
								type: "email",
								placeholder: "du@exempel.se",
								autoComplete: "email",
								value: formData.email,
								onChange: handleChange,
								"aria-invalid": Boolean(formErrors.email),
								"aria-describedby": formErrors.email ? "email-error" : void 0,
								required: true
							}),
							formErrors.email && /* @__PURE__ */ jsx("p", {
								id: "email-error",
								className: Contact_module_default.fieldError,
								role: "alert",
								children: formErrors.email
							}),
							/* @__PURE__ */ jsx(ValidationError, {
								prefix: "E-post",
								field: "email",
								errors: state.errors
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: Contact_module_default.field,
						children: [
							/* @__PURE__ */ jsx("label", {
								htmlFor: "phone",
								children: "Telefon"
							}),
							/* @__PURE__ */ jsx("input", {
								id: "phone",
								name: "phone",
								type: "tel",
								placeholder: "Ditt telefonnummer",
								autoComplete: "tel",
								value: formData.phone,
								onChange: handleChange,
								"aria-invalid": Boolean(formErrors.phone),
								"aria-describedby": formErrors.phone ? "phone-error" : void 0
							}),
							formErrors.phone && /* @__PURE__ */ jsx("p", {
								id: "phone-error",
								className: Contact_module_default.fieldError,
								role: "alert",
								children: formErrors.phone
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: Contact_module_default.field,
						children: [
							/* @__PURE__ */ jsx("label", {
								htmlFor: "subject",
								children: "Ämne"
							}),
							/* @__PURE__ */ jsx("input", {
								id: "subject",
								name: "subject",
								type: "text",
								placeholder: "Vad gäller det?",
								value: formData.subject,
								onChange: handleChange,
								"aria-invalid": Boolean(formErrors.subject),
								"aria-describedby": formErrors.subject ? "subject-error" : void 0
							}),
							formErrors.subject && /* @__PURE__ */ jsx("p", {
								id: "subject-error",
								className: Contact_module_default.fieldError,
								role: "alert",
								children: formErrors.subject
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: Contact_module_default.field,
						children: [
							/* @__PURE__ */ jsx("label", {
								htmlFor: "message",
								children: "Vad har du på hjärtat?"
							}),
							/* @__PURE__ */ jsx("textarea", {
								id: "message",
								name: "message",
								placeholder: "Berätta lite om din idé, roll eller utmaning...",
								rows: 5,
								value: formData.message,
								onChange: handleChange,
								"aria-invalid": Boolean(formErrors.message),
								"aria-describedby": formErrors.message ? "message-error" : void 0,
								required: true
							}),
							formErrors.message && /* @__PURE__ */ jsx("p", {
								id: "message-error",
								className: Contact_module_default.fieldError,
								role: "alert",
								children: formErrors.message
							}),
							/* @__PURE__ */ jsx(ValidationError, {
								prefix: "Meddelande",
								field: "message",
								errors: state.errors
							})
						]
					}),
					state.errors && /* @__PURE__ */ jsxs("p", {
						className: Contact_module_default.formError,
						role: "alert",
						children: [
							"Meddelandet kunde inte skickas just nu. Försök igen om en stund eller mejla mig direkt på",
							" ",
							/* @__PURE__ */ jsx("a", {
								href: "mailto:hej@jenniemodd.se",
								children: "hej@jenniemodd.se"
							}),
							"."
						]
					}),
					/* @__PURE__ */ jsxs("button", {
						className: Contact_module_default.submit,
						type: "submit",
						disabled: state.submitting,
						children: [/* @__PURE__ */ jsx("span", { children: state.submitting ? "Skickar..." : "Skicka meddelande" }), /* @__PURE__ */ jsx("span", {
							className: Contact_module_default.arrow,
							"aria-hidden": "true",
							children: "→"
						})]
					})
				]
			})]
		})
	});
}
var Footer_module_default = {
	footer: "_footer_xckbi_2",
	container: "_container_xckbi_8",
	logo: "_logo_xckbi_20",
	description: "_description_xckbi_29",
	copyright: "_copyright_xckbi_30",
	footerContent: "_footerContent_xckbi_50"
};
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: Footer_module_default.footer,
		children: /* @__PURE__ */ jsxs("div", {
			className: Footer_module_default.container,
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "#top",
					className: Footer_module_default.logo,
					"aria-label": "Till toppen av sidan",
					children: "JM."
				}),
				/* @__PURE__ */ jsx("p", {
					className: Footer_module_default.description,
					children: "Front End Developer · Digital Growth Specialist · Jämtland"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: Footer_module_default.copyright,
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Jennie Modd, med musik och kaffe 🎶"
					]
				})
			]
		})
	});
}
var IntroBanner_module_default = {
	banner: "_banner_qf3ei_1",
	text: "_text_qf3ei_12",
	monogram: "_monogram_qf3ei_28"
};
//#endregion
//#region src/components/IntroBanner.tsx
function IntroBanner() {
	return /* @__PURE__ */ jsxs("section", {
		className: IntroBanner_module_default.banner,
		children: [/* @__PURE__ */ jsx("span", {
			className: IntroBanner_module_default.monogram,
			"aria-hidden": "true",
			children: "JM"
		}), /* @__PURE__ */ jsxs("p", {
			className: IntroBanner_module_default.text,
			children: [
				"Friluftsälskande norrlänning som drivs av att skapa digitala upplevelser där",
				" ",
				/* @__PURE__ */ jsx("em", { children: "webb, innehåll, strategi och resultat" }),
				" möts."
			]
		})]
	});
}
//#endregion
//#region src/App.tsx
function App() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Navigation, {}),
		/* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(IntroBanner, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Services, {}),
			/* @__PURE__ */ jsx(Projects, {}),
			/* @__PURE__ */ jsx(Packages, {}),
			/* @__PURE__ */ jsx(Contact, {})
		] }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
//#region src/entry-server.tsx
function render() {
	return renderToString(/* @__PURE__ */ jsx(App, {}));
}
//#endregion
export { render };
