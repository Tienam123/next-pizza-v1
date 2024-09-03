import React from "react";
import {cn} from "@/lib/utils";

export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({className, children}) => {
    return (
        <div className={cn("mx-auto max-w-[1280px]", className)}>
        {children}
        </div>
    );
};

Container.propTypes = {};

export default Container;