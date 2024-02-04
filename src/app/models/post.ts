import { PostItem } from "./post-item";

export class Post {
    id?: string;
    postTitle?: string;
    postImage?: string;
    postDescription?: string;
    isAProject?: boolean;
    postActive?: boolean;
    postDate?: Date;
    PostItens?: PostItem[];
}
