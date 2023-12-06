import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

interface UseList {
   search?: string;
}
export const useList = ({ search = "" }: UseList) => {
   const [state, setState] = useState<Types.IQuery.Course.List>({ isLoading: true, course: [] });

   useEffect(() => {
      const request = async () => {
         try {
            console.log(search);

            const { data: course } = await Api.Course.List({ search });

            setState({ course, isLoading: false });
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ course: [], isLoading: false });
         }
      };

      request();
   }, [search]);

   return state;
};
