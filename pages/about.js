import Link from "next/link";
import Layout from "../components/layout";
import Error from './_error';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

export default class About extends Component {
    // state = {
    //     user: null
    // }
    // static means it can be executed within or outside the Class. Belongs to About class
    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/reedbarger');
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();
        // fetch('https://api.github.com/users/reedbarger')
        // .then(res => res.json())
        // .then(data=> {
        //     console.log(data)
        // })

        return {  
            user: data,
            statusCode
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
        // desctructured from props
       const { user, statusCode } = this.props;
        if(statusCode) {
            return <Error statusCode={statusCode}/>
        }

       return(
        <Layout title="About">
             
            {/* {JSON.stringify(this.state.user)} */}
            <p>{user.name}</p>
            <img src={user.avatar_url} alt="me"/>
        </Layout>
       )
   }
}
