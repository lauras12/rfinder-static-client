import React, { createContext } from 'react';
import STORE from './dummyData';

const FindContext = React.createContext({
    list: [],
    setList: () => { },
    addFolder: () => { },
    addPlaceToFolder: () => { },
})
export default FindContext;

export class FindContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            users: STORE.users,
            folders: STORE.folders
        }
    }
    

    setList = (data) => {
        console.log(data, 'CONTEXT')
        this.setState({
            list: data,
        })
    }

    addFolder = (folder) => {
        this.setState({
            folders: [...STORE.folders, folder]
        })
    }

    addPlaceToFolder = (id, folderName) => {
        console.log(this.state.folders, folderName, id)
        const pickedFolder = this.state.folders.find(folder => folder.title === folderName)
        console.log(pickedFolder, 'PICKED')
        pickedFolder.savedPlacesIds = [...pickedFolder.savedPlacesIds, id]
    }

    render() {
        console.log(this.state)
        const contextValue = {
            list: this.state.list,
            setList: this.setList,
            addFolder: this.addFolder,
            addPlaceToFolder: this.addPlaceToFolder,
        }
        return (
            <FindContext.Provider value={contextValue} >
                {this.props.children}
            </FindContext.Provider >
        )
    }
}