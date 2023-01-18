import { SafeResourceUrl } from "@angular/platform-browser";
import { ItemType } from "./enum/item-type";

export class PostItem {
    id?: string;
    postId?: string;
    subtitle?: string;
    description?: string;
    adress?: string;
    postType?: ItemType;
    trustedUrl?: SafeResourceUrl;
}
