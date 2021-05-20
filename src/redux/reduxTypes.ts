import {PostsState} from "../posts/posts.actions";
import {AuthState} from "../auth/auth.actions";
// [REDUX TYPES] IMPORT MODULE STATE

export interface ReduxState {
	posts: PostsState,
	auth: AuthState,
    // [REDUX TYPES] ADD MODULE STATE
}
