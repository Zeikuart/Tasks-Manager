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

// Task Info - Change this for an interface later
export const tasksList = [
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
]