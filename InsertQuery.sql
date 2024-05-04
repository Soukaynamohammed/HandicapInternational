INSERT INTO QUIZ ([id],[chapter_id])
VALUES (1,1),(2,2),(3,3),(4,4);

INSERT INTO [dbo].[chapter] ([id],[quiz_id],[title])
VALUES
	(1,1,'Introduction'),
	(2,2,'Consequences of landmines'),
	(3,3,'Countries'),
	(4,4,'Ways to assist');

INSERT INTO  [dbo].[question] (id,[correct_answer],[option1],[option2],[option3],[option4],[text],[quiz_id])
VALUES
	(1, 2,'A type of camouflage used by soldiers','An explosive weapon concealed on the ground','A type of tank used in warfare',' A type of aircraft designed for mine deployment','What is a land mine?',1),
	(2, 4,'By remote control','By sound detection','By timed delay after deployment','By pressure from a target','How are land mines typically detonated?',1),
	(3, 3,'To injure infantry','To attack aircraft','To immobilize or destroy vehicles','To protect minefields from intrusion','What is the primary purpose of anti-tank mines?',1),
	(4, 1,'They harm civilians and the economy','They are ineffective in warfare','They are easily detectable','They are used only in times of peace','Why is the use of land mines controversial?',1),
	(5, 3,'By dropping mines from airplanes','By firing mine-scattering shells from artillery','By burying mines with engineers','By launching mines from helicopters','How are minefields typically created?',1),
	(6, 2,'They are easily visible and avoidable','They remain dangerous even after conflicts end','They can only harm combatants','They are harmless to civilians','What is the main danger of minefields?',1),
	(7, 3,'To destroy tanks','To immobilize vehicles','To kill or injure people','To protect military bases','What is the primary purpose of anti-personnel mines?',1),
	(8, 1,'To reduce the logistical burden on the opposing force','To increase civilian casualties','To decrease the effectiveness of minefields','To minimize damage to vehicles','Why do some anti-personnel mines aim to injure rather than kill?',1),

	(9, 2,'Over 50,000','Over 120,000','Over 200,000','Over 500,000','What is the estimated number of casualties from mines, IEDs, and explosive remnants of war according to the Landmine Monitor from 1999 to 2017?',2),
	(10, 4,'47%','57%',' 67%','87%','In 2017, what percentage of landmine casualties were civilians?',2),
	(11, 1,'Afghanistan','Syria','Ukraine','Mozambique','Which country had the largest number of casualties in 2017?',2),
	(12, 3,'They speed up demining efforts.','They have no effect on demining efforts.','They displace landmines, making them harder to detect.','They have a minimal impact on demining efforts.','How do natural disasters like floods impact efforts to demine areas?',2),
	(13, 3,'Loss of biodiversity','Chemical contamination','Access denial to vital resources','Increased urbanization','What is the most prominent ecological issue associated with landmines?',2),
	(14, 2,'By promoting conservation efforts','By wiping out vegetation and wildlife during explosions','By deterring poachers','By reducing human activity in affected areas','What is one way landmines can threaten biodiversity?',2),
	(15, 1,'Through soil contamination','Through the atmosphere','Through water bodies','Through direct contact with humans','How do toxic compounds from landmines primarily enter the environment?',2),

	(16, 1,'Egypt','Iran','Afghanistan','Angola','Which country has an estimated 23 million landmines planted, with about 20% of them posing a threat to the population?',3),
	(17, 1,'Egypt','Iran','Afghanistan','Angola','In which country have over 7,900 people been victimized by landmines over the past 25 years?',3),
	(18, 2,'Desert regions','Kurdish-majority provinces','Coastal areas','Mountainous regions','Where are most of Iran s estimated 16 million landmines located?',3),
	(19, 4,'Vietnam','Cambodia','Bosnia and Herzegovina','Afghanistan','Which country has an area of 713 square kilometers remaining to be cleared of landmines?',3),
	(20, 3,'Over 1 million','Over 100,000','Over 400,000','Less than 50,000','How many landmine disabled people are estimated to be in Afghanistan?',3),
	(21, 4,'35,000','350,000','3.5 million','35 million','How many landmines are estimated to remain buried in Vietnam s countryside?',3),
	(22, 3,'Egypt','Iraq','Cambodia','Bosnia and Herzegovina','In which country have more than 60,000 people been killed by landmines and cluster munitions in the past four decades?',3),
	(23, 2,'5','55','550','5,500','How many Bosnian deminers have been killed since the demining process started in Bosnia and Herzegovina?',3),

	(24, 3,'To manually defuse mines','To destroy all landmines to a given depth','To clear a path through a minefield','To advocate for mine clearance treaties','What is the primary goal of demining in military operations?',4),
	(25, 4,'Manually defusing mines','Blowing up mines with explosives','Mine-clearing line charge','Mine plows','Which method of mine clearance involves using a specially designed shovel to unearth mines and shove them to the side?',4),
	(26, 3,'To manually defuse mines','To create a fuel-air explosive cloud','To trigger mines with a blast wave','To clear a path through a minefield','What is the main purpose of the mine-clearing line charge?',4),
	(27, 2,'The International Campaign to Ban Landmines','The HALO Trust','MAG','Humanity & Inclusion','Which organization helps countries recover after conflict by clearing landmines?',4),
	(28, 3,'Clearing landmines in conflict zones','Providing aid to communities affected by landmines','Advocating for mine clearance treaties','Promoting sustainable peace and security','What is the main focus of the International Campaign to Ban Landmines?',4),
	(29, 3,'The HALO Trust','The International Campaign to Ban Landmines','MAG','Humanity & Inclusion','Which organization works to find and destroy landmines, cluster munitions, and unexploded bombs in conflict-affected areas?',4),
	(30, 4,'Advocating for mine clearance treaties','Providing aid to communities affected by landmines','Clearing landmines in conflict zones','Working in situations of poverty and exclusion','What is the main focus of Humanity & Inclusion?',4),
	(31, 2,'Mine-clearing line charge','Fuel-air explosive (FAE)','Mine plows','Manual defusing','Which technology has been increasingly utilized for demining operations in the 2000s?',4)


INSERT INTO [HIproject].[dbo].[info_card] (id, alinea_text, order_number, subtitle, chapter_id)
VALUES 
	(
		1,
		'A land mine, or landmine, is an explosive weapon concealed under or camouflaged on the ground, and designed to destroy or disable enemy targets, ranging from combatants to vehicles and tanks, as they pass over or near it. Such a device is typically detonated automatically by way of pressure when a target steps on it or drives over it, although other detonation mechanisms are also sometimes used. A land mine may cause damage by direct blast effect, by fragments that are thrown by the blast, or by both. Land mines are typically laid throughout an area, creating a minefield which is dangerous to cross. Minefields may be laid by several means. The preferred, but most labour-intensive, way is to have engineers bury the mines, since this will make the mines practically invisible and reduce the number of mines needed to deny the enemy an area. Mines can be laid by specialized mine-laying vehicles. Mine-scattering shells may be fired by artillery from a distance of several tens of kilometers. Mines may be dropped from helicopters or airplanes, or ejected from cluster bombs or cruise missiles.',
		1,
		'General information',
		1
	),
	(
		2,
		'Anti-tank mines were created not long after the invention of the tank in the First World War. At first improvised, purpose-built designs were developed. Set off when a tank passes, they attack the tank at one of its weaker areas – the tracks. They are designed to immobilize or destroy vehicles and their occupants. Anti-tank mines are typically larger than anti-personnel mines and require more pressure to detonate. The high trigger pressure, normally requiring 100 kilograms (220 lb) prevents them from being set off by infantry or smaller vehicles of lesser importance. More modern anti-tank mines use shaped charges to focus and increase the armor penetration of the explosives.',
		2,
		'Different kinds of landmines - Anti-tank mines ',
		1
	),
	(
		3,
		'Anti-personnel mines are designed primarily to kill or injure people, as opposed to vehicles. They are often designed to injure rather than kill to increase the logistical support (evacuation, medical) burden on the opposing force. Some types of anti-personnel mines can also damage the tracks or wheels of armored vehicles.',
		3,
		'Different kinds of landmines - Anti-personnel mines',
		1
	),
	(
		4,
		'The use of land mines is controversial because of their potential as indiscriminate weapons. They can remain dangerous many years after a conflict has ended, harming civilians and the economy. Seventy-eight countries are contaminated with land mines and 15,000–20,000 people are killed every year while many more are injured. Approximately 80% of land mine casualties are civilians, with children as the most affected age group. Most killings occur in times of peace.',
		4,
		'The uses of landmines',
		1
	),
	(
		5,
		'From 1999 to 2017, the Landmine Monitor has recorded over 120,000 casualties from mines, IEDs and explosive remnants of war; it estimates that another 1,000 per year go unrecorded. The estimate for all time is over half a million. In 2017, at least 2,793 were killed and 4,431 injured. 87% of the casualties were civilians and 47% were children (less than 18 years old). The largest numbers of casualties were in Afghanistan (2,300), Syria (1,906), and Ukraine (429).',
		1,
		'Casualties',
		2
	),
	(
		6,
		'Natural disasters can have a significant impact on efforts to demine areas of land. For example, the floods that occurred in Mozambique in 1999 and 2000 may have displaced hundreds of thousands of land mines left from the war. Uncertainty about their locations delayed recovery efforts.',
		2,
		'Environmental',
		2
	),
	(
		7,
		'The most prominent ecological issue associated with land mines (or fear of them) is denial of access to vital resources (where "access" refers to the ability to use resources, in contrast to "property", the right to use them). The presence and fear of presence of even a single land mine can discourage access for agriculture, water supplies and possibly conservation measures.Reconstruction and development of important structures such as schools and hospitals are likely to be delayed, and populations may shift to urban areas, increasing overcrowding and the risk of spreading diseases.',
		3,
		'Access denial',
		2
	),
	(
		8,
		'Land mines can threaten biodiversity by wiping out vegetation and wildlife during explosions or demining. This extra burden can push threatened and endangered species to extinction. They have also been used by poachers to target endangered species.',
		4,
		'Loss of biodiversity',
		2
	),
	(
		9,
		'Near mines that have exploded or decayed, soils tend to be contaminated, particularly with heavy metals. Products produced from the explosives, both organic and inorganic substances, are most likely to be "long lasting, water-soluble and toxic even in small amounts". They can be implemented either "directly or indirectly into soil, water bodies, microorganisms and plants with drinking water, food products or during respiration". Toxic compounds can also find their way into bodies of water and accumulate in land animals, fish and plants. They can act "as a nerve poison to hamper growth", with deadly effect.',
		5,
		'Chemical contamination',
		2
	),
	(
		10,
		'In Egypt there are 23M landmines planted, about 20% of them are threatening the population in the eastern and western parts of the county. The main impact on the population is: Impeding agricultural development operations, Impeding efforts aiming at industrial development and establishing new urban communities etc. Over the past 25 years, about 7,923 people were victimized by landmines, including 3,200 dead and 4,723 injured, according to local and international statistics.',
		1,
		'Egypt',
		3
	),
	(
		11,
		'Most of Iran’s estimated 16 million landmines lie in the Iranian provinces bordering Iraq – Ilam, Kermanshah, Khuzestan, Kurdistan and West Azerbaijan, all of which except Khuzestan are Kurdish-majority provinces. The Geneva-based Landmine and Cluster Munition Monitor identified a total 2,823 deaths and over 7,000 injuries from landmines and explosive remnants of war in Iran between 1988 and 2017.',
		2,
		'Iran',
		3
	),
	(
		12,
		'In Afghanistan there is an area of 713 square kilometers remaining to be cleared. Mines have had a devastating socio-economic impact - roads, irrigation systems, agricultural and grazing areas have been rendered unusable, and inhabitants have been forced to leave their homes and properties. It is not possible at this time to determine the exact number of landmine victims in Afghanistan. It has been estimated that there are more than 400,000 landmine disabled people in Afghanistan.',
		3,
		'Afganistan',
		3
	),
	(
		13,
		'In Angola over 73 million square meters of land contaminated and over 1,100 known and suspected minefields. Millions of landmines and other unexploded bombs are still scattered throughout the country. The contamination in eastern Angola has a significant impact on local communities. People living in the poorest areas of the country are unable to build homes and farm their land safely. Over 88,000 people were registered as living with disabilities from landmines and unexploded bombs in 2014. ',
		4,
		'Angola',
		3
	),
	(
		14,
		'An estimated 10 million landmines, and between 2.6 and 6 million unexploded bombs still lay in Iraq. The mine problem is intensified by the fact that there are no laying plans and therefore no reliable data on the exact location of the mine fields.Due to the contamination of landmines and other explosive remnants of war (ERW), thousands of people have already been injured or killed in Iraq.',
		5,
		'Iraq',
		3
	),
	(
		15,
		'Despite years of concerted clean-up efforts, there still is more than 1,000 square kilometers of Cambodia which has significant amounts of either unexploded landmines or cluster munitions. These devices have been detected in almost every region of Cambodia. In the past four decades, more than 60,000 people have been killed by these devices, which each year also cause dozens of serious injuries. But fortunately, travelers to Cambodia are able to assist in the effort to combat this crisis.',
		6,
		'Cambodia',
		3
	),
	(
		16,
		'Since 1996, when the demining process started in Bosnia and Herzegovina after the war, a total of 55 Bosnian deminers and 673 civilians have been killed by exploding ordnance.There are still some 400 square kilometres of potentially dangerous territory in the country in which there are 32,000 remaining landmines, according to the Croatian Mine Action Centre, the state institution responsible for demining.',
		7,
		'Bosnia and Herzegovina',
		3
	),
	(
		17,
		'Nearly 40,000 people have been killed in Vietnam by landmines or unexploded ordnance since the end of the war in 1975. Vietnamese officials estimate 35 million landmines and 300,000 tons of unexploded ordnance remain buried in the countryside.',
		8,
		'Vietnam',
		3
	),
	(
		18,
		'Demining or mine clearance is the process of removing land mines from an area. In military operations, the object is to rapidly clear a path through a minefield, and this is often done with devices such as mine plows and blast waves. By contrast, the goal of humanitarian demining is to remove all of the landmines to a given depth and make the land safe for human use.',
		1,
		'Ways to clear mines',
		4
	),
	(
		19,
		'Once a mine is found, the most common methods of removing it are to manually defuse it (a slow and dangerous process) or blow it up with more explosives (dangerous and costly). Research programs have explored alternatives that destroy the mine without exploding it, using chemicals or heat.',
		2,
		'Humanitarian',
		4
	),
	(
		20,
		'Mine plows use a specially designed shovel to unearth mines and shove them to the side, clearing a path. They are quick and effective for clearing a lane for vehicles and are still attached to some types of tank and remotely operated vehicles. The mines are moved but not deactivated, so mine plows are not used for humanitarian demining.

The mine-clearing line charge, clears a path through a minefield by triggering the mines with a blast wave.

In the 2000s Fuel-air explosive (FAE) technology has been increasingly utilized for demining operations, offering an effective method for clearing minefields.
This system uses a series of rockets to disperse a fuel spray over a targeted area, creating a fuel-air explosive cloud that detonates to clear mines over a wide area, thus providing a rapid and safe path for military operations.',
		3,
		'Military',
		4
	),
	(
		21,
		'The International Campaign to Ban Landmines (ICBL) raises awareness and advocates at the national, regional and international levels. Through its global membership the ICBL brings the reality of mine-affected communities into the diplomatic arena. ICBL campaigners around the world work in a spirit of cooperation with their governments and other partners to ensure countries join the Mine Ban Treaty and live up to the letter and spirit of the treaty.',
		4,
		'Donation Organization: The International Campaign to Ban Landmines',
		4
	),
	(
		22,
		'The HALO Trust  helps countries recover after conflict. Clearing landmines, to save lives, is at the heart of what we do. We work with communities that are too often forgotten once the fighting has ended, a point reinforced by Princess Diana after her visit to Angola in 1997. ',
		5,
		'Donation Organization: HALO',
		4
	),
	(
		23,
		'“We find and destroy landmines, cluster munitions and unexploded bombs in places affected by conflict. We also work to limit the causes and address the consequences of armed violence in communities. Our work saves lives, eases suffering, protects human rights and contributes to sustainable peace and security. Since 1989, we have helped over 20 million people in 70 countries.”',
		6,
		'Donation Organization: MAG',
		4
	),
	(
		24,
		'Humanity & Inclusion is an independent and impartial aid organization working in situations of poverty and exclusion, conflict and disaster. We work alongside people with disabilities and individuals experiencing extreme hardship, taking action and bearing witness in order to respond to their essential needs, improve their living conditions and promote respect for their dignity and fundamental rights.',
		7,
		'Donation Organization: Humanity & Inclusion',
		4
	)