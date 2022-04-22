class Tile extends React.Component {
	render(){
		return(
            <div className="resource-outer">
                <a className="resource-link" href={this.props.link}>
                    <div className="resource-inner" href={this.props.link}>
                        <div className="tile-icon">
                            <img className="icon"
                                src={this.props.imgUrl}/>
                        </div>
                        <p className="tile-name">{this.props.name}</p>
                    </div>
                </a>
            </div>
		)			
	}
}
