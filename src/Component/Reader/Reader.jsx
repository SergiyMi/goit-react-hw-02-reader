import React, {Component} from 'react';
import T from 'prop-types';

import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

import styles from './Reader.module.css';

class Reader extends Component {

    // static defaultProps = {
    //     step: 1
    // }

    // static propTypes = {
    //     step: T.number
    // }

    state = {
        pageNumber: 0
    }

    handleIncrement = ({target}) => {
        this.setState((prevState) => ({
            pageNumber: (
                target.name === "increment" ?
                    this.state.pageNumber < this.props.items.length -1 ? 
                    prevState.pageNumber + 1 : prevState.pageNumber  
                :
                    this.state.pageNumber > 0 ? 
                    prevState.pageNumber - 1 : prevState.pageNumber
            )
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