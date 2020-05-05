import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Wrapper} from './components/Wrapper/Wrapper';
import {HomePage} from './pages/HomePage';
import {BurgerMenu} from './components/BurgerMenu/BurgerMenu';
import {SubscribePage} from './pages/SubscribePage';
import {Footer} from './components/Footer/Footer';
import {Main} from './components/Main/Main';
import {NewPage} from './pages/NewPage';
import {Header} from './components/Header/Header';

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Wrapper>
                <Header/>
                <BurgerMenu/>
            </Wrapper>

            <Main>
                <Route exact path='/' component={HomePage}/>
                <Route path='/new' component={NewPage}/>
                <Route path='/subscribe' component={SubscribePage}/>
            </Main>

            <Wrapper>
                <Footer/>
            </Wrapper>
        </BrowserRouter>
    );
};

export default App;