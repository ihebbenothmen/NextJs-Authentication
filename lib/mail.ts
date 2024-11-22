import { Html } from "next/document";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Verify your email address",
        html: `<p>  Click the link below to verify your email address: <a href="${confirmLink}">here</a> To confirm your email address, please click the link above. </p>`
    })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `http://localhost:3000/auth/reset-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: `<p>  Click the link below to reset your password: <a href="${resetLink}">here</a> To reset your password, please click the link above. </p>`
    })
}
