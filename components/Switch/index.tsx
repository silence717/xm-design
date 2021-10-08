import classNames from 'classnames';
import { noop } from "../../utils";
import './index.less';

const prefixCls = 'xm';

type Size = 'default' | 'small'

interface SwitchProps {
    size?: Size
    checked?: boolean
    checkedText?: string
    unCheckedText?: string
    disabled?: boolean
    onBeforeChange?: () => void
    onChange?: (checked: boolean, event: any) => void
}

function Switch(props: SwitchProps) {
    const { checked = false, checkedText = '', unCheckedText = '', size = 'default', disabled = false, onChange = noop, onBeforeChange = undefined } = props;

    const prefix = `${prefixCls}-switch`;

    const wrapper = classNames(prefix, {
        [`${prefix}-small`]: size === 'small',
        [`${prefix}-checked`]: checked,
        [`${prefix}-disabled`]: disabled
    });

    const handleClick = (event: any) => {
        if (disabled) {
            return;
        }

        if (onBeforeChange) {
            onBeforeChange();
            return;
        }

        onChange(!checked, event);
    };

    return (
        <button type="button" className={wrapper} onClick={handleClick}>
            <span className={`${prefix}-inner`}>{checked ? checkedText : unCheckedText}</span>
        </button>
    );
}

export default Switch
