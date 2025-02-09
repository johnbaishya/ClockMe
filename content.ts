type Level = {
        index:number,
        name:string,
        description:string,
        modules:Module[],
    };




type Module = CommonModule | QuizModule;

type CommonModule = {
    name:string,
    description:string,
    type:ModuleType,
    content:string
}

type QuizModule = {
    name:string,
    description:string,
    type:ModuleType,
    content:string,
    question:string,
    options:QuizOption[],
    correctAnswer:QuizOption["name"]
}

type QuizOption = {
    name:string,
    content:string,
}



enum ModuleType {
    lesson = "lesson", // module where basic understanding of a topic is provided. 
    quiz = "quiz", // module where a question is asked and user gets to select the correct answer from the optoins provided
    tutorial = "tutorial", // module where user is guided step by step for an specific task
    task = "task" // module where user is asked to do an specific task on their own.
}


export const levels:Level[]  = [
    {
        index:1,
        name:"introduction to variables",
        description:"you will clear you unde rtanding about variables",
        modules:[
            {
                name: "know varables",
                description:"here we will give you some basic intro of variable",
                type:ModuleType.lesson,
                content:"variable are ... blah blah blah......\n const carName =\"Toyota\" .... blah blah",
            },
            {
                name:"check your variable knowledge",
                description:"to check your knowledge",
                type:ModuleType.quiz,
                content:"choose the correct answer from below",
                question:"which one is the correct keyword for creating a variable ?",
                options:[
                    {
                        name:"a",
                        content:"cods",
                    },
                    {
                        name:"b",
                        content:"rots",
                    },
                    {
                        name:"c",
                        content:"const",
                    },
                    {
                        name:"d",
                        content:"cosnt",
                    },
                ],
                correctAnswer:"c",
            },
        ],
    },
];