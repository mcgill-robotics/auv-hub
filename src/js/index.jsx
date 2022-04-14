// import ReactDOM from "react-dom";
// import React from "react";

class App extends React.Component {
	render(){return(
        <div id="components">
            <Section {header="McGill Robotics Links"}/>
            <Section {header="AUV Links"}/>
        </div>
	)}
}

class Section extends React.Component {
	render(){
		return(
			<div className="section">
				<h1>{this.props.header}</h1>
                /*
				<ul class="links">
                    {this.props.resources.map(r =>
					    <li>
						    <Resource r/>
					    </li>
                    )}
				</ul>
                */
			</div>
		)
	}
}

/*
class SubSection extends React.Component {
	render(){
		return(
			<div className="subsection">
				<h2>{this.props.header}</h2>
				this.props.resources.map(r =>
					<li>
						<Resource r/>
					</li>
				)
			</div>
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
*/

ReactDOM.render(<App/>, document.getElementById('root-container'));

console.log("here");
