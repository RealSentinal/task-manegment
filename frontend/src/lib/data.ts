interface users {
    name: string
    id: number
    email: string
    password: string
    imageUrl: string
    todos: todo[]
}

interface todo {
    id: number
    title: string
    description: string
    imageUrl: string[]
    tags: string[]
    duedate: string
    priority: string
    comment: string
    userId: number
    completed: boolean
}

interface Comment {
    id: number
    comment: string
    userId: number
    todoId: number
}

const users: users[] = [
    {
        name: "John Doe",
        id: 1,
        email: "RJdO6@example.com",
        password: "password",
        imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        todos: [
            {
                id: 1,
                title: "Task 1",
                description: "Task 1 description",
                imageUrl: ["https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
                tags: ["tag1", "tag2"],
                duedate: "2022-01-01",
                priority: "High",
                comment: "Comment 1",
                userId: 1,
                completed: false
            },
            {
                id: 2,
                title: "Task 2",
                description: "Task 2 description",
                imageUrl: ["https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
                tags: ["tag1", "tag2"],
                duedate: "2022-01-01",
                priority: "High",
                comment: "Comment 1",
                userId: 1,
                completed: false
            }
        ]
    },
    {
        name: "Jane Doe",
        id: 2,
        email: "RJdO6@example.com",
        password: "password",
        imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        todos: [{
            id: 1,
            title: "Task 1",
            description: "Task 1 description",
            imageUrl: ["https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],
            tags: ["tag1", "tag2"],
            duedate: "2022-01-01",
            priority: "High",
            comment: "Comment 1",
            userId: 1,
            completed: false
        }]
    }
]