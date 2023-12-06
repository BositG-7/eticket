import { createContext, useContext } from "react";

import { IContext } from "./types";

export const CourseContext = createContext<IContext.Courses>({} as IContext.Courses);

CourseContext.displayName = "CourseContext";

export const useCourse = () => useContext(CourseContext);
