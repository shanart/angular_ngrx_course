import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { AuthActions } from "./action-types";

@Injectable()
export class AuthEffects {
    
    login$ = createEffect(() => this.action$.pipe(
        ofType(AuthActions.loginAction),
        tap(action => localStorage.setItem("user", JSON.stringify(action.user)))
    ), {dispatch: false}); // this effect does not dispatch new actions

    logout$ = createEffect(() => this.action$.pipe(
        ofType(AuthActions.logoutAction),
        tap(() => {
            localStorage.removeItem("user");
            this.router.navigateByUrl("/login");
        })
    ), {dispatch: false}); // this effect does not dispatch new actions

    constructor(private action$: Actions, private router: Router) {}

}