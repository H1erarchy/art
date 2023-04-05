import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch, connect} from 'react-redux'

import {useState, useEffect} from 'react'

const mapStateToProps = (state) => ({
    objectId: state.data.objectId
})

useEffect(() => {
    dispatch(fetchData())
}, [props.objectId, dispatch])

function App(){
{/* State variables here... */}
    useEffect(() => {
        document.title = 'Welcome to ArtWorld'
    })
{/* Return JSX down here... */}
}

export default connect(mapStateToProps)(App)

