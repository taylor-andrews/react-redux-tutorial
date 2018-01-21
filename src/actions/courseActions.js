import * as types from './actionTypes';

export function createCourse(course) {
    //debugger;
    return {
        type: types.CREATE_COURSE,
        course                          // Identical to "course: course" since left side matches right side
    };
}