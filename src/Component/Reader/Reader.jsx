import React, {Component} from 'react';

import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

import styles from './Reader.module.css';

class Reader extends Component {

    state = {
        pageNumber: 0
    }

    handleIncrement = ({target: {name}}) => {
        this.setState((prevState) => ({
            pageNumber:
                name === "increment" ?
                    prevState.pageNumber + 1 : prevState.pageNumber - 1
        }))
    }

    render() {
        return (
            <div className={styles.reader}>
                <Controls onIncrement={this.handleIncrement} 
                pageNumber={this.state.pageNumber}
                max={this.props.items.length}
                />
                <Counter pageNumber={this.state.pageNumber} 
                len={this.props.items.length}/>
                <Publication  items={this.props.items} 
                pageNumber={this.state.pageNumber}/>
            </div>
        )
    }
}

export default Reader;