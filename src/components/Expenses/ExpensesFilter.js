import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const filterChangeHandler = (event) => {
        props.onFilterChange(event.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={filterChangeHandler} value={props.defaultYear}>
                    <option value=''>None</option>
                    {
                        props.yearList.map(year => {
                            return <option key={Math.random() * 9 + 1} value={year.toString()}>{year}</option>
                        })
                    }
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;