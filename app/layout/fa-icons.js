import {Icon} from "cx/widgets";
import {VDOM, CSS} from "cx/ui";

Icon.registerFactory((name, props) => {
    const p = {
        ...props,
        className: CSS.expand('far', name, props.className)
    };
    return <i {...p} />;
});
