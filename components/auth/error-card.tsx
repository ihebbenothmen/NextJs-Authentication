import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import {
    Card,
    CardHeader,
    CardFooter
} from "@/components/ui/card";
import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login"
        >
            <div className="w-full flex justify-center items-center">
            <ExclamationTriangleIcon className="text-destructive"/>
            </div>
        </CardWrapper>
    );
};