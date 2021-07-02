import React, { Component } from "react";
import Iframe from "react-iframe";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../css/Nav.css"

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {value: "https://en.wikipedia.org/wiki/Trip"};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>
                    Proof of concept for tabbed iframes
                </h1>

                <Tabs
                    forceRenderTabPanel={true}
                    defaultIndex={3}
                    style={{ textAlign: "center"}}
                >
                    <TabList>
                        <Tab>
                            Tab 1
                        </Tab>
                        <Tab>
                            Tab 2
                        </Tab>
                        <Tab>
                            Tab 3
                        </Tab>
                    </TabList>

                    <TabPanel forceRender={true}
                    >
                        <Iframe
                            display="block"
                            url="http://127.0.0.1:57535/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/#/overview?namespace=default"
                            height="100%"
                            width="100%"
                        />
                    </TabPanel>
                    <TabPanel forceRender={true}
                    >
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Enter URL:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                        <Iframe
                            display="block"
                            url={this.state.value}
                            height="100%"
                            width="100%"

                        />
                    </TabPanel>
                    <TabPanel forceRender={true}
                    >
                        <Iframe
                            url="https://en.wikipedia.org/wiki/Trip"
                            height="100%"
                            width="100%"
                        />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Nav;