import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

export const useSingle = (id: string) => {
   const [course, setState] = useState<Types.IEntity.SingleCourse>({
      name: "",
      description: "",
      image: "",
      speaker: 0,
      comment: [],
      video: []
   });

   useEffect(() => {
      const request = async () => {
         try {
            const { data: course } = await Api.Course.Single(id);

            setState(course);
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({
               name: "",
               description: "",
               image: "",
               speaker: 0,
               comment: [],
               video: []
            });
         }
      };

      request();
   }, []);
   return course;
};
