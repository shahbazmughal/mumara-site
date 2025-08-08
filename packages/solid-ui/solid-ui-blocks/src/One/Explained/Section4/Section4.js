import React from 'react'
import Iceberg from './images/Iceberg.svg';
import bg4 from './images/bg4.jpg';
import './section4.css';

export default function Section4() {
	return (
		<div className="one-section one-section-4" style={{backgroundImage: `url(${bg4})`}}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-4 align-self-center ">
						<img
							src={Iceberg} alt="pocket"
							className="img-fluid mx-auto d-block pocket"
						/>
					</div>
					<div className="col-md-8 align-self-center">
						<h1 className="text-white fw600">This Is Just the <span className="fw800 text-yellow">Tip</span> of the <span className="fw800 text-yellow">Iceberg</span></h1>
						<p className="fw400 text-white fs-20"> There are many more useful features out there to make your email campaign successful – leading to making your brand prosperous.</p>
					</div>
				</div>
			</div>
		</div>
	)
}