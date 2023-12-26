import { ErrorAlert, STATUS } from "@/Common/Helper";
import { apis } from "@/services/apis/api";
import { create } from "zustand";

export const usePostStore = create((set, get) => ({
    getAllPostsAction: async (payload: any) => {
        set({ getAllPostsStatus: STATUS.FETCHING });
        const { data, ok }: any = await apis.getAllPostsApi(payload);
        if (ok) {
            set({
                allPostsData: data,
                getAllPostsStatus: STATUS.SUCCESS,
            });
        } else {
            set({ getAllPostsStatus: STATUS.FAILED });
            ErrorAlert(data?.message || "Something Went Wrong")
        }
    },

    getPostAction: async (payload: any) => {
        set({ getPostStatus: STATUS.FETCHING });
        const { data, ok }: any = await apis.getPostApi(payload);
        if (ok) {
            set({
                postData: data,
                getPostStatus: STATUS.SUCCESS,
            });
        } else {
            set({ getPostStatus: STATUS.FAILED });
            ErrorAlert(data?.message || "Something Went Wrong")
        }
    },

    getPopularPostsAction: async (payload: any) => {
        set({ getPopularPostsStatus: STATUS.FETCHING });
        const { data, ok }: any = await apis.getPopularPostsApi(payload);
        if (ok) {
            set({
                popularPosts: data,
                getPopularPostsStatus: STATUS.SUCCESS,
            });
        } else {
            set({ getPopularPostsStatus: STATUS.FAILED });
            ErrorAlert(data?.message || "Something Went Wrong")
        }
    },
}));
