const initialState = [
    {
        id: 0,
        name: "Task №0",
        sprintId: 1,
        status: "open",
        subtasks: [
            {
                id: 0,
                name: "subtask 0"
            },
            {
                id: 1,
                name: "subtask 1"
            },
            {
                id: 2,
                name: "subtask 2"
            }
        ]
    },
    {
        id: 1,
        name: "Task №1",
        sprintId: 1,
        status: "in-progress",
        subtasks: [
            {
                id: 0,
                name: "subtask 0"
            }
        ]
    },
    {
        id: 2,
        name: "Task №2",
        sprintId: 2,
        status: "in-progress",
        subtasks: [
            {
                id: 0,
                name: "subtask 0"
            },
            {
                id: 1,
                name: "subtask 1"
            },
            {
                id: 2,
                name: "subtask 2"
            }
        ]
    },
    {
        id: 3,
        name: "Task №3",
        sprintId: 2,
        status: "closed",
        subtasks: []
    },
    {
        id: 4,
        name: "Task №4",
        sprintId: 4,
        status: "in-progress",
        subtasks: [
            {
                id: 0,
                name: "subtask 0"
            },
            {
                id: 1,
                name: "subtask 1"
            }
        ]
    },
    {
        id: 5,
        name: "Task №5",
        sprintId: 1,
        status: "open",
        subtasks: [
            {
                id: 0,
                name: "subtask 0"
            },
            {
                id: 1,
                name: "subtask 1"
            }
        ]
    },
    {
        id: 6,
        name: "Task №6",
        sprintId: 3,
        status: "closed",
        subtasks: [
            {
                id: 0,
                name: "subtask 0"
            },
            {
                id: 1,
                name: "subtask 1"
            }
        ]
    },
    {
        id: 7,
        name: "Task №7",
        sprintId: 0,
        status: "open",
        subtasks: [
            {
                id: 0,
                name: "subtask 0"
            },
            {
                id: 1,
                name: "subtask 1"
            }
        ]
    }
];

export default initialState;