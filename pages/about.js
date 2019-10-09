import Link from "next/link";
import Layout from "../components/layout";
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

export default class About extends Component {
    // state = {
    //     user: null
    // }
    // static means it can be executed within or outside the Class. Belongs to About class
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/reedbarger');
        const data = await res.json();
        // fetch('https://api.github.com/users/reedbarger')
        // .then(res => res.json())
        // .then(data=> {
        //     console.log(data)
        // })

        return {  
            user: data
            // user: 'user'
          }
    }
    // lifecycle hook
    // componentDidMount() {
    //     fetch('https://api.github.com/users/reedbarger')
    //     .then(res => res.json())
    //     .then(data=> {
    //         this.setState({
    //             user: data
    //         })
    //     })
    // }
   render() {
       const { user } = this.props;
       return(
        <Layout title="About">
             
            {/* {JSON.stringify(this.state.user)} */}
            <p>{user.name}</p>
            <img src={user.avatar_url} alt="me"/>
        </Layout>
       )
   }
}
