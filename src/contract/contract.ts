
export interface Users {
    userinfo: Userinfo;
    posts: Post[];
}

export interface Userinfo {
    userId: string;
    userName: string;
    profileInfo: string;
    profileImage: string;
    noOfPosts: number;
    followers: number;
    following: number;
}

export interface Post {
    Image: string;
    likes: number;
    timeStamp: string;
    comments: string[];
}