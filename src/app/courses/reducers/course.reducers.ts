import { compareCourses, Course } from "../model/course";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CoursesActions } from "../action-types";


export interface CoursesState extends EntityState<Course> {
    allCoursesLoaded: boolean
}

export const adapter = createEntityAdapter<Course>({
    sortComparer: compareCourses
    // selectId: course => course.id  // here you can set what field is the unique identifier for entity
});

export const initialCoursesState = adapter.getInitialState({
    allCoursesLoaded: false
});

export const coursesReducer = createReducer(
    initialCoursesState,
    on(CoursesActions.allCoursesLoaded, (state, action) => adapter.setAll(action.courses, {...state, allCoursesLoaded: true}))
)

export const {
    selectAll
} = adapter.getSelectors();
