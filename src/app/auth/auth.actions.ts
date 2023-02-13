import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const loginAction = createAction(
    "[Auth] Login",
    props<{user: User}>()
);
