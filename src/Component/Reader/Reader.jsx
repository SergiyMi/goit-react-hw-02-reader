import React, {Component} from 'react';
import T from 'prop-types';

import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

import styles from './Reader.module.css';

class Reader extends Component {

    static defaultProps = {
        step: 1
    }

    static propTypes = {
        step: T.number
    }

    state = {
        value: 0
    }

    handleIncrement = (e) => {
        e.currentTarget.name === "increment" ? 
        this.setState((prevState) => ({
            value: (
                this.state.value < this.props.items.length -1 ? 
                prevState.value + this.props.step : prevState.value  
            )
        }))
        :
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
                value={this.state.value}
                max={this.props.items.length}
                />
                <Counter value={this.state.value} len={this.props.items.length}/>
                <Publication  items={this.props.items} 
                value={this.state.value}/>
            </div>
        )
    }
}

export default Reader;