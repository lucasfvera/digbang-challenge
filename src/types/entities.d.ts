import React from "react";

declare global{
        namespace Types{
        type RouteObject = {
            path: string,
            component: React.FC<any>
        }
    }
}
