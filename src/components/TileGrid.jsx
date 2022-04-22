class TileGrid extends React.Component {
	render(){
		return(
            <ul className="tile-grid">
                {this.props.tiles.map(t =>
                    <li className="tile-item" key="tile-"{t.name}>
                        <Tile 
                            link={t.link}
                            imgUrl={t.imgUrl}
                            alt={t.alt}
                            name={t.name}/>
                    </li>
                )}
            </ul>
		)
	}
}
