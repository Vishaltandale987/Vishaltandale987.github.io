import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
// import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className="ab">
			{/* <h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1> */}
			{/* <div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
				Utility Engineer  | Mechanical Engineering{' '}
					<a href=''>  Govindjee Dairy Pvt. Ltd, Jaipur</a>
				</div>
				<div className={styles.date}>January 2020 - October 2020</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
							My role was to  Monitoring of boiler operation & Performing regular maintenance of boiler. 
                           </li>
						<li>
						Monitoring Ammonia Refrigeration system as well as cold chain unit. 
						</li>
						<li>
						Responding to breakdown ,malfunctions and analysis
							</li>
							<li>
							Etp operation and monitoring 

							</li>
					
					</ul>
				</fieldset>
			</div> */}

			<br/>

			{/* <div className={styles.container}>
				<div className={styles.position}>
				JR MECHANICAL | Mechanical Engineering{' '}
					<a href='/'>DS GROUP (DAIRY DIVISION) REENGUS </a>
				</div>
				<div className={styles.date}>August 2018 - December 2019</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
						Monitoring of utility operations 

							
						</li>
						<li>Carrying out of Predictive, Preventive maintenance & Breakdown maintenance, planning & execution. 
							
						</li>
						<li>
						Work as team member of the shift maintenance group & involve in the problem solving activities in plant.

						</li>
					
					</ul>
				</fieldset>
			</div> */}

		</div>
	);
};

export default Experiences;
