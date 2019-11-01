import React, {Component} from 'react';
import T from 'prop-types';

import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

import styles from './Reader.module.css';

class Reader extends Component {

    static defaultProps = {
        step: 1,
        beginValue: 0,
    }

    static propTypes = {
        step: T.number,
        beginValue: T.number,
    }

    state = {
        value: this.props.beginValue,
    }

    handleIncrement = () => {
        this.setState((prevState) => ({
            value: (
                this.state.value < this.props.items.length - 1 ? 
                prevState.value + this.props.step : prevState.value
                )
        }))
    }

    handleDecrement = () => {
        this.setState((prevState) => ({
            value: (
                this.state.value > 0 ? 
                prevState.value - this.props.step : prevState.value
                )
        }))
    }

    render() {
        return (
            <div className={styles.reader}>
                <Controls onIncrement={this.handleIncrement} 
                onDecrement={this.handleDecrement}/>
                <Counter value={this.state.value} len={this.props.items.length}/>
                <Publication  items={this.props.items} 
                value={this.state.value}/>
            </div>
        )
    }
}

export default Reader;