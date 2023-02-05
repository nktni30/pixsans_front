import * as Yup from "yup";

export const contactMessageScehma = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    mobile: Yup.number().min(10).required("Please enter Your Mobile"),
    message: Yup.string().min(25).required("Please enter Your Message"),
});

export const SubscribeSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
});