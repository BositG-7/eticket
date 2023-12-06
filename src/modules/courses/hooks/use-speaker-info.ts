import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { IApi } from "../types";
import { Api } from "..";

export const useSpeakerInfo = () => {
   const [info, setState] = useState<IApi.Course.SpeakerInfo.Response>({ info: "" });

   useEffect(() => {
      const request = async () => {
         try {
            const { data } = await Api.Course.SpeakerInfo();
            const info = data;


            setState(info);
         } catch (err: any) {
            notifications.show({ message: err?.message, color: "red" });
            setState({ info: "" });
         }
      };

      request();
   });
   return info;
};
