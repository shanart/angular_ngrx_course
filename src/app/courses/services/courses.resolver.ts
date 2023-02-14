import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { tap, filter, first } from "rxjs/operators";
import { CourseEntityService } from "./course-entity.service";


@Injectable()
export class CoursesResolver implements Resolve<boolean> {
    constructor(private coursesServices: CourseEntityService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.coursesServices.loaded$.pipe(
            tap(loaded => {
                if (!loaded) {
                    this.coursesServices.getAll();
                }
            }),
            filter(loaded => !!loaded),
            first()
        );
    }
}
