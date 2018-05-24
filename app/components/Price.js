import {Widget, VDOM, Format} from "cx/ui";

export class Price extends Widget {
    declareData(...args) {
        super.declareData(...args, {
            value: undefined,
            format: undefined
        })
    }

    prepareData(context, instance) {
        let state = null;
        let {data} = instance;
        if (data.value > instance.lastValue)
            state = "up";
        else if (data.value < instance.lastValue)
            state = "down";
        instance.lastValue = data.value;
        instance.v = (instance.v || 0) + 1;
        data.text = Format.value(data.value, data.format);
        if (state)
            data.stateMods = state;
        super.prepareData(context, instance);
    }

    render(context, instance, key) {
        let {data, v} = instance;
        return <span key={`${key}+${v}`} className={data.classNames}>
            {data.text}
        </span>
    }
}

Price.prototype.baseClass = "price";
Price.prototype.styled = true;