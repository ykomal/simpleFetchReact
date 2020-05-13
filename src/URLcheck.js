import React, { Component } from 'react';
class URLcheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlResponse : {}
        }
    }

    componentDidMount() {
        
    }

    fetchPost = () =>{
        let url = ''; 
        let jsonBody = '';
        fetch(url, {
                method: "POST",
                 headers: {
                        "Content-Type": "application/json"
                    },
                // contentType: "application/x-www-form-urlencoded",
                body: jsonBody
            }) .then(this.setState({
               valid: true
             }))
                .catch(err => console.log(err))
    }

    fetchGet = () => {
        let url = '';
        fetch(url)
        .then(async response => {
            const data = await response.json();

            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            this.setState({ urlResponse: data })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
        document.write(this.state.urlResponse);
    }

    render() {
        return (
            <a href="#" onClick = {this.fetchPost}>CLICK ME FOR UPDATES</a>
        );
    }
}

export default URLcheck;
