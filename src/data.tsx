/** @format */

import type { IChapter } from "./interfaces/data";

export const chapters: IChapter[] = [
	{
		level: "I", // Menggunakan angka Romawi
		slug: "god",
		title: "God",
		description:
			"This chapter explores humanity’s profound search for God, the philosophical and existential ways He can be known, and the core dogmatic teachings about His nature and the mystery of the Trinity in Catholic theology.",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRIeXT-rY4KLHFB8UKy7c00g-Wo97qsSOsSevQsbsyGSlGLfd1NH2wiZ1MvMtdpwAT5jHeYGUEP40HMsZ8WxdPDWHlL26&s&ec=121584914",
		sections: [
			{
				level: "I",
				slug: "human-desire-for-god",
				title: "The Human Desire for God",
				isFinalBoss: false,

				lessons: [
					{
						level: "I",
						slug: "introduction-human-longing",
						title: "Introduction to Human Longing",
						contents: [
							{
								type: "material",
								slug: "human-longing-material",
								title: "The Universal Search for Meaning",
								content: `
<p>Throughout human history, across every culture, civilization, and epoch, human beings have demonstrated a profound, inescapable desire to seek ultimate meaning, purpose, and truth. This existential longing is not a modern psychological construct, nor is it limited to religious individuals; it is fiercely present even among agnostics and atheists. It manifests in the heavy, ultimate questions of life: <em>"Why do I exist?", "What is the purpose of suffering?", "Is physical death the absolute end?",</em> and <em>"Is there a transcendent reality beyond the material world?"</em></p>

<p>This universal human experience strongly suggests that human beings are naturally, ontologically oriented toward something greater than themselves. According to Catholic theology, this longing is not a biological accident or an evolutionary byproduct. Instead, it is a divinely implanted compass. As the Catechism of the Catholic Church teaches, the desire for God is written in the human heart, because man is created by God and for God.</p>

<p>Humans are endowed with the capacity to know and love their Creator. This innate orientation is the engine of human progress, art, philosophy, and ethics. It drives us to seek the ultimate Good, the ultimate True, and the ultimate Beautiful, even if we are not consciously aware that the source of all these transcendental properties is God Himself.</p>
                `,
							},

							{
								type: "question",
								slug: "human-longing-question-1",
								question:
									"What does the universal human search for meaning suggest according to Catholic theological teaching?",
								choices: [
									{
										option: "a",
										content:
											"Humans are naturally self-sufficient and need nothing beyond the material cosmos.",
									},
									{
										option: "b",
										content:
											"Human longing is a purely psychological projection of our fear of death.",
									},
									{
										option: "c",
										content:
											"Human beings are ontologically oriented toward a transcendent reality greater than themselves.",
									},
									{
										option: "d",
										content:
											"The search for meaning is an artificial construct only experienced by religious practitioners.",
									},
								],
								correctAnswer: "c",
								explanationCorrect: `
<p>This answer is correct because Catholic teaching emphasizes that the human desire for meaning is universal and points toward a transcendent reality. It is a natural orientation toward God, who is the author of life. The fact that this existential thirst exists across all cultures and times suggests it is woven into human nature itself, rather than being a mere psychological anomaly or cultural conditioning.</p>
                `,
								explanationWrong: `
<p>This answer is incorrect because it reduces a profound, universal existential reality to a mere defect, a fear, or a localized cultural phenomenon. The lesson clarifies that even non-religious individuals experience this pull toward truth and goodness, proving it is an objective feature of human anthropology, not a subjective illusion.</p>
                `,
							},
						],
					},

					{
						level: "II",
						slug: "restlessness-of-heart",
						title: "The Restlessness of the Human Heart",
						contents: [
							{
								type: "material",
								slug: "restlessness-material",
								title: "Why Finite Goods Cannot Satisfy Infinite Desires",
								content: `
<p>One of the most striking paradoxes of the human condition is our persistent sense of restlessness. No matter how much success, wealth, intellectual achievement, or physical pleasure a person accumulates, there often remains a nagging feeling that something is still missing. This "divine discontent" cannot be cured by external adjustments, as it haunts both the destitute and the billionaire alike.</p>

<p>St. Augustine famously captured this reality in his <em>Confessions</em> when he wrote: <strong>"You have made us for yourself, O Lord, and our heart is restless until it rests in You."</strong> In Catholic theology, this restlessness is interpreted not as a pathology to be medicated, but as a symptom of our greatness. It is proof that the human heart was made for the Infinite.</p>

<p>Since all created, worldly things are finite and limited, they cannot possibly satisfy an appetite that is infinite. When we treat finite things (like money, careers, or romance) as if they were the ultimate source of happiness, we fall into idolatry and inevitable disappointment. This points to a rational conclusion: if nothing in this finite world can fully satisfy the human heart, then the ultimate fulfillment must reside outside of this world. This infinite fulfillment is found only in God, who is the Source of all Being.</p>
                `,
							},

							{
								type: "question",
								slug: "restlessness-question",
								question:
									"Why are material and worldly goods incapable of permanently satisfying the human person?",
								choices: [
									{
										option: "a",
										content:
											"Because material possessions are inherently evil and sinful.",
									},
									{
										option: "b",
										content:
											"Because human beings possess an infinite desire that finite, limited things can never fill.",
									},
									{
										option: "c",
										content:
											"Because human greed prevents us from appreciating what we have.",
									},
									{
										option: "d",
										content:
											"Because the material world is an illusion and does not actually exist.",
									},
								],
								correctAnswer: "b",
								explanationCorrect: `
<p>This is correct. The lesson highlights a fundamental mismatch: humans have an infinite capacity for love and truth, but the material world is finite. You cannot fill an infinite void with finite objects. Thus, restlessness persists until the soul encounters the Infinite Being—God.</p>
                `,
								explanationWrong: `
<p>This answer is incorrect because Catholic theology does not view the material world as evil or as an illusion (which is a form of ancient Gnosticism). The material world is good, but it is limited. The issue is not the goodness of the material world, but its inability to be the ultimate end of human existence.</p>
                `,
							},
						],
					},

					{
						level: "III",
						slug: "implicit-search-for-god",
						title: "The Implicit Search for God",
						contents: [
							{
								type: "material",
								slug: "implicit-search-material",
								title: "Seeking the Source of Truth, Beauty, and Goodness",
								content: `
<p>Not everyone who searches for truth, beauty, or goodness explicitly uses the word "God." Many secular scientists, artists, and humanitarians dedicate their lives to these pursuits without identifying as religious. However, from a theological perspective, every genuine, honest pursuit of truth and goodness is an implicit search for God, whether the person realizes it or not.</p>

<p>In philosophy, these are known as the "transcendentals"—Truth, Beauty, and Goodness. Catholic theology teaches that God is not just a being among other beings; He is Subsistent Being Itself (<em>Ipsum Esse Subsistens</em>). Therefore, He is the ultimate Truth, the ultimate Beauty, and the ultimate Goodness. When an artist labors to create something beautiful, or a scientist tirelessly seeks the truth about the universe, they are tracking the footprints of the Creator.</p>

<p>This means that people of good will who do not know God explicitly may still be responding to His grace implicitly. Their hunger for justice, authentic love, and objective morality reflects a deep, internal resonance with the divine nature.</p>
                `,
							},
						],
					},

					{
						level: "IV",
						slug: "obstacles-to-knowing-god",
						title: "Obstacles to Knowing God",
						contents: [
							{
								type: "material",
								slug: "obstacles-material",
								title: "Intellectual, Moral, and Existential Hurdles",
								content: `
<p>If the desire for God is so natural and universal, why do so many people fail to recognize Him, or even outright reject His existence? Theology recognizes that the human ability to know God is often clouded by various internal and external obstacles:</p>

<ul>
	<li><strong>The Problem of Evil and Suffering:</strong> For many, the reality of innocent suffering, sickness, and injustice makes it difficult to believe in an all-powerful, all-loving God.</li>
	<li><strong>Cultural and Intellectual Conditioning:</strong> We live in a highly secularized world that often reduces reality to what can be measured by empirical science alone (scientism), dismissing the spiritual realm as irrational.</li>
	<li><strong>Moral Resistance:</strong> Recognizing God demands a response. If God exists, there is a moral law. Some reject God because they do not want to change their lifestyles or be accountable to a higher authority.</li>
	<li><strong>Scandal and Poor Examples:</strong> Tragically, the hypocrisy, sins, and failures of religious people often become a stumbling block, obscuring the true face of God to seekers.</li>
</ul>

<p>Understanding these obstacles allows for empathy and dialogue. It shows that atheism or agnosticism is often not a result of a lack of desire for truth, but a wounded or obstructed pursuit of it.</p>
                `,
							},
						],
					},

					{
						level: "V",
						slug: "summary-human-desire",
						title: "Summary of Human Desire for God",
						contents: [
							{
								type: "material",
								slug: "summary-material",
								title: "Key Takeaways on Human Nature",
								content: `
<p>The human person is fundamentally a religious being. Our constant, unquenchable thirst for meaning, our existential restlessness, and our hunger for absolute truth and goodness all act as arrows pointing beyond the physical cosmos. The inability of finite things to satisfy an infinite desire is one of the strongest philosophical indicators of our supernatural destiny.</p>

<p>This dynamic understanding of human anthropology forms the vital foundation for the next stage of our journey: how this God, whom we blindly long for, breaks through the silence of the universe to reveal Himself to us through human reason and divine revelation.</p>
                `,
							},
						],
					},
				],
			},

			// FINAL BOSS
			{
				level: "X",
				slug: "final-boss-trinity",
				title: "Final Boss",
				isFinalBoss: true,

				boss: {
					type: "debate",
					slug: "trinity-debate",
					title: "Theological Apologetics — Why the Trinity is Not Polytheism",
					question:
						"Synthesize a robust theological defense explaining why the Christian doctrine of the Holy Trinity does not equate to Tritheism (belief in three gods). How does the distinction between 'substance' (nature) and 'personhood' resolve this ancient philosophical tension?",
					expectedPoints: [
						"The distinction between Ousia (one divine essence/nature) and Hypostasis (three distinct persons).",
						"The concept of Perichoresis (mutual indwelling and unity without division).",
						"Preservation of Strict Monotheism (Hear, O Israel, the Lord our God is One).",
						"The persons are distinct in their relations of origin, but completely unified in their external operations.",
					],
				},
			},
		],
	},
	{
		level: "II",
		slug: "creation-and-human-dignity",
		title: "Creation & Human Dignity",
		description:
			"This chapter explores the metaphysical origins of the universe, the purpose of created order, and the unique, unrepeatable dignity of the human person as created in the Imago Dei.",

		sections: [
			{
				level: "I",
				slug: "creation-ex-nihilo",
				title: "Creation from Nothing",
				isFinalBoss: false,

				lessons: [
					{
						level: "I",
						slug: "intro-creation",
						title: "Introduction to Creation",
						contents: [
							{
								type: "material",
								slug: "creation-definition",
								title: "The Metaphysics of Divine Creation",
								content: `
<p>In Catholic metaphysics, creation is not merely "making" something. When a carpenter makes a table, or an artist paints a canvas, they are reshaping pre-existing materials. They are dependent on wood, paint, gravity, and time. Divine creation is fundamentally and categorically different.</p>

<p>God does not rely on any prior matter, pre-existing chaos, tools, or external conditions. Instead, He brings all things into being by the sheer power of His Word and Will alone. There was no "stage" upon which God acted; He created the stage itself.</p>

<p>This profound understanding emphasizes that everything that exists—from subatomic quarks to massive galaxies—is radically dependent on God for its existence. Creation is therefore not just a mechanical event that happened billions of years ago. It is an active, ongoing relationship of continuous conservation. If God were to "forget" the universe for even a single millisecond, everything would instantly plunge back into absolute nothingness.</p>
              `,
							},
							{
								type: "question",
								slug: "creation-question-1",
								question:
									"What is the primary metaphysical distinction between divine creation and human craftsmanship?",
								choices: [
									{
										option: "a",
										content:
											"God creates things much faster and more perfectly than humans can.",
									},
									{
										option: "b",
										content:
											"God creates without using any pre-existing materials or external prerequisites.",
									},
									{
										option: "c",
										content:
											"Divine creation is physical, whereas human creation is purely mental.",
									},
									{
										option: "d",
										content:
											"Human creation requires divine permission, whereas God acts autonomously.",
									},
								],
								correctAnswer: "b",
								explanationCorrect: `
<p>Exactly. Human creation is always a process of transformation (taking existing matter and changing its form). Divine creation is primary causation—calling things into existence out of absolute non-existence. This highlights God’s absolute sovereignty and omnipotence.</p>
              `,
								explanationWrong: `
<p>This answer is incorrect because it reduces the difference between God and humans to a matter of speed, scale, or degree. The difference is one of kind. Humans work *with* matter; God gives matter its very being.</p>
              `,
							},
						],
					},

					{
						level: "II",
						slug: "creatio-ex-nihilo",
						title: "Creatio ex Nihilo",
						contents: [
							{
								type: "material",
								slug: "ex-nihilo-material",
								title: "The Doctrine of Creation Out of Nothing",
								content: `
<p>The Latin term <em>Creatio ex Nihilo</em> translates literally to "creation out of nothing." This dogma teaches that before the act of creation, nothing existed except the eternal, triune God. There was no void, no space, no dark matter, and no time. Time itself is a creature—it began when creation began.</p>

<p>This concept is theologically vital for several reasons:</p>
<ul>
	<li><strong>Divine Independence:</strong> It means God did not "need" the universe. He was not lonely, nor was He incomplete. Creation was a free act of pure, overflowing love.</li>
	<li><strong>Rejection of Dualism:</strong> It rejects the ancient pagan idea that matter is eternal or evil, and that God is just a cosmic architect wrestling with stubborn, pre-existing physical matter.</li>
	<li><strong>Ultimate Sovereignty:</strong> Since everything comes from nothing, all of existence belongs to God, and all of it is subject to His providential care.</li>
</ul>
              `,
							},
						],
					},

					{
						level: "III",
						slug: "implications-creation",
						title: "Implications of Ongoing Creation",
						contents: [
							{
								type: "material",
								slug: "implication-material",
								title: "The Sustaining Power of God (Conservatio)",
								content: `
<p>Because the universe was created out of nothing, it has no inherent stability of its own to keep itself in existence. If left to itself, a creature would return to the nothingness from which it came. Therefore, the act of creation is continuous. In theology, this is called <em>Conservatio in Esse</em> (conservation in being).</p>

<p>This shatters the Deistic view of God (the "Watchmaker God" who winds up the universe and steps back to let it run on its own). The Christian view is that God is intimately, vibrantly present to all of reality, holding every atom in existence by a continuous act of loving will. You are being "thought into existence" by God at this very moment.</p>
              `,
							},
						],
					},

					{
						level: "IV",
						slug: "common-misunderstandings",
						title: "Common Misunderstandings: Creation vs Science",
						contents: [
							{
								type: "material",
								slug: "misunderstanding-material",
								title: "Harmonizing Faith and Empirical Reason",
								content: `
<p>A tragic and common misconception is that the theological doctrine of Creation is in direct competition with scientific theories like the Big Bang or biological evolution. In Catholic thought, this is a false dilemma. Faith and reason can never contradict each other, as both find their ultimate source in God.</p>

<p>Science and theology operate on different epistemological levels. Science deals with secondary causes—how the material world changes, expands, and adapts over time (e.g., how hydrogen atoms condensed to form stars). Theology deals with primary causation—why there is a universe to begin with, and what gives hydrogen atoms their ability to exist and obey physical laws.</p>

<p>Monsignor Georges Lemaître, a Catholic priest and physicist, was actually the father of the Big Bang Theory! He understood that the Big Bang describes the physical mechanism of the expanding universe, while Genesis describes the spiritual and metaphysical reality that God is the primary Cause of all that is seen and unseen.</p>
              `,
							},
						],
					},

					{
						level: "V",
						slug: "summary-creation",
						title: "Summary of Divine Creation",
						contents: [
							{
								type: "material",
								slug: "summary-creation-material",
								title: "Key Takeaways on Cosmic Origins",
								content: `
<p>Creation is the gratuitous, loving act by which God brings the entire cosmos into being out of nothing (<em>ex nihilo</em>). Far from being a distant historical event, creation is a living, ongoing reality of divine conservation. It elevates our view of the natural world as something inherently good, intelligible, and reflective of the Creator’s wisdom. It invites us to view science not as an enemy of faith, but as a systematic exploration of the beautiful laws God has woven into the fabric of reality.</p>
              `,
							},
						],
					},
				],
			},

			{
				level: "II",
				slug: "human-dignity-imago-dei",
				title: "Human Dignity (Imago Dei)",
				isFinalBoss: false,

				lessons: [
					{
						level: "I",
						slug: "imago-dei-intro",
						title: "Created in God's Image",
						contents: [
							{
								type: "material",
								slug: "imago-dei-material",
								title: "The Meaning and Depth of Imago Dei",
								content: `
<p>Among all visible creatures, the human person occupies a unique and exalted place. Genesis reveals that humanity is created in the <em>Imago Dei</em> (the image and likeness of God). To understand this doctrine correctly, we must move beyond physical traits—since God is pure Spirit and has no physical body.</p>

<p>Instead, being made in the image of God refers to our spiritual, rational, and relational capacities:</p>
<ul>
	<li><strong>Intellect (Reason):</strong> The ability to comprehend abstract truths, self-reflect, do mathematics, and recognize the moral law.</li>
	<li><strong>Free Will (Freedom):</strong> The capacity to make autonomous moral choices and to master one's instincts.</li>
	<li><strong>The Capacity to Love:</strong> True love requires self-gift. Just as the Trinity is an eternal communion of self-giving love, humans are hardwired for communion and self-gift.</li>
</ul>

<p>This teaching is the absolute bedrock of universal human rights and human dignity. It means that every single person—regardless of race, economic utility, age, health, or mental capacity—possesses an inherent, sacred worth that can never be stripped away by governments, societies, or economic systems.</p>
              `,
							},
							{
								type: "question",
								slug: "imago-dei-question",
								question:
									"Why does the doctrine of the Imago Dei provide the ultimate foundation for objective human rights?",
								choices: [
									{
										option: "a",
										content:
											"Because it claims that humans are the most physically powerful creatures on earth.",
									},
									{
										option: "b",
										content:
											"Because it anchors human worth in a person's utility and economic contribution to society.",
									},
									{
										option: "c",
										content:
											"Because it teaches that human dignity is inherent and given by God, not granted by human governments.",
									},
									{
										option: "d",
										content:
											"Because it teaches that only people of faith possess this special dignity.",
									},
								],
								correctAnswer: "c",
								explanationCorrect: `
<p>Perfect. If human rights are granted by a government, a government can take them away. If rights are granted by utility, then the sick, elderly, or unborn lose their value. The Imago Dei ensures that human dignity is absolute, objective, and untouchable because it is anchored in God Himself.</p>
              `,
								explanationWrong: `
<p>This answer is incorrect. Basing dignity on physical power, economic utility, or even religious status would lead to horrific human rights abuses. The beauty of the Catholic concept of Imago Dei is that it applies unconditionally to every human being from conception to natural death, regardless of their utility or belief.</p>
                `,
							},
						],
					},

					{
						level: "II",
						slug: "soul-and-body",
						title: "The Hylomorphic Unity of Soul and Body",
						contents: [
							{
								type: "material",
								slug: "soul-body-material",
								title: "Unity of the Human Person",
								content: `
<p>In Catholic anthropology, a human person is not a soul trapped inside a heavy, awkward biological spacesuit (a view held by Plato and ancient Gnostics). Neither are we just a collection of meat, synapses, and chemical reactions (the view of materialist reductionism).</p>

<p>Instead, Catholic theology embraces *Hylomorphism* (the Aristotelian-Thomistic view): the human person is a single, unified composite of body AND soul. The soul is the substantial form of the body. What you do to your body, you do to yourself. What happens in your soul affects your body.</p>

<p>This profound unity explains why physical sacraments (like using real water in baptism, real bread and wine in the Eucharist, or physical touch in anointing) are used to convey spiritual grace. It also elevates our view of physical health, biology, and the eventual resurrection of the body at the end of time.</p>
              `,
							},
						],
					},

					{
						level: "III",
						slug: "freedom-and-will",
						title: "Freedom, Free Will, and the Moral Law",
						contents: [
							{
								type: "material",
								slug: "free-will-material",
								title: "The Gift and Burden of Freedom",
								content: `
<p>Human beings are uniquely endowed with free will. We are not bound by pure biological determinism or animal instincts. A dog must act like a dog, but a human can choose to act against their biological impulses for the sake of a higher good (such as fasting, celibacy, or self-sacrifice in war).</p>

<p>This freedom is absolutely essential for genuine love. If you program a robot to say "I love you" every morning, that is not love—it is automated scripting. True love requires the ability to choose otherwise. God risked creating creatures who could reject Him, precisely because it was the only way to create creatures who could authentically love Him.</p>

<p>However, modern culture often confuses freedom with *license* (the ability to do whatever I want, whenever I want). In Catholic theology, authentic freedom is the disciplined capacity to do what I *ought* to do. It is ordered toward truth and the good.</p>
              `,
							},
						],
					},

					{
						level: "IV",
						slug: "original-sin",
						title: "The Mystery of Original Sin",
						contents: [
							{
								type: "material",
								slug: "original-sin-material",
								title: "The Rupture in Human Nature",
								content: `
<p>If humans are made in the image of God and are meant for goodness, why is the world so broken? Why do we experience internal civil war—knowing the good, yet choosing the bad? St. Paul famously lamented this: "For I do not do the good I want, but the evil I do not want is what I keep on doing."</p>

<p>Theology explains this through the doctrine of Original Sin. It refers to the primal choice of humanity to live independently of God, to "be like gods" on their own terms. This was a catastrophic failure of trust. As a result, human nature was not destroyed, but it was deeply wounded.</p>

<p>Original sin is not a personal personal sin we commit; it is a fallen state of being into which we are born. It results in *concupiscence* (the darkened intellect, weakened will, and disordered desires). It explains the presence of suffering, death, war, and moral frailty in our world today.</p>
              `,
							},
						],
					},

					{
						level: "V",
						slug: "hope-of-salvation",
						title: "The Promise of Redemption",
						contents: [
							{
								type: "material",
								slug: "salvation-hope-material",
								title: "The Protoevangelium and the Return to Grace",
								content: `
<p>Despite the tragedy of human rebellion, God does not abandon humanity to the dust of our own choices. Creation is immediately met with the promise of Redemption. Right after the fall in Genesis, God promises that the seed of the woman will crush the head of the serpent (traditionally known as the *Protoevangelium*, or the first Gospel).</p>

<p>The story of human dignity is not a tragedy, but a comedy in the classical sense: it has a happy ending. Wounded human nature is destined to be healed, elevated, and divinized through the Incarnation of Jesus Christ. If the first chapter of our story is about being made in the image of God, the rest of the story is about how God became man so that man might share in the life of God.</p>
              `,
							},
						],
					},
				],
			},

			{
				level: "X",
				slug: "final-boss-free-will",
				title: "Final Boss",
				isFinalBoss: true,

				boss: {
					type: "debate",
					slug: "free-will-vs-determinism",
					title:
						"Philosophical Debate — Libertarian Free Will vs Scientific Determinism",
					question:
						"Mount a rigorous defense of human free will and objective moral responsibility against neurological and materialistic determinism (the claim that all human thoughts and actions are merely pre-determined chemical firing of synapses in the brain).",
					expectedPoints: [
						"The performative contradiction of determinism (if thoughts are determined by blind chemistry, determinism itself cannot be known as objectively true).",
						"The lived, undeniable human experience of moral deliberation and remorse.",
						"Distinction between physical influences/conditioning vs absolute causal determination.",
						"How the immaterial nature of the intellect proves we are more than just a closed physical system.",
					],
				},
			},
		],
	},
];
