import { compareCourses, Course } from "../model/course";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CoursesActions } from "../action-types";

export interface CoursesState extends EntityState<Course> {}
export const adapter = createEntityAdapter<Course>({
    sortComparer: compareCourses
    // selectId: course => course.id  // here you can set what field is the unique identifier for entity
});
export const initialCoursesState = adapter.getInitialState();

export const coursesReducer = createReducer(
    initialCoursesState,
    on(CoursesActions.allCoursesLoaded, (state, action) => adapter.setAll(action.courses, state))
)


export const {
    selectAll
} = adapter.getSelectors();