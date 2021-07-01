import {PostsState} from "../posts/posts.actions";
import {AuthState} from "../auth/auth.actions";
import {BaseState} from "../base/base.actions";
import {UserState} from "../user/user.actions";
import {ChatsState} from "../chats/chats.actions";
// [REDUX TYPES] IMPORT MODULE STATE

export interface ReduxState {
	posts: PostsState,
	auth: AuthState,
	base: BaseState,
	user: UserState,
	chats: ChatsState,
    // [REDUX TYPES] ADD MODULE STATE
}
