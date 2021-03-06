import React from 'react';

import './SocialLink.scss';

export const socialClasses = {
    github: 'icon-github-circled',
    linkedin: 'icon-linkedin-squared'
};

function SocialLink({ url,type }) {
    return (
        <div className="social-link">
            <a href={url}>
                <span className={socialClasses[type]}></span>
            </a>
        </div>
    );
}

export default SocialLink;