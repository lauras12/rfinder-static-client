import React, { createContext } from 'react';

const FindContext = React.createContext({
    list: [],
    setList: () => {},
})
export default FindContext;

export class FindContextProvider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list: [],
        }
    }

    setList = (data) => {
        console.log(data, 'CONTEXT')
        this.setState({
            list: data,
        })
    }

    render(){
        const contextValue = {
            list: this.state.list,
            setList: this.setList,
        }
        return (
            <FindContext.Provider value={contextValue} >
                {this.props.children}
            </FindContext.Provider >

        )
    }
} 