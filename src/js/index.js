// import ReactDOM from "react-dom";
// import React from "react";

const slack = {
    link: "http://slack.com", 
    imgUrl: "../../images/slack.png", 
    alt: "McGill Robotics 2021/22 slack", 
    name: "slack"
};
const discord = {
    link: "http://discord.com", 
    imgUrl: "../../images/discord.png", 
    alt: "McGill Robotics 2021/22 discord", 
    name: "discord"
};
const googleDrive = {
    link: "http://drive.google.com", 
    imgUrl: "../../images/google-drive.png", 
    alt: "McGill Robotics 2021/22 Google Drive", 
    name: "Google Drive"
};
const github = {
    link: "http://github.com", 
    imgUrl: "../../images/github.png", 
    alt: "McGill Robotics 2021/22 Github", 
    name: "Github"
};
const trello = {
    link: "http://trello.com", 
    imgUrl: "../../images/trello.png", 
    alt: "McGill Robotics 2021/22 Trello", 
    name: "Trello"
};
const kiCAD = {
    link: "http://kicad.com", 
    imgUrl: "../../images/kicad.png", 
    alt: "McGill Robotics 2021/22 kiCAD", 
    name: "KiCAD"
};
const freeCAD = {
    link: "http://freecad.com", 
    imgUrl: "../../images/freecad.png", 
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
        <div id="components">
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
            <ul className="resourcesList">
                {this.props.resources.map(r =>
                    <li key={r.name}>
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
			<span className="resource">
				<a  href={this.props.link}>
					<img href={this.props.imgUrl}
					     alt={this.props.alt}/>
					<p>{this.props.name}</p>
				</a>
			</span>
		)			
	}
}

ReactDOM.render(<App/>, document.getElementById('root-container'));
