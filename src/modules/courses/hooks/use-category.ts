import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { Api, Types } from "..";

export const useCategory = () => {
   const [state, setState] = useState<Types.IQuery.Course.Category>({ isLoading: true, category: [] });

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.Course.Category();

            // @ts-ignore
            setState({ category: data, isLoading: false });
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ category: [], isLoading: false });
         }
      };

      request();
   }, []);
   return state;
};
