/* eslint-disable react/jsx-key */
import React from 'react';
import ChildComponent1 from './Child/ChildCompo1';
import ChildComponent2 from './Child/ChildCompo2';
import './StyleCompo.css';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    //key:value
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' }
        ]
    }
    
    addNewJob = (job) => {
        console.log('check job from parent: ', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })

    }

    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Run did update", "prev state: ", prevState, " current state: ", this.state)
    }

    componentDidMount() {
        console.log("Run component");
    }

    items = ['Tomato', 'Beans', 
        'Pumpkin', 'Cauliflower', 
        'Broccoli'];

    //re-render
    render() {
        console.log("Call render: ", this.state);
        return (
            <>
            <ul className='DanhSach1'>
                {
                    this.items.filter(x => x !== "Beans").map((x)=> <li>{x}</li>)
                }
            </ul>
             <AddComponent addNewJob={this.addNewJob}  deleteAJob={this.deleteAJob}/>
                
                <ChildComponent1
                    name={this.state.titleJob}
                    age={'25'}
                    address={'Ha noi'}
                    arrJobs={this.state.arrJobs}
                />
                <ChildComponent2></ChildComponent2>
            </>
        )
    }
}
export default MyComponent;