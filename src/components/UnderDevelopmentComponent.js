import {Link} from 'react-router-dom';
export const UnderDevelopment= ( )=>{
	return(
		<div className="text-center orangeText">
			<h1>Under Development</h1>
			<p>
				Click here to go to home.
				<Link to="/home"> Home</Link>
			</p> 
		</div>
	)
}