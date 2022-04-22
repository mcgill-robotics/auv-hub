
class SubSection extends React.Component {
	render(){
		return(
        <div className="subsection">
            <h2>{this.props.header}</h2>
            <TileGrid
                tiles={this.props.resources}/>
        </div>
		)
	}
}
