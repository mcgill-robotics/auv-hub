// import ReactDOM from "react-dom";
// import React from "react";

const slack = {
    link: "http://slack.com", 
    imgUrl: "images/slack.svg", 
    alt: "McGill Robotics 2021/22 slack", 
    name: "Slack"
};
const discord = {
    link: "http://discord.com", 
    imgUrl: "images/discord.svg", 
    alt: "McGill Robotics 2021/22 discord", 
    name: "Discord"
};
const googleDrive = {
    link: "http://drive.google.com", 
    imgUrl: "images/google-drive.svg", 
    alt: "McGill Robotics 2021/22 Google Drive", 
    name: "Google Drive"
};
const github = {
    link: "http://github.com", 
    imgUrl: "images/github.svg", 
    alt: "McGill Robotics 2021/22 Github", 
    name: "Github"
};
const trello = {
    link: "http://trello.com", 
    imgUrl: "images/trello.svg", 
    alt: "McGill Robotics 2021/22 Trello", 
    name: "Trello"
};
const kiCAD = {
    link: "http://kicad.com", 
    imgUrl: "images/kicad.svg", 
    alt: "McGill Robotics 2021/22 kiCAD", 
    name: "KiCAD"
};
const freeCAD = {
    link: "http://freecad.com", 
    imgUrl: "images/freecad.svg", 
    alt: "McGill Robotics 2021/22 FreeCAD", 
    name: "FreeCAD"
};

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           roboticsResources: [slack, discord, googleDrive],
           electricalResources: [kiCAD],
           mechanicalResources: [freeCAD],
           softwareResources: [github, trello]
        }
    }

	render(){
        return(
        <div id="root-container">
            <h1>McGill Robotics Links</h1>
            <ResourcesList 
                resources={this.state.roboticsResources}/>
            <h1>AUV Links</h1>
            <SubSection 
                header={"Electrical"}
                resources={this.state.electricalResources}/>
            <SubSection 
                header={"Mechanical"}
                resources={this.state.mechanicalResources}/>
            <SubSection 
                header={"Software"}
                resources={this.state.softwareResources}/>
        </div>
        )
	}
}

class SubSection extends React.Component {
	render(){
		return(
        <div className="subsection">
            <h2>{this.props.header}</h2>
            <ResourcesList
                resources={this.props.resources}/>
        </div>
		)
	}
}

class ResourcesList extends React.Component {
	render(){
		return(
            <ul className="resource-list">
                {this.props.resources.map(r =>
                    <li className="resource-item" key={r.name}>
                        <Resource 
                            link={r.link}
                            imgUrl={r.imgUrl}
                            alt={r.alt}
                            name={r.name}/>
                    </li>
                )}
            </ul>
		)
	}
}

class Resource extends React.Component {
	render(){
		return(
            <div className="resource-outer">
                <a className="resource-link" href={this.props.link}>
                    <div className="resource-inner" href={this.props.link}>
                        <Tile imgUrl={this.props.imgUrl}/> 
                        <p className="tile-name">{this.props.name}</p>
                    </div>
                </a>
            </div>
		)			
	}
}

class Tile extends React.Component {
    render(){
        return(
            <div className="tile">
                <img className="icon"
                    src={this.props.imgUrl}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementsByTagName('body')[0]);
