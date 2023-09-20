// Menu options
export const menuItems = [
    {
        title: "Backlog",
        value: 3,
        isActive: true
    },
    {
        title: "In progress",
        value: 2,
        isActive: false
    },
    {
        title: "Done",
        value: 4,
        isActive: false
    },
]

// Task Structure
// export interface task {
//     taskName: string
//     tag: {
//         hasTag: boolean
//         tagName: string
//         tagColor: string
//         tagBackground: string
//     },
//     progress: string,
//     date: string,
// }

// Task Info - Change this for an interface later
export const tasksList = {
    backLog: [
        {
            taskName: "Create the landing page",
            tag: {
                hasTag: true,
                tagName: "UI/UX Design",
                tagColor: "text-pink-400",
                tagBackground: "bg-pink-100"
            },
            progress: "0/5",
            date: "20/05/2021",
        },
        {
            taskName: "Test API request",
            tag: {
                hasTag: true,
                tagName: "Backend",
                tagColor: "text-purple-400",
                tagBackground: "bg-purple-100"
            },
            progress: "0/4",
            date: "20/05/2021",
        },
        {
            taskName: "Fix SQL tables",
            tag: {
                hasTag: true,
                tagName: "Database",
                tagColor: "text-teal-400",
                tagBackground: "bg-teal-100"
            },
            progress: "0/3",
            date: "20/05/2021",
        }
    ],
    inProgress: [
        {
            taskName: "Check css framework",
            tag: {
                hasTag: true,
                tagName: "Frontend",
                tagColor: "text-blue-400",
                tagBackground: "bg-blue-100"
            },
            progress: "2/3",
            date: "20/05/2021",
        },
        {
            taskName: "Prepare hostings",
            tag: {
                hasTag: true,
                tagName: "Backend",
                tagColor: "text-purple-400",
                tagBackground: "bg-purple-100"
            },
            progress: "1/4",
            date: "20/05/2021",
        },
        
    ],
    done: [
        {
            taskName: "Change typography",
            tag: {
                hasTag: true,
                tagName: "UI/UX Design",
                tagColor: "text-pink-400",
                tagBackground: "bg-pink-100"
            },
            progress: "3/3",
            date: "20/05/2021",
        },
        {
            taskName: "Create more tables",
            tag: {
                hasTag: true,
                tagName: "Database",
                tagColor: "text-teal-400",
                tagBackground: "bg-teal-100"
            },
            progress: "3/3",
            date: "20/05/2021",
        },
        {
            taskName: "Find a domain",
            tag: {
                hasTag: true,
                tagName: "Backend",
                tagColor: "text-purple-400",
                tagBackground: "bg-purple-100"
            },
            progress: "3/3",
            date: "20/05/2021",
        },
        {
            taskName: "Make a new database",
            tag: {
                hasTag: true,
                tagName: "Database",
                tagColor: "text-teal-400",
                tagBackground: "bg-teal-100"
            },
            progress: "3/3",
            date: "20/05/2021",
        }
    ]
}