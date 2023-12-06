import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

export const useCourseTop = () => {
   const [state, setState] = useState<Types.IQuery.Course.CourseTop>({ isLoading: true, courseTop: null });

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.CourseTop();
            const courseTop = data;

            // @ts-expect-error
            setState({ courseTop, isLoading: false });
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ courseTop: null, isLoading: false });
         }
      };

      request();
   }, []);

   return state;
};
