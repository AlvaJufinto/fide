/** @format */

import type { IChapter } from "./interfaces/data";

export const chapters: IChapter[] = [
	{
		level: "I",
		slug: "god",
		title: "God",
		description:
			"Exploring the human longing for the divine, the proofs of God's existence through reason, and the mystery of the Holy Trinity.",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRIeXT-rY4KLHFB8UKy7c00g-Wo97qsSOsSevQsbsyGSlGLfd1NH2wiZ1MvMtdpwAT5jHeYGUEP40HMsZ8WxdPDWHlL26&s&ec=121584914",
		sections: [
			{
				level: "I",
				slug: "desire-and-reason",
				title: "Desire, Reason, and Proofs",
				isFinalBoss: false,
				lessons: [
					{
						level: "I",
						slug: "the-infinite-longing",
						title: "The Infinite Longing",
						contents: [
							{
								type: "material",
								slug: "mat-1-1-1",
								title: "The God-Shaped Vacuum",
								content: `<p>Blaise Pascal, a mathematician and philosopher, proposed that every human has an 'infinite abyss' that can only be filled by God. This explains why material wealth never feels like 'enough'.</p>`,
							},
							{
								type: "question",
								slug: "q-1-1-1",
								question:
									"What is the primary cause of human 'restlessness' according to St. Augustine?",
								choices: [
									{ option: "a", content: "Lack of physical exercise." },
									{ option: "b", content: "Biological evolution." },
									{
										option: "c",
										content:
											"Being created for God and not yet resting in Him.",
									},
									{ option: "d", content: "Social anxiety." },
								],
								correctAnswer: "c",
								explanationCorrect:
									"Augustine famously taught that our hearts are restless until they find their rest in God, because He is our origin and end.",
								explanationWrong:
									"While other factors exist, the theological root of restlessness is our innate orientation toward the Infinite.",
							},
							{
								type: "material",
								slug: "mat-1-1-2",
								title: "Universal Religious Impulse",
								content: `<p>Anthropology shows that no culture has ever been truly 'atheistic' by nature. The search for a higher power is a universal human trait, suggesting it is part of our DNA.</p>`,
							},
							{
								type: "question",
								slug: "q-1-1-2",
								question:
									"What does the universality of religion suggest about God?",
								choices: [
									{ option: "a", content: "God is a myth used for control." },
									{
										option: "b",
										content: "Humans are 'naturally religious' beings.",
									},
									{ option: "c", content: "Religion is a modern invention." },
									{
										option: "d",
										content: "All religions are exactly the same.",
									},
								],
								correctAnswer: "b",
								explanationCorrect:
									"The fact that all cultures seek the divine suggests an objective 'pull' toward a Creator written in human nature.",
								explanationWrong:
									"History proves religion is not modern, and while cultures differ, the impulse to seek the divine remains constant.",
							},
							{
								type: "material",
								slug: "mat-1-1-3",
								title: "Transcendentals: Beauty",
								content: `<p>When we encounter objective beauty—a sunset, a symphony, or a selfless act—we experience a 'longing' for something beyond the physical. This beauty is a reflection of God.</p>`,
							},
						],
					},
					{
						level: "II",
						slug: "st-thomas-aquinas-proofs",
						title: "St. Thomas Aquinas: The Five Ways",
						contents: [
							{
								type: "material",
								slug: "mat-1-2-1",
								title: "The Argument from Motion",
								content: `<p>Nothing moves itself. Every object in motion was put in motion by another. To avoid an infinite regress, there must be a First Mover: God.</p>`,
							},
							{
								type: "question",
								slug: "q-1-2-1",
								question:
									"In the 'First Mover' argument, why can't the chain of causes go back forever?",
								choices: [
									{ option: "a", content: "Because time didn't exist." },
									{
										option: "b",
										content:
											"Because an infinite regress provides no actual starting point for motion.",
									},
									{
										option: "c",
										content: "Because the universe is too small.",
									},
									{ option: "d", content: "Because logic is limited." },
								],
								correctAnswer: "b",
								explanationCorrect:
									"Without a First Mover, there would be no second or third mover. An infinite chain without a source is logically impossible.",
								explanationWrong:
									"Logic is the tool used here, and time/scale are secondary to the metaphysical necessity of a primary cause.",
							},
							{
								type: "material",
								slug: "mat-1-2-2",
								title: "The Argument from Design",
								content: `<p>The universe acts with purpose and order (like the precise laws of physics). This 'teleology' suggests an Intelligent Designer behind the cosmos.</p>`,
							},
							{
								type: "question",
								slug: "q-1-2-2",
								question:
									"What does 'Teleology' refer to in the proofs of God?",
								choices: [
									{ option: "a", content: "The study of old televisions." },
									{
										option: "b",
										content:
											"The idea that the universe has an end goal or purposeful design.",
									},
									{
										option: "c",
										content: "The belief that everything is random.",
									},
									{ option: "d", content: "The study of human emotions." },
								],
								correctAnswer: "b",
								explanationCorrect:
									"Teleology comes from the Greek 'telos' (end/goal). It argues that the order in nature points to a purposeful mind.",
								explanationWrong:
									"Teleology is the opposite of randomness; it seeks the 'why' and 'purpose' behind the 'how'.",
							},
							{
								type: "material",
								slug: "mat-1-2-3",
								title: "The Argument from Contingency",
								content: `<p>Everything in the world can either 'be' or 'not be'. Since things exist now, there must be one 'Necessary Being' that must exist by its own nature.</p>`,
							},
						],
					},
					{
						level: "III",
						slug: "moral-law-and-conscience",
						title: "The Moral Law and Conscience",
						contents: [
							{
								type: "material",
								slug: "mat-1-3-1",
								title: "The Voice Within",
								content: `<p>Conscience is not just a feeling; it is an 'internal law' that we did not give ourselves. It commands us to do good and avoid evil.</p>`,
							},
							{
								type: "question",
								slug: "q-1-3-1",
								question:
									"If morality is just a human invention, why do we feel objective guilt?",
								choices: [
									{ option: "a", content: "It is just social conditioning." },
									{
										option: "b",
										content:
											"Because we are violating an objective moral law from a Lawgiver.",
									},
									{
										option: "c",
										content: "Because we are afraid of the police.",
									},
									{ option: "d", content: "Guilt is a biological mistake." },
								],
								correctAnswer: "b",
								explanationCorrect:
									"Objective moral responsibility implies a standard that transcends human opinion, pointing to a Moral Lawgiver.",
								explanationWrong:
									"Social conditioning explains habits, but it doesn't explain the universal, binding nature of core moral truths.",
							},
							{
								type: "material",
								slug: "mat-1-3-2",
								title: "C.S. Lewis and the Moral Law",
								content: `<p>C.S. Lewis argued that when we quarrel, we appeal to a standard of 'Fair Play' that we expect everyone to know. This is the Natural Law.</p>`,
							},
							{
								type: "question",
								slug: "q-1-3-2",
								question: "What is 'Natural Law'?",
								choices: [
									{
										option: "a",
										content: "The law of the jungle (survival of the fittest).",
									},
									{
										option: "b",
										content:
											"Moral principles that are inherent in human nature and discoverable by reason.",
									},
									{
										option: "c",
										content: "Laws passed by a government about nature.",
									},
									{ option: "d", content: "A scientific theory of gravity." },
								],
								correctAnswer: "b",
								explanationCorrect:
									"Natural Law is the participation of the rational creature in the eternal law of God, accessible to all people through reason.",
								explanationWrong:
									"Natural Law is about morality, not physical biology or government legislation.",
							},
						],
					},
					{
						level: "IV",
						slug: "the-problem-of-evil",
						title: "Obstacles: The Problem of Evil",
						contents: [
							{
								type: "material",
								slug: "mat-1-4-1",
								title: "The Greatest Objection",
								content: `<p>If God is all-good and all-powerful, why does evil exist? This is the most common reason people reject God's existence.</p>`,
							},
							{
								type: "material",
								slug: "mat-1-4-2",
								title: "Evil as a Privation",
								content: `<p>Theology (St. Augustine) defines evil not as a 'thing' God created, but as a 'privatio boni'—the absence of a good that should be there.</p>`,
							},
							{
								type: "question",
								slug: "q-1-4-1",
								question: "How can God allow evil if He is all-good?",
								choices: [
									{ option: "a", content: "He is not actually all-powerful." },
									{
										option: "b",
										content:
											"He respects human free will and can bring a greater good out of evil.",
									},
									{
										option: "c",
										content: "He doesn't care about human suffering.",
									},
									{ option: "d", content: "Evil is just an illusion." },
								],
								correctAnswer: "b",
								explanationCorrect:
									"God permits evil because He gave us freedom. He is so powerful that He can even use bad events to lead to a higher spiritual good.",
								explanationWrong:
									"Attributing weakness or indifference to God contradicts His nature as revealed in theology.",
							},
							{
								type: "material",
								slug: "mat-1-4-3",
								title: "Natural vs Moral Evil",
								content: `<p>Moral evil comes from free will (sin), while natural evil (earthquakes) is part of a finite, developing physical world.</p>`,
							},
						],
					},
					{
						level: "V",
						slug: "scientism-and-faith",
						title: "Faith and the Limits of Science",
						contents: [
							{
								type: "material",
								slug: "mat-1-5-1",
								title: "Scientism vs Science",
								content: `<p>Science is the study of the physical world. 'Scientism' is the philosophical error of claiming that ONLY science can tell us the truth.</p>`,
							},
							{
								type: "question",
								slug: "q-1-5-1",
								question: "Why can't science 'disprove' God?",
								choices: [
									{ option: "a", content: "Because scientists are biased." },
									{
										option: "b",
										content:
											"Because God is not a physical object within the universe to be measured.",
									},
									{ option: "c", content: "Because science is always wrong." },
									{ option: "d", content: "Because the Bible says so." },
								],
								correctAnswer: "b",
								explanationCorrect:
									"Science studies 'secondary causes' in matter. God is the 'Primary Cause' who is outside of space and time.",
								explanationWrong:
									"Science is a valid tool for the material world, but it simply lacks the scope to measure the immaterial.",
							},
							{
								type: "material",
								slug: "mat-1-5-2",
								title: "The Two Wings",
								content: `<p>John Paul II taught that 'Faith and Reason are like two wings' on which the human spirit rises to the truth.</p>`,
							},
						],
					},
				],
			},
			{
				level: "II",
				slug: "the-nature-of-god",
				title: "The Nature and Mystery of God",
				isFinalBoss: false,
				lessons: [
					{
						level: "I",
						slug: "divine-attributes",
						title: "The Attributes of God",
						contents: [
							{
								type: "material",
								slug: "mat-2-1-1",
								title: "God is Pure Spirit",
								content: `<p>God does not have a body. He is an infinite, intelligent, and free Spirit. This is why we cannot 'see' Him with physical eyes.</p>`,
							},
							{
								type: "material",
								slug: "mat-2-1-2",
								title: "God is Eternal",
								content: `<p>God has no beginning and no end. He exists in an 'Everlasting Now'. He created time, so He is not limited by it.</p>`,
							},
							{
								type: "question",
								slug: "q-2-1-1",
								question: "What does it mean that God is 'Omnipresent'?",
								choices: [
									{ option: "a", content: "He is only in Heaven." },
									{ option: "b", content: "He is everywhere at all times." },
									{ option: "c", content: "He is inside the stars only." },
									{
										option: "d",
										content: "He is limited to certain holy buildings.",
									},
								],
								correctAnswer: "b",
								explanationCorrect:
									"Since God sustains all things in existence, He is present to all things at every moment.",
								explanationWrong:
									"Limiting God to a location denies His infinite nature as the Creator of all space.",
							},
							{
								type: "material",
								slug: "mat-2-1-3",
								title: "God is Immutable",
								content: `<p>This means God does not change. He is always perfectly Good, perfectly True, and perfectly Loving. He cannot 'get better' or 'get worse'.</p>`,
							},
							{
								type: "question",
								slug: "q-2-1-2",
								question: "If God is 'Omniscient', what does He know?",
								choices: [
									{
										option: "a",
										content: "Only things that happened in the past.",
									},
									{
										option: "b",
										content:
											"Everything—past, present, and future, including our thoughts.",
									},
									{ option: "c", content: "Only what we tell Him in prayer." },
									{ option: "d", content: "Most things, but not everything." },
								],
								correctAnswer: "b",
								explanationCorrect:
									"Omniscience means 'all-knowing'. Nothing is hidden from God's intellect.",
								explanationWrong:
									"A God with limited knowledge would not be the Infinite Being.",
							},
						],
					},
					{
						level: "II",
						slug: "holy-trinity-foundations",
						title: "Foundations of the Holy Trinity",
						contents: [
							{
								type: "material",
								slug: "mat-2-2-1",
								title: "One God, Three Persons",
								content: `<p>The Trinity is the central mystery of the Christian faith. It is not 1+1+1=3, but a communion of One Divine Nature in Three Persons.</p>`,
							},
							{
								type: "question",
								slug: "q-2-2-1",
								question: "Who are the three Persons of the Holy Trinity?",
								choices: [
									{ option: "a", content: "God, Mary, and Joseph." },
									{
										option: "b",
										content: "The Father, the Son, and the Holy Spirit.",
									},
									{
										option: "c",
										content: "Creation, Redemption, and Sanctification.",
									},
									{ option: "d", content: "Heaven, Earth, and Purgatory." },
								],
								correctAnswer: "b",
								explanationCorrect:
									"These are the three distinct Persons who share the one same divine essence.",
								explanationWrong:
									"The other options are either humans, places, or actions, not the Persons of the Godhead.",
							},
							{
								type: "material",
								slug: "mat-2-2-2",
								title: "The Father: The Source",
								content: `<p>The Father is the 'Unbegotten' principle of the Trinity. He eternally generates the Son in an act of infinite knowledge.</p>`,
							},
							{
								type: "material",
								slug: "mat-2-2-3",
								title: "The Son: The Word",
								content: `<p>The Son is the 'Logos' (Word). He is eternally begotten, not created. He is the perfect image of the Father.</p>`,
							},
							{
								type: "material",
								slug: "mat-2-2-4",
								title: "The Holy Spirit: The Love",
								content: `<p>The Holy Spirit is the personal Love between the Father and the Son. He 'proceeds' from both as from one principle.</p>`,
							},
						],
					},
				],
			},
			{
				level: "X",
				slug: "final-boss-the-trinity-and-reason",
				title: "Final Boss: The Mystery of the Godhead",
				isFinalBoss: true,
				boss: {
					type: "debate",
					slug: "trinity-vs-logic-debate",
					title: "Theological Apologetics: Is the Trinity Logically Possible?",
					question:
						"Defend the Christian doctrine of the Holy Trinity against the charge of 'Logical Contradiction'. How does the distinction between 'Nature' (what a thing is) and 'Person' (who a thing is) allow for one God in three Persons without falling into Tritheism (three gods) or Modalism (one god with three masks)?",
					expectedPoints: [
						"Distinction between Essence (Ousia) and Hypostasis (Personhood).",
						"The concept of 'Relations of Origin' (Paternity, Filiation, Spiration).",
						"Perichoresis: The mutual indwelling and unity of operation among the three Persons.",
						"God as 'Ipsum Esse Subsistens' (Subsistent Being Itself) which transcends finite numerical logic.",
						"Refutation of Modalism (denying distinction) and Tritheism (denying unity).",
					],
				},
			},
		],
	},
];
