import {Icon} from "cx/widgets";
import {VDOM, CSS} from "cx/ui";

Icon.registerFactory((name, props) => {
    const p = Object.assign({}, props, {
        className: CSS.expand('fas', name, props.className)
    });
    return <i {...p} />;
});
