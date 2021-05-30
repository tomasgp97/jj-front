import {PostsState} from "../posts/posts.actions";
import {AuthState} from "../auth/auth.actions";
import {BaseState} from "../base/base.actions";
import {UserState} from "../user/user.actions";
// [REDUX TYPES] IMPORT MODULE STATE

export interface ReduxState {
	posts: PostsState,
	auth: AuthState,
	base: BaseState,
	user: UserState,
    // [REDUX TYPES] ADD MODULE STATE
}
