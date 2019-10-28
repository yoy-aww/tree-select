/**
 * 树型结构的选择组件 TreeSelect
 * created by anweiwei
 */
import React from 'react';
import './index.less';
export default class DropSelect extends React.Component {
    static defaultProps = {
        checked: 0,
        options: []
    }
    selectOption = (key, text) => {
        this.customercomp.blur();
        const { choose } = this.props;
        if (choose) choose(key, text);
    }
    render() {
        const { selectOption } = this;
        let { options, checked, panelCSS } = this.props;
        return (
            <div className="my-select" style={panelCSS} tabIndex="0" ref={(comp) => this.customercomp = comp}>
                <div className="my-value" >
                    <label>{options[checked]}</label>
                    <em></em>
                </div>
                <div className="my-option">
                    <dl>
                        {
                            options.map(
                                (item, key) => <dd key={key} onClick={() => selectOption(key, item)}>{item}</dd>
                            )
                        }
                    </dl>
                </div>
            </div>
        )
    }
} 
