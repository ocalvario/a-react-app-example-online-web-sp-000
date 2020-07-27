Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@ocalvario 
s-nicas
/
a-react-app-example-v-000
forked from learn-co-students/a-react-app-example-v-000
0
0457
Code
Pull requests
Actions
Projects
Security
Insights
a-react-app-example-v-000/src/App.js /
@s-nicas
s-nicas Done.
Latest commit 1540031 on Oct 30, 2018
 History
 2 contributors
@s-nicas@DanielSeehausen
30 lines (25 sloc)  822 Bytes
  
Code navigation is available!
Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository. Learn more

import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          Now
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of of JSX.
        </p>
        <ExampleComponent />
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App;
