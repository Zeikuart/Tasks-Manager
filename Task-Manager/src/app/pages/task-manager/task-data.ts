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
            id: 1,
            cat: "Backlog",
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
            id: 2,
            cat: "Backlog",
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
            id: 3,
            cat: "Backlog",
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
            id: 4,
            cat: "In progress",
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
            id: 5,
            cat: "In progress",
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
            id: 6,
            cat: "Done",
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
            id: 7,
            cat: "Done",
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
            id: 8,
            cat: "Done",
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
            id: 9,
            cat: "Done",
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