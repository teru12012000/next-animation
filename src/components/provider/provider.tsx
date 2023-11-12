import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReactNode, useContext, useRef } from "react";
interface props{
    children:ReactNode
}
const Provider = (props:props) => {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;
    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

export default Provider;