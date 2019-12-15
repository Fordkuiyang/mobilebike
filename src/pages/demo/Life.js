import React from 'react';
import { Button } from 'antd';
import './../demo/life.less';
class Life extends React.Component {
    render() {
        return (
            <div>
                <div className="content">
                    this is life
                </div>
                <div className="content">
                    this is two life
                </div>
                <Button type="primary">Antd Button</Button>
            </div>
        )
    }
}

export default Life;