import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

export const useSpeaker = (id: string) => {
   const [teacher, setState] = useState<Types.IEntity.Speaker>({
      first_name: "",
      last_name: "",
      image: "",
      courses: [],
      username: "",
      about: "",
      job: ""
   });

   useEffect(() => {
      const request = async () => {
         try {
            if (id !== "0") {
               const { data: teacher } = await Api.Course.Speaker(id);

               setState(teacher);
            }
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ first_name: "", last_name: "", job: "", about: "", image: "", courses: [], username: "" });
         }
      };

      request();
   }, [id]);
   return teacher;
};
