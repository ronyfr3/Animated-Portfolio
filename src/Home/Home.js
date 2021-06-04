import React from 'react'
import Birds from '../Birds/Birds'
import Header from '../Header/Header'
import MenuBtn from '../MenuBtn/MenuBtn'
import Resume from '../Resume/Resume'
import Text from '../Text/Text'
import TextReveal from './TextReveal'

const Home = () => {
    return (
        <div>
            <Header />
            <TextReveal />
            <Text />
            <Birds/>
            <MenuBtn/>
        </div>
    )
}

export default Home
