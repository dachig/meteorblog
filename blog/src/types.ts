export interface Post {
    id:string,
    title: string,
    description: string,
    author: string,
    authorAvatar?: string,
    publishedAt:string,
    category:string,
    media?: string[],
}

export interface Author{
    name:string,
    avatar:string
}