/*
 * Nekurama / Babai
 * Team Capability & Ownership Assessment
 *
 * This file is intended to be copied into Google Apps Script.
 *
 * Run createNekuramaTeamAssessment() once.
 */

function createNekuramaTeamAssessment() {
  var form = FormApp.create(
    'Nekurama / Babai - Team Capability & Ownership Assessment'
  );

  form.setDescription(
    'We are starting Babai development from scratch and need to divide and conquer effectively.\n\n' +
    'This form helps us understand everyone\'s strengths, experience, interests, availability, and ownership preferences so we can assign clear responsibilities across technology, product, business, customer work, and operations.\n\n' +
    'This is NOT a performance appraisal, interview, or exam.\n\n' +
    'Please answer honestly. There are no good or bad answers. A low score simply tells us where we should pair people, provide support, or avoid assigning sole ownership.\n\n' +
    'The goal is not to make everyone do everything.\n\n' +
    'The goal is CLEAR OWNERSHIP + STRONG COLLABORATION + MINIMAL OVERLAP + NO CRITICAL AREA WITHOUT AN OWNER.\n\n' +
    'Please answer based on what you can realistically do TODAY, not only what you hope to learn eventually.\n\n' +
    'Estimated completion time: 15-20 minutes.'
  );

  form.setConfirmationMessage(
    'Thank you. Your responses will be used to build the Nekurama/Babai team capability and ownership matrix.'
  );

  form.setProgressBar(true);
  form.setCollectEmail(true);

  addSection(form, 'SECTION 1 - Basic Information');

  addText(form, 'Full name', true);

  addMultipleChoice(
    form,
    'Current role / position in Nekurama',
    [
      'Founder / Director',
      'Core full-time team member',
      'Core part-time team member',
      'Extended part-time team member',
      'Advisor / specialist',
      'Other'
    ],
    true
  );

  addParagraph(
    form,
    'Which role would you ideally like to play in Nekurama over the next 6 months?',
    true
  );

  addSection(form, 'SECTION 2 - Technical Capability');

  addGrid(
    form,
    'Rate your CURRENT technical capability for each area.',
    [
      'C# / .NET',
      'Python',
      'JavaScript / TypeScript',
      'React',
      'Angular',
      'Node.js',
      'REST APIs',
      'PostgreSQL / SQL',
      'Redis / caching',
      'Docker',
      'Linux',
      'AWS',
      'Azure',
      'Google Cloud / GCP',
      'CI/CD',
      'Git / GitHub',
      'System architecture',
      'Distributed systems',
      'Database design',
      'API design',
      'Testing / automated testing',
      'Security',
      'Observability / logging / monitoring',
      'UI/UX',
      'Figma / product design',
      'Performance optimization',
      'Networking',
      'Infrastructure / DevOps'
    ],
    [
      '0 - No experience',
      '1 - Basic exposure / learning',
      '2 - Can contribute with some guidance',
      '3 - Can work independently',
      '4 - Can independently own production work / mentor others'
    ]
  );

  addSection(form, 'SECTION 3 - AI / LLM Capability');

  addGrid(
    form,
    'Rate your CURRENT practical experience with AI/ML and LLM technologies.',
    [
      'OpenAI APIs',
      'Anthropic APIs',
      'Gemini APIs',
      'AWS Bedrock',
      'Local / open-source LLMs',
      'Prompt engineering',
      'Structured outputs / function calling',
      'Tool calling',
      'AI agents',
      'RAG',
      'Embeddings',
      'Vector databases',
      'Semantic search',
      'Hybrid search',
      'LLM evaluation / evals',
      'AI observability',
      'MCP',
      'Speech / voice AI',
      'Vision / multimodal AI',
      'Fine-tuning',
      'ML / deep learning',
      'AI application architecture'
    ],
    [
      '0 - No experience',
      '1 - Basic exposure',
      '2 - Can contribute with guidance',
      '3 - Can implement independently',
      '4 - Can independently design/own production systems'
    ]
  );

  addCheckbox(
    form,
    'What AI/LLM technologies have you actually built something with?',
    [
      'OpenAI',
      'Anthropic',
      'Gemini',
      'AWS Bedrock',
      'Local LLMs',
      'RAG',
      'Vector databases',
      'Agents',
      'Tool calling',
      'MCP',
      'Speech/voice',
      'Vision/multimodal',
      'Fine-tuning',
      'Evaluation systems',
      'None',
      'Other'
    ],
    true
  );

  addParagraph(
    form,
    'Briefly describe the most meaningful AI/LLM system you have personally built.',
    true
  );

  addSection(form, 'SECTION 4 - What Can You Actually Own?');

  addCheckbox(
    form,
    'Which areas could you independently take from "nothing exists" through design, implementation, testing, deployment, and maintenance?',
    [
      'Backend/API',
      'Frontend',
      'Full-stack feature',
      'AI/LLM integration',
      'RAG/search',
      'AI agents/tool calling',
      'Database/data layer',
      'Cloud infrastructure',
      'DevOps/CI/CD',
      'Security',
      'Testing/QA',
      'UI/UX',
      'Product requirements',
      'Technical architecture',
      'Customer integration',
      'Analytics/observability',
      'Documentation',
      'Business operations',
      'Customer onboarding',
      'Other'
    ],
    true
  );

  addParagraph(
    form,
    'For the areas you selected above, describe 1-5 things you could realistically own end-to-end.',
    true
  );

  addParagraph(
    form,
    'What is the largest or most complex system/project you have personally delivered? Include what it did, your personal responsibility, technologies used, approximate scale/complexity, and whether you designed, implemented, deployed, and maintained it.',
    true
  );

  addSection(form, 'SECTION 5 - Preferred Work');

  addCheckbox(
    form,
    'Which areas would you MOST LIKE to spend your time on in Nekurama? Select up to 5.',
    [
      'Backend engineering',
      'Frontend engineering',
      'Full-stack development',
      'AI/ML',
      'LLM application engineering',
      'AI agents',
      'RAG/search',
      'Cloud/DevOps',
      'Architecture',
      'Database/data engineering',
      'Security',
      'Testing/QA',
      'UI/UX',
      'Product management',
      'Requirements analysis',
      'Customer discovery',
      'Customer onboarding',
      'Customer support',
      'Sales',
      'Business development',
      'Partnerships',
      'Marketing',
      'Content',
      'Finance',
      'Legal/compliance',
      'Hiring/team building',
      'Operations',
      'Startup/government programs',
      'Research',
      'Documentation',
      'Project/program management',
      'Other'
    ],
    true
  );

  addParagraph(
    form,
    'What are the 3 areas you would be happiest to own?',
    true
  );

  addParagraph(
    form,
    'What are the areas you would prefer NOT to own?',
    true
  );

  addParagraph(
    form,
    'Are there any responsibilities you strongly dislike or do not want assigned to you?',
    false
  );

  addSection(form, 'SECTION 6 - Product Thinking & End-to-End Ownership');

  addScale(
    form,
    'How comfortable are you independently taking a requirement and turning it into a working production feature?',
    0,
    4,
    'Need detailed direction',
    'Can independently handle the full lifecycle',
    true
  );

  addCheckbox(
    form,
    'Which parts of the product lifecycle can you independently handle?',
    [
      'Understand customer/problem',
      'Convert problem into requirements',
      'Define acceptance criteria',
      'Design UX',
      'Design API',
      'Design database/data model',
      'Choose technical approach',
      'Implement',
      'Write tests',
      'Debug',
      'Deploy',
      'Monitor',
      'Document',
      'Support after release',
      'None independently',
      'Other'
    ],
    true
  );

  addParagraph(
    form,
    'Describe one feature/product/project where you personally handled most or all of this lifecycle.',
    true
  );

  addSection(form, 'SECTION 7 - Customer & Business Capability');

  addGrid(
    form,
    'Rate your current ability and comfort level.',
    [
      'Talking to customers',
      'Understanding customer problems',
      'Requirements gathering',
      'Product demonstrations',
      'Technical presentations',
      'Handling objections',
      'Sales',
      'Negotiation',
      'Customer onboarding',
      'Customer support',
      'Customer success',
      'Business development',
      'Partnerships',
      'Marketing',
      'Writing/content',
      'Finance/basic accounting',
      'Legal/compliance coordination',
      'Hiring/recruitment',
      'Vendor management',
      'Startup/government programs',
      'Company operations',
      'Project/program management'
    ],
    [
      '0 - No experience',
      '1 - Limited',
      '2 - Can contribute',
      '3 - Can independently handle',
      '4 - Can lead / own'
    ]
  );

  addCheckbox(
    form,
    'Which business/customer activities would you be willing to personally own?',
    [
      'Customer discovery',
      'Sales',
      'Product demos',
      'Partnerships',
      'Customer onboarding',
      'Customer success',
      'Customer support',
      'Marketing',
      'Content',
      'Finance',
      'Legal/compliance',
      'Hiring',
      'Vendor management',
      'Startup benefits/programs',
      'General operations',
      'None',
      'Other'
    ],
    true
  );

  addMultipleChoice(
    form,
    'Are you comfortable joining a customer call if needed?',
    [
      'Yes, very comfortable',
      'Yes, with some preparation',
      'Maybe, depending on the situation',
      'Prefer not to',
      'No'
    ],
    true
  );

  addSection(form, 'SECTION 8 - Real-World Experience');

  addParagraph(
    form,
    'List up to 3 projects, products, jobs, businesses, or other experiences that are most relevant to what we are building. For each, briefly mention what it was, your role, what you personally delivered, technologies/skills involved, and scale/impact if relevant.',
    true
  );

  addParagraph(
    form,
    'What is the strongest capability you believe you bring to Nekurama?',
    true
  );

  addParagraph(
    form,
    'What is your biggest current weakness or capability gap that the team should know about?',
    true
  );

  addParagraph(
    form,
    'What are up to 3 things you most want to learn or become significantly better at while working on Babai?',
    true
  );

  addSection(form, 'SECTION 9 - Ownership & Working Style');

  addScale(
    form,
    'How much do you WANT to own a subsystem or business area end-to-end?',
    0,
    4,
    'Prefer assigned tasks',
    'I want clear ownership and accountability',
    true
  );

  addCheckbox(
    form,
    'What kind of work environment brings out your best performance?',
    [
      'Clear tasks/specifications',
      'Problem ownership',
      'Architecture/design',
      'Implementation',
      'Experimentation/prototyping',
      'Debugging',
      'Performance optimization',
      'Polishing/refactoring',
      'Coordinating people',
      'Customer interaction',
      'Independent work',
      'Pair programming',
      'Team collaboration',
      'Research',
      'Fast-changing work',
      'Structured/planned work',
      'Other'
    ],
    true
  );

  addParagraph(
    form,
    'When you encounter a problem that is outside your current expertise, what do you normally do?',
    true
  );

  addMultipleChoice(
    form,
    'Which would you prefer?',
    [
      'Give me a clearly defined task and acceptance criteria',
      'Give me a problem and let me figure out the solution',
      'Give me ownership of an area and let me decide how to solve it',
      'Depends on the situation'
    ],
    true
  );

  addSection(form, 'SECTION 10 - Availability');

  addMultipleChoice(
    form,
    'How many hours per week can you realistically commit to Nekurama through December 31, 2026?',
    [
      '<5 hours',
      '5-10 hours',
      '10-15 hours',
      '15-20 hours',
      '20-30 hours',
      '30-40 hours',
      '40+ hours'
    ],
    true
  );

  addText(form, 'Typical weekday availability', true);
  addText(form, 'Typical weekend availability', true);

  addParagraph(
    form,
    'Are there any periods between now and December 31 when your availability will significantly change?',
    false
  );

  addMultipleChoice(
    form,
    'Can the availability you have stated above be treated as a reliable commitment?',
    [
      'Yes',
      'Mostly yes, with occasional exceptions',
      'No, it may change significantly',
      'Unsure'
    ],
    true
  );

  addParagraph(
    form,
    'Are there specific times when you can reliably attend team meetings?',
    false
  );

  addSection(form, 'SECTION 11 - Ownership Preference');

  addParagraph(
    form,
    'If you could choose one major area of Babai/Nekurama to own end-to-end, what would it be?',
    true
  );

  addParagraph(
    form,
    'What second area could you own if needed?',
    false
  );

  addParagraph(
    form,
    'What area should probably NOT be assigned to you as the primary owner?',
    true
  );

  addMultipleChoice(
    form,
    'Would you be comfortable being accountable for an area even if other team members implement parts of it?',
    [
      'Yes',
      'Yes, if responsibilities are clearly defined',
      'Maybe',
      'No'
    ],
    true
  );

  addSection(form, 'SECTION 12 - Team & Product Thinking');

  addParagraph(
    form,
    'What do you think Nekurama/Babai is most likely to get wrong?',
    true
  );

  addParagraph(
    form,
    'What is one thing you think we should absolutely NOT do while building Babai?',
    true
  );

  addParagraph(
    form,
    'What is one thing you think we should prioritize above everything else to reach our first customer?',
    true
  );

  addParagraph(
    form,
    'Is there anything else about your skills, experience, interests, availability, or circumstances that you think the founders should know when assigning responsibilities?',
    false
  );

  addSection(form, 'SECTION 13 - Founder / Director Responsibilities');

  addCheckbox(
    form,
    'If you are a Founder / Director: Which business areas are you personally willing to OWN through December 31, 2026? If you are not a Founder / Director, select "Not applicable".',
    [
      'Customer acquisition',
      'Sales',
      'Partnerships',
      'Product strategy',
      'Business strategy',
      'Finance',
      'Legal/compliance',
      'Hiring',
      'Operations',
      'Customer success',
      'Marketing',
      'Startup/government programs',
      'Technical strategy',
      'Not applicable',
      'Other'
    ],
    true
  );

  addParagraph(
    form,
    'For the areas you selected, what specific outcomes are you willing to be accountable for by December 31, 2026? If not applicable, enter "N/A".',
    true
  );

  addSection(form, 'SECTION 14 - Part-Time / Extended Team');

  addMultipleChoice(
    form,
    'If you are a part-time or extended team member: Is your stated weekly availability a reliable commitment through December 31, 2026? If not applicable, select N/A.',
    [
      'Yes',
      'Mostly yes',
      'It may change',
      'No',
      'N/A'
    ],
    true
  );

  addMultipleChoice(
    form,
    'If your availability decreases, how much advance notice can you normally provide?',
    [
      '1 week',
      '2 weeks',
      '1 month',
      'More than 1 month',
      'Depends on circumstances',
      'N/A'
    ],
    true
  );

  addCheckbox(
    form,
    'What type of work is best suited to your availability?',
    [
      'Clearly scoped implementation tasks',
      'Feature ownership',
      'Specialist technical work',
      'Research',
      'Testing/QA',
      'Documentation',
      'Customer work',
      'Business work',
      'Architecture/design',
      'Other',
      'N/A'
    ],
    true
  );

  addSection(form, 'Final');

  addParagraph(
    form,
    'Anything else you want us to know before we assign roles and ownership?',
    false
  );

  var spreadsheet = SpreadsheetApp.create(
    'Nekurama - Babai Team Capability Responses'
  );

  form.setDestination(
    FormApp.DestinationType.SPREADSHEET,
    spreadsheet.getId()
  );

  Logger.log('==============================================');
  Logger.log('NEKURAMA / BABAI TEAM ASSESSMENT CREATED');
  Logger.log('==============================================');
  Logger.log('');
  Logger.log('FORM EDIT URL:');
  Logger.log(form.getEditUrl());
  Logger.log('');
  Logger.log('FORM RESPONDER URL:');
  Logger.log(form.getPublishedUrl());
  Logger.log('');
  Logger.log('RESPONSE SPREADSHEET:');
  Logger.log(spreadsheet.getUrl());
  Logger.log('');
  Logger.log('==============================================');
}

function addSection(form, title) {
  form.addPageBreakItem().setTitle(title);
}

function addText(form, title, required) {
  form.addTextItem().setTitle(title).setRequired(required);
}

function addParagraph(form, title, required) {
  form.addParagraphTextItem().setTitle(title).setRequired(required);
}

function addCheckbox(form, title, choices, required) {
  form.addCheckboxItem()
    .setTitle(title)
    .setChoiceValues(choices)
    .setRequired(required);
}

function addMultipleChoice(form, title, choices, required) {
  form.addMultipleChoiceItem()
    .setTitle(title)
    .setChoiceValues(choices)
    .setRequired(required);
}

function addGrid(form, title, rows, columns) {
  form.addGridItem()
    .setTitle(title)
    .setRows(rows)
    .setColumns(columns)
    .setRequired(true);
}

function addScale(form, title, lower, upper, lowerLabel, upperLabel, required) {
  form.addScaleItem()
    .setTitle(title)
    .setBounds(lower, upper)
    .setLabels(lowerLabel, upperLabel)
    .setRequired(required);
}
