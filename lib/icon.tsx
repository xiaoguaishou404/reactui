import * as React from "react"
import { ReactNode } from "react";

interface IconProps {
    name: string;
}
const Icon = (props: IconProps) => {
    return (
        <div>icon!{props.name}</div>
    )

}
export default Icon;