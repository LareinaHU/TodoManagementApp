import axios from 'axios'

class HelloWorldService {

    executeHelloWorldService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorlPathVariableService(name) {
        //console.log('executed service')
        //What we want to send is we would want to send the authorization header.

        //--
        // What we are seeing is we are adding a header in, but this is exactly what is now being done by the interceptor. So this service does not really need this information at all right the HelloWorldService, because this is already taken care of by the interceptor, But that we have in here.
        // let username = 'in28minutes'
        // let password = 'dummy'
        // let basicAuthHeaderString = "basic " + window.btoa(`${username}:${password}`)
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // ,{
        //     headers: {
        //         authorization: basicAuthHeaderString
        //     }

        // }
        );
    }

}

export default new HelloWorldService()