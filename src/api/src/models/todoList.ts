export type TodoList = {
    id: string
    name: string
    description?: string
    createdDate?: Date
    updatedDate?: Date
    Hash?: string
}

export const createTodoList = (name: string, description?: string): TodoList => {
    const now = new Date();
    return {
        id: generateId(),
        name,
        description,
        createdDate: now,
        updatedDate: now,
        Hash: generateId() // Partition key for Cosmos DB
    };
};

const generateId = (): string => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};