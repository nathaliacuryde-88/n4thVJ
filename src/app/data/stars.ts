/**
 * The bright stars of the northern sky and the lines of their constellations:
 * name, right ascension (hours), declination (degrees), magnitude. J2000,
 * rounded — enough for a sky drawn soft.
 */
export const STARS: [string, number, number, number][] = [
  // Orion
  ['Betelgeuse', 5.919, 7.41, 0.5], ['Rigel', 5.242, -8.2, 0.1], ['Bellatrix', 5.419, 6.35, 1.6], ['Mintaka', 5.533, -0.3, 2.2],
  ['Alnilam', 5.604, -1.2, 1.7], ['Alnitak', 5.679, -1.94, 1.8], ['Saiph', 5.796, -9.67, 2.1], ['Meissa', 5.585, 9.93, 3.4],
  // Canis Major, Canis Minor
  ['Sirius', 6.752, -16.72, -1.46], ['Mirzam', 6.378, -17.96, 2.0], ['Adhara', 6.977, -28.97, 1.5], ['Wezen', 7.14, -26.39, 1.8],
  ['Aludra', 7.401, -29.3, 2.4], ['Procyon', 7.655, 5.22, 0.4], ['Gomeisa', 7.453, 8.29, 2.9],
  // Gemini
  ['Castor', 7.577, 31.89, 1.6], ['Pollux', 7.755, 28.03, 1.1], ['Alhena', 6.629, 16.4, 1.9], ['Mebsuta', 6.383, 25.13, 3.0],
  ['Wasat', 7.335, 21.98, 3.5], ['Mekbuda', 7.068, 20.57, 3.8],
  // Taurus, Auriga
  ['Aldebaran', 4.599, 16.51, 0.9], ['Elnath', 5.438, 28.61, 1.7], ['Alcyone', 3.791, 24.11, 2.9], ['Tianguan', 5.627, 21.14, 3.0],
  ['Ain', 4.477, 19.18, 3.5], ['Hyadum', 4.33, 15.63, 3.6], ['Capella', 5.278, 46.0, 0.1], ['Menkalinan', 5.992, 44.95, 1.9],
  ['Mahasim', 5.995, 37.21, 2.6], ['Hassaleh', 4.95, 33.17, 2.7],
  // Perseus, Cassiopeia, Andromeda, Pegasus
  ['Mirfak', 3.405, 49.86, 1.8], ['Algol', 3.136, 40.96, 2.1], ['Atik', 3.902, 31.88, 2.9], ['Eps Per', 3.964, 40.01, 2.9],
  ['Del Per', 3.715, 47.79, 3.0], ['Gam Per', 3.08, 53.51, 2.9], ['Schedar', 0.675, 56.54, 2.2], ['Caph', 0.153, 59.15, 2.3],
  ['Gam Cas', 0.945, 60.72, 2.2], ['Ruchbah', 1.43, 60.24, 2.7], ['Segin', 1.907, 63.67, 3.4], ['Alpheratz', 0.14, 29.09, 2.1],
  ['Mirach', 1.162, 35.62, 2.1], ['Almach', 2.065, 42.33, 2.1], ['Del And', 0.655, 30.86, 3.3], ['Markab', 23.079, 15.21, 2.5],
  ['Scheat', 23.063, 28.08, 2.4], ['Algenib', 0.221, 15.18, 2.8], ['Enif', 21.736, 9.88, 2.4],
  // Cygnus, Lyra, Aquila
  ['Deneb', 20.69, 45.28, 1.25], ['Sadr', 20.37, 40.26, 2.2], ['Gienah', 20.77, 33.97, 2.5], ['Del Cyg', 19.75, 45.13, 2.9],
  ['Albireo', 19.512, 27.96, 3.1], ['Vega', 18.616, 38.78, 0.03], ['Sheliak', 18.835, 33.36, 3.5], ['Sulafat', 18.982, 32.69, 3.3],
  ['Zet Lyr', 18.746, 37.61, 4.3], ['Altair', 19.846, 8.87, 0.8], ['Tarazed', 19.771, 10.61, 2.7], ['Alshain', 19.922, 6.41, 3.7],
  // The Bears, Draco
  ['Dubhe', 11.062, 61.75, 1.8], ['Merak', 11.031, 56.38, 2.4], ['Phecda', 11.897, 53.69, 2.4], ['Megrez', 12.257, 57.03, 3.3],
  ['Alioth', 12.9, 55.96, 1.8], ['Mizar', 13.399, 54.93, 2.2], ['Alkaid', 13.792, 49.31, 1.9], ['Polaris', 2.53, 89.26, 2.0],
  ['Kochab', 14.845, 74.16, 2.1], ['Pherkad', 15.345, 71.83, 3.0], ['Yildun', 17.537, 86.59, 4.4], ['Eps UMi', 16.766, 82.04, 4.2],
  ['Zet UMi', 15.734, 77.79, 4.3], ['Eta UMi', 16.292, 75.76, 5.0], ['Eltanin', 17.943, 51.49, 2.2], ['Rastaban', 17.507, 52.3, 2.8],
  // Leo, Boötes, Virgo
  ['Regulus', 10.139, 11.97, 1.4], ['Denebola', 11.818, 14.57, 2.1], ['Algieba', 10.333, 19.84, 2.0], ['Zosma', 11.235, 20.52, 2.6],
  ['Chertan', 11.237, 15.43, 3.3], ['Adhafera', 10.278, 23.42, 3.4], ['Rasalas', 9.879, 26.01, 3.9], ['Eta Leo', 10.122, 16.76, 3.5],
  ['Arcturus', 14.261, 19.18, -0.05], ['Izar', 14.75, 27.07, 2.4], ['Muphrid', 13.911, 18.4, 2.7], ['Seginus', 14.535, 38.31, 3.0],
  ['Nekkar', 15.032, 40.39, 3.5], ['Del Boo', 15.258, 33.31, 3.5], ['Spica', 13.42, -11.16, 1.0],
  // Further south and the rest
  ['Antares', 16.49, -26.43, 1.0], ['Diphda', 0.727, -17.99, 2.0], ['Menkar', 3.038, 4.09, 2.5], ['Hamal', 2.12, 23.46, 2.0],
  ['Sheratan', 1.911, 20.81, 2.6], ['Fomalhaut', 22.961, -29.62, 1.2], ['Kaus Australis', 18.403, -34.38, 1.8], ['Nunki', 18.921, -26.3, 2.0],
];

/** Constellations as chains of star names. */
export const LINES: { name: string; chains: string[][] }[] = [
  { name: 'Orion', chains: [['Betelgeuse', 'Meissa', 'Bellatrix'], ['Betelgeuse', 'Alnitak', 'Alnilam', 'Mintaka', 'Bellatrix'], ['Alnitak', 'Saiph'], ['Mintaka', 'Rigel']] },
  { name: 'Canis Major', chains: [['Mirzam', 'Sirius', 'Wezen', 'Adhara'], ['Wezen', 'Aludra']] },
  { name: 'Canis Minor', chains: [['Procyon', 'Gomeisa']] },
  { name: 'Gemini', chains: [['Castor', 'Pollux'], ['Castor', 'Mebsuta'], ['Pollux', 'Wasat', 'Mekbuda', 'Alhena']] },
  { name: 'Taurus', chains: [['Elnath', 'Ain', 'Hyadum', 'Aldebaran', 'Tianguan']] },
  { name: 'Pleiades', chains: [] },
  { name: 'Auriga', chains: [['Capella', 'Menkalinan', 'Mahasim', 'Elnath', 'Hassaleh', 'Capella']] },
  { name: 'Perseus', chains: [['Gam Per', 'Mirfak', 'Del Per', 'Eps Per', 'Atik'], ['Mirfak', 'Algol']] },
  { name: 'Cassiopeia', chains: [['Caph', 'Schedar', 'Gam Cas', 'Ruchbah', 'Segin']] },
  { name: 'Andromeda', chains: [['Alpheratz', 'Del And', 'Mirach', 'Almach']] },
  { name: 'Pegasus', chains: [['Markab', 'Scheat', 'Alpheratz', 'Algenib', 'Markab'], ['Markab', 'Enif']] },
  { name: 'Cygnus', chains: [['Deneb', 'Sadr', 'Albireo'], ['Gienah', 'Sadr', 'Del Cyg']] },
  { name: 'Lyra', chains: [['Vega', 'Zet Lyr', 'Sheliak', 'Sulafat', 'Zet Lyr']] },
  { name: 'Aquila', chains: [['Tarazed', 'Altair', 'Alshain']] },
  { name: 'Great Bear', chains: [['Dubhe', 'Merak', 'Phecda', 'Megrez', 'Dubhe'], ['Megrez', 'Alioth', 'Mizar', 'Alkaid']] },
  { name: 'Little Bear', chains: [['Polaris', 'Yildun', 'Eps UMi', 'Zet UMi', 'Kochab', 'Pherkad', 'Eta UMi', 'Zet UMi']] },
  { name: 'Draco', chains: [['Eltanin', 'Rastaban']] },
  { name: 'Leo', chains: [['Regulus', 'Eta Leo', 'Algieba', 'Adhafera', 'Rasalas'], ['Algieba', 'Zosma', 'Denebola', 'Chertan', 'Regulus'], ['Zosma', 'Chertan']] },
  { name: 'Boötes', chains: [['Arcturus', 'Izar', 'Del Boo', 'Nekkar', 'Seginus', 'Arcturus'], ['Arcturus', 'Muphrid']] },
  { name: 'Aries', chains: [['Hamal', 'Sheratan']] },
];
