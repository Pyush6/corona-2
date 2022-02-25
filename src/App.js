import React from 'react';
import About from "./About";
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import {BrowserRouter ,Redirect,Route ,Switch} from "react-router-dom";
import image from './images/image.png';
import Home from './home';
import pl from "./thanks";
import india from './India';
import Navbar from './navbar';
import Ab from "./fun";
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      
      <div className={styles.container}>
        <Switch>
        <Route exact path="/" component={Home}>
        <Home></Home>
        
      </Route>
        <Route path="/tracker">
          <Navbar></Navbar>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        </Route>
        <Route  path="/about" component={About}></Route>
        <Route  path="/India" component={india}></Route>
        
        
        <Route  path="/vaccine" component={Ab}></Route>
        <Route  path="/message" component={pl}></Route>
        <Redirect to="/"></Redirect>
        </Switch>
      </div>
      
      
    );
  }
}

export default App;