import http from "services/http";
import { objectToFormData } from "utils";

import { IApi } from "./types";

export const Course = {
   List: ({ search }: IApi.Course.List.Request) => http.get<IApi.Course.List.Response>(`/course_search?search=${search}`),
   Filter: (formData: IApi.Course.Filter.Request) => http.get<IApi.Course.Filter.Response>("/filter", { params: { max_price: formData.max_price } }),
   Single: (id: string | number) => http.get<IApi.Course.Single.Response>(`/course_detail/${id}`),
   SpeakerInfo: () => http.get<IApi.Course.SpeakerInfo.Response>(`/speaker_info`),
   Speaker: (id: string) => http.get<IApi.Course.Speaker.Response>(`/speaker-profile/${id}/`),
   SpeakerCourse: (id: any) => http.get<IApi.Course.SpeakerCourse.Response>(`/speaker_course_list/${id}`),
   Category: () => http.get<IApi.Course.Category.Response>(`/category`),
   CouseVideo: ({ id }: IApi.Course.CouseVideo.Request) => http.get<IApi.Course.CouseVideo.Response>(`/course/${id}/`),
   CouseVideoGet: ({ id }: IApi.Course.CouseVideo.Request) => http.get<IApi.Course.CouseVideoGet.Response>(`/speaker_video/${id}/`),
   CouseDelete: ({ id }: IApi.Course.CouseVideo.Request) => http.delete<IApi.Course.CouseVideoGet.Response>(`/course/${id}/`)
};

export const CreateCourse = (formData: IApi.Course.Create.Request) =>
   http.post<IApi.Course.Create.Response>("/course_create", objectToFormData(formData));

export const EditCourse = ({ id, ...par }: IApi.Course.EditCouse.Request) =>
   http.patch<IApi.Course.EditCouse.Response>(`/course/${id}/`, objectToFormData(par));
export const CourseTop = () => http.get<IApi.Course.CourseTop.Response>("/course_top");

export const CourseNew = () => http.get("/course_new");

export const VideoUpload = (formData: IApi.Course.VideoUpload.Request) =>
   http.post<IApi.Course.VideoUpload.Response>("/speaker_video_upload", objectToFormData(formData));
export const VideoEdit = ({ id, ...formData }: IApi.Course.VideoEdit.Request) =>
   http.patch<IApi.Course.VideoUpload.Response>(`/speaker_video/${id}/`, objectToFormData(formData));

export const MakePayment1Click = ({ card_number, expire_date }: IApi.Course.PaymentStep1.Click.Request) =>
   http.post<IApi.Course.PaymentStep1.Click.Response>("/click/card-token", objectToFormData({ card_number, expire_date }));

export const MakePayment2Click = (formData: IApi.Course.PaymentStep2.Click.Request) =>
   http.post<IApi.Course.PaymentStep1.Click.Response>("/click/card-tokenverify", objectToFormData(formData));

export const MakePayment1Payme = (formData: IApi.Course.PaymentStep1.Payme.Request) =>
   http.post<IApi.Course.PaymentStep1.Click.Response>("/payme/makepayment", objectToFormData(formData));

export const MakePayment2Payme = (formData: IApi.Course.PaymentStep1.Payme.Request) =>
   http.post<IApi.Course.PaymentStep1.Click.Response>("/payme/codecheck", objectToFormData(formData));

export const TopSpeaker = () => http.get("/speaker_top");

export const sendMailUser = (formData: IApi.sendMailUser.Request) =>
   http.post<IApi.sendMailUser.Response>("send_mail_user", objectToFormData(formData));
