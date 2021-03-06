import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicySections({ header, subheader, notes }) {
	return (
		<div className="privacy_sections">
			<div className="privacy_section_header">
				<h2>{header}</h2>
				<div className="privacy_section_subheader">
					<h5>{subheader}</h5>
				</div>
			</div>
			<div className="privacy_section_notes">
				<p>{notes}</p>
			</div>
			<hr className="horizontal-rule" />
		</div>
	);
}

export default PrivacyPolicySections;
