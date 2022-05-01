import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Header/Body/Body'
import Header from './components/Header/Header'
import MainStudentOffer from './components/StudentOffers/MainStudentOffer'
import StudentOffers from './components/StudentOffers/StudentOffers'

function Main() {
    return (
        <BrowserRouter>
            <div>
            <Routes>
            <Route path="/" element={[<Header />, <Body />]} />
            <Route path="/offers" element={[<Header />, <MainStudentOffer />]} />

            </Routes>
                
                
            </div>
        </BrowserRouter>
        
        

    )
}

export default Main