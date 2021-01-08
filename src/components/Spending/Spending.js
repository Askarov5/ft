import { Component } from 'react';
import PropTypes from 'prop-types';

import './Spending.css';
import Chart from '../Chart/Chart';


class Spending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spendings: [
                ...props.spendings
            ],
            chartData: props.chartData,
            categories: [
                { id:'0', name: 'Other'},
                { id:'1', name: 'Housing', subCategories: [
                    {id: '0', name: 'Mortgage/Rent'}, 
                    {id: '1', name: 'Water'}, 
                    {id: '2', name: 'Natural Gas'}, 
                    {id: '3', name: 'Electricity'}, 
                    {id: '4', name: 'Cable'}, 
                    {id: '5', name: 'Trash'}, 
                ]},
                { id:'2', name: 'Transportation', subCategpries: [
                    { id: '0', name: 'Gas'},
                    { id: '1', name: 'Maintenance'},
                ]},
                { id:'3', name: 'Personal'},
                { id:'4', name: 'Health'},
                { id:'5', name: 'Giving'},
            ],
            newSpending: {
                id: Math.floor(Math.random() * 1000), 
                category: 'Other',
                amount: '',
                dateTime: '',
                note:''
            }
            
        }
        this.selectCategoryHandler = this.selectCategoryHandler.bind(this);
        this.inputAmountHandler = this.inputAmountHandler.bind(this);
        this.addSpendingHandler = this.addSpendingHandler.bind(this);
    }

    /*static getDerivedStateFromProps(props, state){
        let amounts =  props.spendings.map(s => s.amount);
        return {chartData: amounts}
    }*/

    addSpendingHandler = () => {
        if(this.state.newSpending.amount > 0){
            let newSp = this.state.newSpending;
            newSp.dateTime = this.getTime();

            let total = this.state.spendings.reduce((total, item) => total + item.amount, 0) + parseInt(this.state.newSpending.amount);
            
            let amountArr = this.state.chartData;
            amountArr.push(parseInt(newSp.amount));

            console.log('chart date: ' + amountArr);
            this.setState({
                todaysTotal: total,
                spendings: [
                    ...this.state.spendings,
                    newSp
                ],
                newSpending: {
                    id: Math.floor(Math.random() * 1000), 
                    category: 'Other',
                    amount: '',
                    note: ''
                },
                chartData: amountArr,
            });
        }
    }

    selectCategoryHandler = (e) => {
        let newSp = this.state.newSpending;
        newSp.category = e.target.value;

        this.setState({newSpending: newSp});
    }

    inputAmountHandler = (e) => {
        let newSp = this.state.newSpending;
        newSp.amount = parseInt(e.target.value);

        this.setState({newSpending: newSp});
    }

    removeSpending = (e, spendingIndex) => {
        let spendings = [...this.state.spendings];
        spendings.splice(spendingIndex, 1);

        let newChartData = this.state.chartData;
        newChartData.splice(spendingIndex,1);

        this.setState({spendings: spendings, chartData: newChartData});
    }

    noteHandler = (e) => {
        let newSp = this.state.newSpending;
        newSp.note = e.target.value;

        this.setState({newSpending: newSp});
    }

    getTime(){
        let d = new Date();
        return d.toLocaleDateString() +' '+ d.toLocaleTimeString();
    }

    render() {
        return (
            <div id='Spending'>
                <div id='chart'><Chart data = {this.state.chartData} key = {this.state.chartData}/></div>
              <h2>Today's Spendings (-) {this.state.todaysTotal}</h2>
                <form  className='sp-header'>
                    <select className='sp-category' required 
                    value={this.state.newSpending.category}
                    onChange={this.selectCategoryHandler}>
                        {this.state.categories.map((c, i)=> <option key={i} value={c.name}>{c.name}</option>)}
                    </select>
                    <input className='sp-amount' type='number' placeholder='$   ###' required min='1'
                    value={this.state.newSpending.amount}
                    onChange={this.inputAmountHandler}/>
                    <button type='submit' className='btn btn-add' onClick={this.addSpendingHandler}> Add </button>
                    <textarea className='additional-note' placeholder='Additional Notes'
                    value={this.state.newSpending.note} onChange={this.noteHandler}></textarea>
                </form>
              <div className='sp-list'>
                    {this.state.spendings.map((s, index) => 
                        <div className='sp-item' id={s.id} key={s.id}>
                            <div>{s.category}</div>
                            <div>$ {s.amount}</div>
                            <div>{s.dateTime}</div>
                            <div className='sp-note'>{s.note}</div>
                            <div>
                                <button className='btn btn-remove'
                                onClick={(event) => this.removeSpending(event, index)}>X</button>
                            </div>
                        </div>
                    )}
              </div>
            </div>
        );
    }
  
}

Spending.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
}

export default Spending;