
import { Lesson, Unit } from './types';

export const PYTHON_LESSON_1: Lesson = {
  id: "python-basics-1",
  title: "Python Basics: Variables and Data Types",
  track: "beginner",
  items: [
    {
      id: "concept-1",
      type: "concept",
      prompt: "Welcome to Python!",
      content: "Python is a popular, high-level programming language known for its simple, readable syntax. It's a great language for beginners!",
      difficulty: 1,
    },
    {
      id: "concept-2",
      type: "concept",
      prompt: "What are variables?",
      content: "Think of variables as containers for storing data values. In Python, you create a variable by assigning a value to it using the equals sign (=).",
      code: "# This creates a variable named 'x' and gives it the value 5\nx = 5\n\n# This creates a variable for text (a 'string')\ngreeting = 'Hello, Sensei!'",
      difficulty: 1,
    },
    {
      id: "item-1",
      type: "mcq",
      prompt: "Which of the following is the correct way to declare a variable in Python?",
      choices: ["let x = 5", "int x = 5", "x = 5", "var x = 5"],
      correct: "x = 5",
      explanation: "Python is dynamically typed, so you don't need to specify the type of the variable. You just assign a value to a name.",
      difficulty: 1,
    },
    {
      id: "item-2",
      type: "mcq",
      prompt: "What is the data type of the result of `3 / 2`?",
      choices: ["int", "float", "string", "boolean"],
      correct: "float",
      explanation: "In Python 3, standard division `/` always results in a float.",
      difficulty: 1,
    },
    {
      id: "item-3",
      type: "fill",
      prompt: "Fill in the blank to print 'Hello, World!'.",
      code: "____('Hello, World!')",
      correct: ["print"],
      explanation: "The `print()` function is used to display output to the console.",
      difficulty: 1,
    },
    {
      id: "item-4",
      type: "debug",
      prompt: "What is the error in this code?",
      code: "name = 'Alice'\nprint('Hello, ' + name)",
      choices: ["Syntax Error", "Type Error", "Name Error", "There is no error"],
      correct: "There is no error",
      explanation: "This code correctly concatenates and prints a string. It will run without errors.",
      difficulty: 2,
    },
    {
        id: "item-5",
        type: "mcq",
        prompt: "What will be the output of `print(type('5'))`?",
        choices: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "Error"],
        correct: "<class 'str'>",
        explanation: "Anything enclosed in quotes is a string in Python, even if it looks like a number.",
        difficulty: 2,
    },
    {
        id: "item-6",
        type: "fill",
        prompt: "Complete the code to create a list of numbers from 1 to 3.",
        code: "my_list = [1, _, 3]",
        correct: ["2"],
        explanation: "Lists in Python are created with square brackets `[]` and items are separated by commas.",
        difficulty: 2,
    },
    {
        id: "item-7",
        type: "debug",
        prompt: "Identify the bug in the following code snippet.",
        code: "x = 10\nif x == '10':\n  print('x is 10')",
        choices: ["Wrong variable name", "Incorrect comparison", "Missing colon", "No bug"],
        correct: "Incorrect comparison",
        explanation: "The code compares an integer `x` with a string `'10'`. They are not equal. The comparison should be `x == 10`.",
        difficulty: 3,
    },
    {
        id: "item-8",
        type: "mcq",
        prompt: "How do you get the length of a string `s`?",
        choices: ["s.length()", "len(s)", "s.size()", "length(s)"],
        correct: "len(s)",
        explanation: "The built-in `len()` function returns the number of items in an object, including characters in a string.",
        difficulty: 3,
    },
  ],
};

export const PYTHON_LESSON_2: Lesson = {
  id: "python-basics-2",
  title: "Python Basics: Conditionals",
  track: "beginner",
  items: [
    {
      id: "concept-1",
      type: "concept",
      prompt: "Making Decisions with `if`",
      content: "Conditional statements allow your code to make decisions. The `if` statement runs a block of code only if a certain condition is true.",
      code: "temperature = 30\n\nif temperature > 25:\n  print('It is a hot day!')",
      difficulty: 2,
    },
    {
      id: "concept-2",
      type: "concept",
      prompt: "Handling Other Cases with `else`",
      content: "The `else` statement can be used after an `if` statement to run code when the `if` condition is false.",
      code: "age = 16\n\nif age >= 18:\n  print('You can vote.')\nelse:\n  print('You are not old enough to vote yet.')",
      difficulty: 2,
    },
    {
      id: 'item-1',
      type: 'mcq',
      prompt: 'What keyword is used to handle the case where the `if` condition is false?',
      choices: ['otherwise', 'except', 'else', 'next'],
      correct: 'else',
      explanation: 'The `else` keyword catches cases that are not covered by the preceding `if` or `elif` conditions.',
      difficulty: 2,
    },
    {
      id: 'item-2',
      type: 'fill',
      prompt: 'Fill in the blank to check if `x` is equal to 10.',
      code: 'if x __ 10:\n  print("x is 10")',
      correct: ['=='],
      explanation: 'In Python, `==` is the comparison operator used to check for equality.',
      difficulty: 3,
    },
  ],
};

export const PYTHON_LESSON_3: Lesson = {
  id: "python-basics-3",
  title: "Python Basics: Combining Concepts",
  track: "beginner",
  items: [
    {
      id: "concept-1",
      type: "concept",
      prompt: "Using Variables in Conditions",
      content: "You can use variables directly in your `if` statements. The code will check the value of the variable at that moment to make a decision.",
      code: "score = 85\n\nif score > 50:\n  print('Congratulations, you passed!')",
      difficulty: 3,
    },
    {
      id: "item-1",
      type: "mcq",
      prompt: "What will be the output of this code?",
      code: "level = 5\nif level > 3:\n  print('High level')\nelse:\n  print('Low level')",
      choices: ["High level", "Low level", "Error", "Nothing"],
      correct: "High level",
      explanation: "Since the variable `level` holds the value 5, which is greater than 3, the condition is true and 'High level' is printed.",
      difficulty: 3,
    },
    {
      id: "concept-2",
      type: "concept",
      prompt: "Multiple Checks with `elif`",
      content: "What if you have more than two possibilities? The `elif` (else if) keyword lets you check for multiple conditions in a sequence.",
      code: "color = 'blue'\n\nif color == 'red':\n  print('Stop!')\nelif color == 'green':\n  print('Go!')\nelse:\n  print('Wait.')",
      difficulty: 3,
    },
    {
      id: 'item-2',
      type: 'fill',
      prompt: "Fill in the blank to check for a 'warning' status.",
      code: 'status = "warning"\nif status == "ok":\n  print("All good.")\n____ status == "warning":\n  print("Check system.")',
      correct: ['elif'],
      explanation: '`elif` is used to check another condition if the first `if` condition was false.',
      difficulty: 3,
    },
    {
      id: 'item-3',
      type: 'debug',
      prompt: 'This code has a logical error. If `points` is 120, what is printed?',
      code: 'points = 120\nmessage = "Beginner"\nif points > 100:\n  message = "Expert"\nif points > 40:\n  message = "Intermediate"\nprint(message)',
      choices: ["Expert", "Intermediate", "Beginner", "Error"],
      correct: "Intermediate",
      explanation: "The `if` statements are checked independently. Since 120 is greater than 100, `message` becomes 'Expert'. Then, since 120 is also greater than 40, `message` is overwritten to 'Intermediate'. Using `elif` for the second check would fix this logic.",
      difficulty: 4,
    },
  ],
};


export const PYTHON_BASICS_UNIT: Unit = {
    id: "python-basics",
    title: "Python Basics Unit",
    description: "Start your journey into the world of Python programming. Learn the fundamental concepts from variables to control structures.",
    lessons: [
        { id: "python-basics-1", title: "Variables and Data Types", xpRequired: 0, totalItems: PYTHON_LESSON_1.items.length },
        { id: "python-basics-2", title: "Conditionals", xpRequired: 100, totalItems: PYTHON_LESSON_2.items.length },
        { id: "python-basics-3", title: "Combining Concepts", xpRequired: 200, totalItems: PYTHON_LESSON_3.items.length },
    ]
};

export const MOCK_LEADERBOARD = [
    { rank: 1, user: 'CodeWizard', xp: 9850 },
    { rank: 2, user: 'PyPioneer', xp: 9200 },
    { rank: 3, user: 'LogicLord', xp: 8750 },
    { rank: 4, user: 'SyntaxSlayer', xp: 8100 },
    { rank: 5, user: 'DebugDemon', xp: 7600 },
    { rank: 6, user: 'AlgoAce', xp: 7150 },
    { rank: 7, user: 'ScriptSavvy', xp: 6800 },
    { rank: 8, user: 'DataDynamo', xp: 6300 },
    { rank: 9, user: 'BitByte', xp: 5900 },
    { rank: 10, user: 'LoopLegend', xp: 5500 },
];

export const MOCK_XP_DATA = [
    { day: 'Mon', xp: 50 },
    { day: 'Tue', xp: 75 },
    { day: 'Wed', xp: 120 },
    { day: 'Thu', xp: 90 },
    { day: 'Fri', xp: 150 },
    { day: 'Sat', xp: 200 },
    { day: 'Sun', xp: 110 },
];
