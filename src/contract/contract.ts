
export interface Users {
    userinfo: Userinfo;
    posts: Post[];
}

export interface Userinfo {
    userId: string;
    userName: string;
    email: string;
    profileInfo: string;
    profileImage: string;
    noOfPosts: number;
    followers: number;
    following: number;
}

export interface Post {
    Image: string;
    likes: number;
    timestamp: string;
    comments: string[];
}