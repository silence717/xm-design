import { Component } from 'react';
import Switch from '../index';

export default class ToggleDemo extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
            checked: true
        };
    }

    handleChange = (checked: boolean) => {
        this.setState({ checked });
    };

    render() {
        return (
            <div>
                <div>
                    不添加checked状态：
                    <Switch />
                </div>

                <div className="item">
                    设置checked为true：
                    <Switch checked={true} onChange={this.handleChange} />
                </div>

                <div>
                    设置开关的文案显示：
                    <Switch checked={false} checkedText="这里是开" unCheckedText="这里是关" onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}