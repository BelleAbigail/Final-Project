let words = [
    {
        word: "Hydrogen",
        hint: "H, used in hydrogen fuel cells"
    },
    {
        word: "Helium",
        hint: "He, used in balloons and MRI machines"
    },
    {
        word: "Lithium",
        hint: "Li, used in batteries"
    },
    {
        word: "Beryllium",
        hint: "Be, used in aerospace and nuclear reactors"
    },
    {
        word: "Boron",
        hint: "B, used in fiberglass and cleaning agents"
    },
    {
        word: "Carbon",
        hint: "C, used in diamonds and carbon fiber"
    },
    {
        word: "Nitrogen",
        hint: "N, used in fertilizer and airbags"
    },
    {
        word: "Oxygen",
        hint: "O, used in respiration and combustion"
    },
    {
        word: "Fluorine",
        hint: "F, used in toothpaste and Teflon"
    },
    {
        word: "Neon",
        hint: "Ne, used in neon lights and advertising signs"
    },
    {
        word: "Sodium",
        hint: "Na, used in table salt (NaCl)"
    },
    {
        word: "Magnesium",
        hint: "Mg, used in alloys and fireworks"
    },
    {
        word: "Aluminum",
        hint: "Al, used in cans and aircraft construction"
    },
    {
        word: "Silicon",
        hint: "Si, used in computer chips and glass"
    },
    {
        word: "Phosphorus",
        hint: "P, used in fertilizer and matches"
    },
    {
        word: "Sulfur",
        hint: "S, used in sulfuric acid and vulcanization"
    },
    {
        word: "Chlorine",
        hint: "Cl, used in bleach and PVC"
    },
    {
        word: "Argon",
        hint: "Ar, used in welding and lighting"
    },
    {
        word: "Potassium",
        hint: "K, used in fertilizer and soap"
    },
    {
        word: "Calcium",
        hint: "Ca, used in bones and dairy products"
    },
    {
        word: "Scandium",
        hint: "Sc, used in aerospace alloys and lighting"
    },
    {
        word: "Titanium",
        hint: "Ti, used in aerospace and medical implants"
    },
    {
        word: "Vanadium",
        hint: "V, used in steel alloys and catalysts"
    },
    {
        word: "Chromium",
        hint: "Cr, used in stainless steel and plating"
    },
    {
        word: "Manganese",
        hint: "Mn, used in steel production and batteries"
    },
    {
        word: "Iron",
        hint: "Fe, used in construction and manufacturing"
    },
    {
        word: "Cobalt",
        hint: "Co, used in magnets and rechargeable batteries"
    },
    {
        word: "Nickel",
        hint: "Ni, used in stainless steel and batteries"
    },
    {
        word: "Copper",
        hint: "Cu, used in wiring and plumbing"
    },
    {
        word: "Zinc",
        hint: "Zn, used in galvanization and batteries"
    },
    {
        word: "Gallium",
        hint: "Ga, used in semiconductors and LEDs"
    },
    {
        word: "Germanium",
        hint: "Ge, used in electronics and fiber optics"
    },
    {
        word: "Arsenic",
        hint: "As, used in pesticides and semiconductor materials"
    },
    {
        word: "Selenium",
        hint: "Se, used in photovoltaic cells and glassmaking"
    },
    {
        word: "Bromine",
        hint: "Br, used in flame retardants and pesticides"
    },
    {
        word: "Krypton",
        hint: "Kr, used in lighting and lasers"
    },
    {
        word: "Rubidium",
        hint: "Rb, used in research and atomic clocks"
    },
    {
        word: "Strontium",
        hint: "Sr, used in fireworks and flares"
    },
    {
        word: "Yttrium",
        hint: "Y, used in LEDs and superconductors"
    },
    {
        word: "Zirconium",
        hint: "Zr, used in nuclear reactors and ceramics"
    },
    {
        word: "Niobium",
        hint: "Nb, used in superconductors and aerospace alloys"
    },
    {
        word: "Molybdenum",
        hint: "Mo, used in steel alloys and lubricants"
    },
    {
        word: "Technetium",
        hint: "Tc, used in medical imaging and nuclear batteries"
    },
    {
        word: "Ruthenium",
        hint: "Ru, used in electronics and catalysts"
    },
    {
        word: "Rhodium",
        hint: "Rh, used in catalytic converters and jewelry"
    },
    {
        word: "Palladium",
        hint: "Pd, used in catalytic converters and electronics"
    },
    {
        word: "Silver",
        hint: "Ag, used in jewelry and electronics"
    },
    {
        word: "Cadmium",
        hint: "Cd, used in batteries and pigments"
    },
    {
        word: "Indium",
        hint: "In, used in electronics and solar cells"
    },
    {
        word: "Tin",
        hint: "Sn, used in solder and coatings"
    },
    {
        word: "Antimony",
        hint: "Sb, used in flame retardants and batteries"
    },
    {
        word: "Tellurium",
        hint: "Te, used in solar panels and alloys"
    },
    {
        word: "Iodine",
        hint: "I, used in medicine and photography"
    },
    {
        word: "Xenon",
        hint: "Xe, used in lighting and medical imaging"
    },
    {
        word: "Cesium",
        hint: "Cs, used in atomic clocks and drilling fluids"
    },
    {
        word: "Barium",
        hint: "Ba, used in medicine and fireworks"
    },
    {
        word: "Lanthanum",
        hint: "La, used in catalysts and camera lenses"
    },
    {
        word: "Cerium",
        hint: "Ce, used in catalytic converters and glassmaking"
    },
    {
        word: "Praseodymium",
        hint: "Pr, used in magnets and coloring glass"
    },
    {
        word: "Neodymium",
        hint: "Nd, used in magnets and lasers"
    },
    {
        word: "Promethium",
        hint: "Pm, used in nuclear batteries and luminous paint"
    },
    {
        word: "Samarium",
        hint: "Sm, used in magnets and nuclear reactors"
    },
    {
        word: "Europium",
        hint: "Eu, used in LEDs and security features"
    },
    {
        word: "Gadolinium",
        hint: "Gd, used in MRI contrast agents and neutron capture therapy"
    },
    {
        word: "Terbium",
        hint: "Tb, used in magnets and fluorescent lamps"
    },
    {
        word: "Dysprosium",
        hint: "Dy, used in magnets and nuclear control rods"
    },
    {
        word: "Holmium",
        hint: "Ho, used in magnets and laser surgery"
    },
    {
        word: "Erbium",
        hint: "Er, used in fiber optics and lasers"
    },
    {
        word: "Thulium",
        hint: "Tm, used in portable X-ray devices and lasers"
    },
    {
        word: "Ytterbium",
        hint: "Yb, used in lasers and cancer treatments"
    },
    {
        word: "Lutetium",
        hint: "Lu, used in PET scans and catalysts"
    },
    {
        word: "Hafnium",
        hint: "Hf, used in nuclear reactors and superalloys"
    },
    {
        word: "Tantalum",
        hint: "Ta, used in electronics and capacitors"
    },
    {
        word: "Tungsten",
        hint: "W, used in light bulb filaments and armor-piercing ammunition"
    },
    {
        word: "Rhenium",
        hint: "Re, used in high-temperature alloys and jet engines"
    },
    {
        word: "Osmium",
        hint: "Os, used in fountain pen tips and electrical contacts"
    },
    {
        word: "Iridium",
        hint: "Ir, used in spark plugs and electronics"
    },
    {
        word: "Platinum",
        hint: "Pt, used in catalytic converters and jewelry"
    },
    {
        word: "Gold",
        hint: "Au, used in jewelry and electronics"
    },
    {
        word: "Mercury",
        hint: "Hg, used in thermometers and fluorescent lights"
    },
    {
        word: "Thallium",
        hint: "Tl, used in rat poison and electronics"
    },
    {
        word: "Lead",
        hint: "Pb, used in batteries and solder"
    },
    {
        word: "Bismuth",
        hint: "Bi, used in medicine and cosmetics"
    },
    {
        word: "Polonium",
        hint: "Po, used in nuclear reactors and atomic batteries"
    },
    {
        word: "Astatine",
        hint: "At, used in scientific research and as a radioactive tracer"
    },
    {
        word: "Radon",
        hint: "Rn, used in medicine and as a radioactive tracer"
    },
    {
        word: "Francium",
        hint: "Fr, used in scientific research and as a radioactive tracer"
    },
    {
        word: "Radium",
        hint: "Ra, used in medicine and as a radiation source"
    },
    {
        word: "Actinium",
        hint: "Ac, used in scientific research and as a radiation source"
    },
    {
        word: "Thorium",
        hint: "Th, used in nuclear reactors and as a radiation source"
    },
    {
        word: "Protactinium",
        hint: "Pa, used in scientific research and as a radiation source"
    },
    {
        word: "Uranium",
        hint: "U, used in nuclear reactors and weapons"
    },
    {
        word: "Neptunium",
        hint: "Np, used in scientific research and nuclear reactors"
    },
    {
        word: "Plutonium",
        hint: "Pu, used in nuclear reactors and weapons"
    },
    {
        word: "Americium",
        hint: "Am, used in smoke detectors and nuclear batteries"
    },
    {
        word: "Curium",
        hint: "Cm, used in scientific research and nuclear reactors"
    },
    {
        word: "Berkelium",
        hint: "Bk, used in scientific research and nuclear reactors"
    },
    {
        word: "Californium",
        hint: "Cf, used in scientific research and nuclear reactors"
    },
    {
        word: "Einsteinium",
        hint: "Es, used in scientific research and nuclear reactors"
    },
    {
        word: "Fermium",
        hint: "Fm, used in scientific research and nuclear reactors"
    },
    {
        word: "Mendelevium",
        hint: "Md, used in scientific research and nuclear reactors"
    },
    {
        word: "Nobelium",
        hint: "No, used in scientific research and nuclear reactors"
    },
    {
        word: "Lawrencium",
        hint: "Lr, used in scientific research and nuclear reactors"
    },
    {
        word: "Rutherfordium",
        hint: "Rf, used in scientific research and nuclear reactors"
    },
    {
        word: "Dubnium",
        hint: "Db, used in scientific research and nuclear reactors"
    },
    {
        word: "Seaborgium",
        hint: "Sg, used in scientific research and nuclear reactors"
    },
    {
        word: "Bohrium",
        hint: "Bh, used in scientific research and nuclear reactors"
    },
    {
        word: "Hassium",
        hint: "Hs, used in scientific research and nuclear reactors"
    },
    {
        word: "Meitnerium",
        hint: "Mt, used in scientific research and nuclear reactors"
    },
    {
        word: "Darmstadtium",
        hint: "Ds, used in scientific research and nuclear reactors"
    },
    {
        word: "Roentgenium",
        hint: "Rg, used in scientific research and nuclear reactors"
    },
    {
        word: "Copernicium",
        hint: "Cn, used in scientific research and nuclear reactors"
    },
    {
        word: "Nihonium",
        hint: "Nh, used in scientific research and nuclear reactors"
    },
    {
        word: "Flerovium",
        hint: "Fl, used in scientific research and nuclear reactors"
    },
    {
        word: "Moscovium",
        hint: "Mc, used in scientific research and nuclear reactors"
    },
    {
        word: "Livermorium",
        hint: "Lv, used in scientific research and nuclear reactors"
    },
    {
        word: "Tennessine",
        hint: "Ts, used in scientific research and nuclear reactors"
    },
    {
        word: "Oganesson",
        hint: "Og, used in scientific research and nuclear reactors"
    }
];