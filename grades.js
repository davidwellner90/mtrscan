// Built-in grade limits. Chemistry in wt%; mechanicals in ksi / % elongation.
// IMPORTANT: Values were entered from widely published public summaries of the standards (see SOURCES below).
// None were checked line-by-line against the current licensed ASTM/AMS edition, so every limit carries
// status "unverified" until a human confirms it against the spec revision on the PO.
// Mechanical minima for 1018 and 4140 are intentionally omitted (they depend on condition/heat treatment; ASTM A29/A108 chemistry specs set none).
window.SOURCES = {
  AA: "Aluminum Association, 'International Alloy Designations and Chemical Composition Limits for Wrought Aluminum' (Teal Sheets), https://www.aluminum.org/",
  B209: "ASTM B209 Aluminum and Aluminum-Alloy Sheet and Plate (mechanical minima vary by thickness), https://www.astm.org/b0209-14.html",
  A240: "ASTM A240/A240M Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip, https://www.astm.org/a0240_a0240m-20.html",
  A29: "ASTM A29/A29M General Requirements for Steel Bars, Carbon and Alloy (grade chemistry tables), https://www.astm.org/a0029_a0029m-16.html",
  A36: "ASTM A36/A36M Carbon Structural Steel, https://www.astm.org/a0036_a0036m-19.html",
  MW: "MatWeb material property summaries (secondary source), https://www.matweb.com/"
};
const U = "unverified";
window.GRADES = {
  "6061-T6 (sheet/plate)": {src:["AA","B209","MW"], chem:{Si:[0.40,0.80],Fe:[null,0.70],Cu:[0.15,0.40],Mn:[null,0.15],Mg:[0.80,1.20],Cr:[0.04,0.35],Zn:[null,0.25],Ti:[null,0.15]},
    mech:{UTS:[42,null],YS:[35,null],EL:[10,null]}, mechNote:"B209 minima depend on thickness; values shown are a common mid-thickness case."},
  "7075-T6 (sheet)": {src:["AA","B209","MW"], chem:{Si:[null,0.40],Fe:[null,0.50],Cu:[1.20,2.00],Mn:[null,0.30],Mg:[2.10,2.90],Cr:[0.18,0.28],Zn:[5.10,6.10],Ti:[null,0.20]},
    mech:{UTS:[74,null],YS:[63,null],EL:[7,null]}, mechNote:"Minima vary strongly by thickness and temper (T6 vs T651)."},
  "304 SS (A240)": {src:["A240","MW"], chem:{C:[null,0.07],Mn:[null,2.00],P:[null,0.045],S:[null,0.030],Si:[null,0.75],Cr:[17.5,19.5],Ni:[8.0,10.5],N:[null,0.10]},
    mech:{UTS:[75,null],YS:[30,null],EL:[40,null]}},
  "316 SS (A240)": {src:["A240","MW"], chem:{C:[null,0.08],Mn:[null,2.00],P:[null,0.045],S:[null,0.030],Si:[null,0.75],Cr:[16.0,18.0],Ni:[10.0,14.0],Mo:[2.00,3.00],N:[null,0.10]},
    mech:{UTS:[75,null],YS:[30,null],EL:[40,null]}},
  "1018 (A29/A108 bar)": {src:["A29","MW"], chem:{C:[0.15,0.20],Mn:[0.60,0.90],P:[null,0.030],S:[null,0.035]}, mech:{}, mechNote:"No spec mechanical minima; check PO requirements. P/S max changed across A29 editions."},
  "4140 (A29 bar)": {src:["A29","MW"], chem:{C:[0.38,0.43],Mn:[0.75,1.00],P:[null,0.035],S:[null,0.040],Si:[0.15,0.35],Cr:[0.80,1.10],Mo:[0.15,0.25]}, mech:{}, mechNote:"Mechanicals depend on heat treatment; check PO requirements."},
  "A36 (plate ≤3/4 in)": {src:["A36","MW"], chem:{C:[null,0.25],P:[null,0.030],S:[null,0.030],Si:[null,0.40]},
    mech:{UTS:[58,80],YS:[36,null],EL:[23,null]}, mechNote:"Elongation % is for a 2 in gauge (8 in gauge differs). P/S max differ between older and newer editions."}
};
for (const g of Object.values(window.GRADES)) g.status = U;
