const knifeSkillsData = [
  {
    id: "knife-001",
    skillName: "The Claw Grip",
    difficulty: "Easy",
    category: "Fundamentals",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GILe-S8FTn1WoD9P7BNuLZ5ijYlVK12c7NR1QjzqlJxWiEJAvsygxmA&s=10",
    description:
      "The essential foundational safety hand position and knife grip every cook must master to cut fast and avoid injury.",
    targetDimensions: "N/A",
    recommendedTool: "8-inch Chef's Knife & Wood Cutting Board",
    proTip:
      "Pinch the heel of the blade with your thumb and index finger, wrapping the other three fingers around the handle. Never put your index finger on top of the spine.",
    instructions: [
      "Pinch the base of the blade (where it meets the handle) between your thumb and the side of your index finger.",
      "Wrap your remaining three fingers securely around the knife handle.",
      "Form a 'claw' with your non-knife hand by curling your fingertips inward like a bear claw.",
      "Rest the flat side of the knife blade against the knuckles of your claw hand to guide the blade while protecting your fingertips.",
    ],
  },
  {
    id: "knife-002",
    skillName: "Julienne Cut",
    difficulty: "Medium",
    category: "Precision Cuts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOY4CSM5JWkquwXV49_hTwa1VmyBtzKUXV-aVG0rCry-9vkUivxRujL5Rh&s=10",
    description:
      "A thin matchstick cut commonly used for carrots, bell peppers, and cucumbers in stir-fries and salads.",
    targetDimensions: "1/8 in × 1/8 in × 2 in (3mm × 3mm × 5cm)",
    recommendedTool: "8-inch Chef's Knife or Santoku Knife",
    proTip:
      "Slice a thin strip off one side of round vegetables first to create a flat, stable base that won't roll around on your cutting board.",
    instructions: [
      "Peel the vegetable and trim both ends.",
      "Square off the edges by trimming the four sides to form a smooth rectangular block.",
      "Cut the block crosswise into 2-inch long segments.",
      "Slice each segment lengthwise into 1/8-inch thick planks.",
      "Stack 2 to 3 planks at a time and slice lengthwise into 1/8-inch matchsticks.",
    ],
  },
  {
    id: "knife-003",
    skillName: "Fine Brunoise Cut",
    difficulty: "Hard",
    category: "Precision Cuts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEIQUYgF03WXJiTBAHmX0QjIo3NB-TSy3_yfJj_LXliOKKFcosIIufzg&s=10",
    description:
      "The smallest precision dice, essential for refined garnishes, consommé, and aromatic bases.",
    targetDimensions: "1/8 in × 1/8 in × 1/8 in (3mm × 3mm × 3mm)",
    recommendedTool: "Sharp Chef's Knife or Santoku",
    proTip:
      "Your knife must be razor-sharp; a dull knife will crush the tiny matchsticks instead of slicing cleanly through them.",
    instructions: [
      "Prepare a precise Julienne cut (1/8-inch matchsticks) following standard julienne technique.",
      "Gather the julienned strips tightly together in a parallel bundle.",
      "Anchor the tips with your non-dominant hand using a firm claw grip.",
      "Slice crosswise across the matchsticks at 1/8-inch intervals to produce tiny, uniform cubes.",
    ],
  },
  {
    id: "knife-004",
    skillName: "Batonnet Cut",
    difficulty: "Easy",
    category: "Precision Cuts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8nbRe_z6Lu4ORHiMSt6q-Iwz7AVRtK6jl3Ef3msg5P2Xe2ZctsfVLpsK&s=10",
    description:
      "A stick cut thicker than a julienne, used for French fries, veggie platters, and as the starting point for a medium dice.",
    targetDimensions: "1/4 in × 1/4 in × 2 in (6mm × 6mm × 5cm)",
    recommendedTool: "8-inch Chef's Knife",
    proTip:
      "Keep the flat sides trimmed evenly so your stick cuts are uniform square prisms.",
    instructions: [
      "Peel the vegetable and trim off round ends to form a clean rectangular block.",
      "Slice the block lengthwise into 1/4-inch thick planks.",
      "Stack the planks together flat against the board.",
      "Slice lengthwise at 1/4-inch intervals to create long square sticks.",
    ],
  },
  {
    id: "knife-005",
    skillName: "Medium Dice Cut",
    difficulty: "Easy",
    category: "Precision Cuts",
    image:
      "https://www.webstaurantstore.com/uploads/blog/2023/5/mediumdice.jpg",
    description:
      "The standard cube cut used for hearty soups, stews, root vegetables, and braises.",
    targetDimensions: "1/2 in × 1/2 in × 1/2 in (1.2cm × 1.2cm × 1.2cm)",
    recommendedTool: "8-inch Chef's Knife",
    proTip:
      "Maintain steady, rhythmic rocking motions with the front half of the knife blade staying in contact with the cutting board.",
    instructions: [
      "Trim the vegetable into a squared block.",
      "Slice the block into 1/2-inch thick planks.",
      "Slice the planks lengthwise into 1/2-inch wide sticks (thick batonnet).",
      "Gather the sticks together and slice crosswise at 1/2-inch intervals to form uniform cubes.",
    ],
  },
  {
    id: "knife-006",
    skillName: "Chiffonade Cut",
    difficulty: "Easy",
    category: "Herbs & Greens",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9aGsoiIdX9IoBru-krmkm3AvE2pIgt6-yJeXuZbXQSq0vAuQSmr8sB8&s=10",
    description:
      "A slicing technique used to cut leafy greens and herbs into fine, delicate ribbons for garnishing.",
    targetDimensions: "Thin ribbons (1/16 in / 1.5mm wide)",
    recommendedTool: "Chef's Knife or Santoku",
    proTip:
      "Do not chop back and forth over chiffonade ribbons; slice through once in a smooth forward stroke to avoid bruising leaves.",
    instructions: [
      "Wash and thoroughly dry flat-leaf herbs (like basil, mint, or sage) or greens (spinach, kale).",
      "Stack 5 to 10 leaves flat on top of each other, starting with the largest leaf on the bottom.",
      "Roll the stack up tightly lengthwise like a small cigar.",
      "Slice crosswise through the roll at very thin intervals to create feathery ribbons.",
    ],
  },
  {
    id: "knife-007",
    skillName: "Efficient Onion Dicing",
    difficulty: "Easy",
    category: "Prep Techniques",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7p9N-IVKbhCyNfuy9rBMFoBikjz0RjtCEzod1MZ8xgEIVvzNUXkIGOI7&s=10",
    description:
      "The standard culinary school technique for dicing onions quickly without making them fall apart.",
    targetDimensions: "1/4 in to 1/2 in dice",
    recommendedTool: "8-inch Chef's Knife",
    proTip:
      "Leave the root end completely intact during the prep—it holds the onion layers together while you make horizontal and vertical cuts.",
    instructions: [
      "Cut the onion in half from stem to root, leaving the root intact on both halves.",
      "Peel off the papery outer skin.",
      "Place flat-side down on the cutting board. Make 2 to 3 horizontal cuts toward the root without cutting through it.",
      "Make vertical cuts from top to bottom along the natural grain of the onion toward the root.",
      "Slice crosswise down through the onion to produce clean, even dice.",
    ],
  },
  {
    id: "knife-008",
    skillName: "Garlic Mincing & Paste Technique",
    difficulty: "Medium",
    category: "Prep Techniques",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXOgNNyffKHt6ZgVx-_a_tZaBnD6GOMY3zANDVcct0KIaIfwg9JPe6IE&s=10",
    description:
      "Turning whole garlic cloves into a fine mince or smooth garlic paste using a knife and coarse salt.",
    targetDimensions: "Fine paste / Micro-mince",
    recommendedTool: "Large Heavy Chef's Knife",
    proTip:
      "Coarse kosher salt acts as an abrasive tool when dragging the flat of the knife blade over crushed garlic.",
    instructions: [
      "Place the flat side of your chef's knife over a garlic clove and smash it gently with the heel of your hand to loosen the skin.",
      "Peel skin, trim root end, and coarsely mince the garlic.",
      "Sprinkle a pinch of coarse kosher salt over the minced garlic.",
      "Angle your knife blade at roughly 30 degrees and repeatedly smear/scrape the garlic back and forth across the board until a smooth paste forms.",
    ],
  },
  {
    id: "knife-009",
    skillName: "Rondelle Cut",
    difficulty: "Easy",
    category: "Basic Cuts",
    image:
      "https://img.buzzfeed.com/buzzfeed-static/static/2019-01/4/10/asset/buzzfeed-prod-web-01/sub-buzz-15984-1546615417-1.jpg?downsize=900:*&output-format=auto&output-quality=auto",
    description:
      "Simple, uniform round coin cuts for cylindrical vegetables like carrots, cucumbers, zucchini, and leeks.",
    targetDimensions: "1/8 in to 1/4 in thick rounds",
    recommendedTool: "Chef's Knife, Santoku, or Paring Knife",
    proTip:
      "Keep your knife tip anchored to the board and rock the heel up and down as you move the vegetable forward.",
    instructions: [
      "Trim both ends of the cylindrical vegetable.",
      "Hold the vegetable with your non-dominant hand in a secure claw grip.",
      "Slice straight across the vegetable perpendicular to your cutting board at consistent thickness increments.",
    ],
  },
  {
    id: "knife-010",
    skillName: "Tourné Cut",
    difficulty: "Hard",
    category: "Classical French Cuts",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=1200",
    description:
      "A classical French technique shaping root vegetables into uniform 7-sided football shapes for high-end presentation.",
    targetDimensions: "2 in long with 7 equal facets",
    recommendedTool: "Curved Tourné / Bird's Beak Paring Knife",
    proTip:
      "Turn the vegetable in your hand after every cut rather than trying to move the knife around the vegetable.",
    instructions: [
      "Cut the root vegetable (potatoes, carrots, turnips) into 2-inch long blocks.",
      "Hold a block in your non-dominant hand.",
      "Using a bird's beak paring knife, carve downward in a curved sweeping motion from top to bottom.",
      "Rotate the vegetable slightly and repeat until you have carved 7 smooth, equal-sized outer facets around an oblong barrel.",
    ],
  },
  {
    id: "knife-011",
    skillName: "Paysanne Cut",
    difficulty: "Medium",
    category: "Precision Cuts",
    image:
      "https://www.tastingtable.com/img/gallery/11-types-of-knife-cuts-everyone-should-know/paysanne-cut-1698860908.jpg",
    description:
      "Flat, thin tile-like shapes designed to match the shape of the vegetable; essential for traditional country soups.",
    targetDimensions: "1/2 in × 1/2 in × 1/16 in (1.2cm × 1.2cm × 1.5mm)",
    recommendedTool: "Chef's Knife or Santoku",
    proTip:
      "This cut preserves the natural round or square cross-section of the vegetable while keeping the slice ultra-thin.",
    instructions: [
      "Start by preparing a thick Batonnet stick (1/2 in × 1/2 in).",
      "Align the sticks side-by-side flat against the cutting board.",
      "Slice crosswise very thinly at 1/16-inch intervals to create thin, flat square tile pieces.",
    ],
  },
  {
    id: "knife-012",
    skillName: "Citrus Supreme",
    difficulty: "Medium",
    category: "Fruit Prep",
    image:
      "https://images.ctfassets.net/lufu0clouua1/nMF6C1xnri2UooIYoCu4o/b056ca66b1f38372a6e7c28ca7f0630a/CITRUS_STEPS_cut-membrane.jpg",
    description:
      "Removing skin, pith, and membrane from citrus fruit to extract clean, juicy fruit segments for salads and desserts.",
    targetDimensions: "Membrane-free whole segments",
    recommendedTool: "3.5-inch Paring Knife or Flexible Utility Knife",
    proTip:
      "Slice away enough peel that no white pith remains visible on the fruit before segmenting.",
    instructions: [
      "Slice off the top stem end and bottom base of the citrus fruit so it sits flat on your board.",
      "Follow the curve of the fruit from top to bottom with your knife to slice off peel and bitter white pith.",
      "Hold the peeled citrus in your non-dominant hand over a bowl.",
      "Carefully slice inward along both sides of each segment membrane to pop out membrane-free fruit segments.",
    ],
  },
];

export default knifeSkillsData;
