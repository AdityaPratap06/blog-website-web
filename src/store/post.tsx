// import { STATUS } from "../../constants";
// import { apis } from "../../services/apis/api";
// import { ErrorAlert, SuccessAlert } from "../../utils/Helper";
// import { filter, map } from "lodash";

import { create } from "zustand";
import { STATUS } from "../Common/Helper"
import { apis } from "../services/apis/api";

export const usePostStore = create((set, get) => ({
    getAllPostsAction: async (payload: any) => {
        set({ getAllPostsStatus: STATUS.FETCHING });
        const { data, ok } = await apis.getAllPostsApi(payload);
        if (ok) {
            set({
                allPostsData: data,
                getAllPostsStatus: STATUS.SUCCESS,
            });
        } else {
            set({ getAllPostsStatus: STATUS.FAILED });
        }
    },

    // resetStatus: async () => {
    //     set({
    //         addAccountStatus: STATUS.NOT_STARTED,
    //         updateAccountStatus: STATUS.NOT_STARTED,
    //         deleteAccountStatus: STATUS.NOT_STARTED,
    //     });
    // },

    // getAccountAction: async (payload) => {
    //     set({ getAccountStatus: STATUS.FETCHING });
    //     const { data, ok } = await apis.getAccountApi(payload);
    //     if (ok) {
    //         set({
    //             accountDetails: data,
    //             getAccountStatus: STATUS.SUCCESS,
    //         });
    //     } else {
    //         set({ getAccountStatus: STATUS.FAILED });
    //     }
    // },

    // addAccountAction: async (payload) => {
    //     set({ addAccountStatus: STATUS.FETCHING });
    //     const { data, ok } = await apis.addAccountApi(payload);
    //     let previousData = get().accountDetails || [];
    //     if (ok) {
    //         set({ accountDetails: [...previousData, data], addAccountStatus: STATUS.SUCCESS });
    //         SuccessAlert(data?.errorMessage || "Account Added Successfully");
    //     } else {
    //         set({ addAccountStatus: STATUS.FAILED });
    //         ErrorAlert(data?.errorMessage || "Something Went Wrong");
    //     }
    // },

    // deleteAccountAction: async (payload) => {
    //     set({ deleteAccountStatus: STATUS.FETCHING });
    //     const { data, ok } = await apis.deleteAccountApi(payload);
    //     let newData = get().accountDetails || [];

    //     if (ok) {
    //         newData = filter(newData, (d) => d._id !== payload.id);
    //         set({ deleteAccountStatus: STATUS.SUCCESS, accountDetails: newData });
    //         SuccessAlert(data?.errorMessage || "Account Deleted Successfully");
    //     } else {
    //         set({ deleteAccountStatus: STATUS.FAILED });
    //         ErrorAlert(data?.errorsMessage);
    //     }
    // },

    // updateAccountAction: async (payload) => {
    //     set({ updateAccountStatus: STATUS.FETCHING });
    //     const { data, ok } = await apis.updateAccountApi(payload);
    //     let previousData = get().accountDetails;
    //     if (ok) {
    //         const updatedData = map(previousData, (d) => (data._id === d._id ? data : d));
    //         set({ updateAccountStatus: STATUS.SUCCESS, accountDetails: updatedData });
    //         SuccessAlert(data?.errorMessage || "Staff Updated Successfully");
    //     } else {
    //         set({ updateAccountStatus: STATUS.FAILED });
    //         ErrorAlert(data?.errorMessage || "Something went Wrong");
    //     }
    // },
}));
