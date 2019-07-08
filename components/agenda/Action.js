
const Action = ({text, role, speeches}) => {
    let displayRole = null;
    if (Array.isArray(role)) {
        displayRole = (<span> - {role.map((r, i) => (
            <span key={i} className="action-role">
                {`${r.firstName} ${r.lastName}${i < role.length - 1 ? ',' : ''} `}
            </span>
        ))}</span>)
    } else if (typeof role === 'object') {
        displayRole = <span> - <span className="action-role">
            {`${role.firstName} ${role.lastName}`}
        </span></span>;
    }

    return (<div className="action">
        {speeches && speeches.map((speech, i) => <Speech key={i} speech={speech} />)}
        {text && <span className="action-text">{text}</span>}
        {displayRole}
    </div>)
}

const Speech = ({speech}) => {
    const {
        pathway, level, project, minTime, maxTime, title,
        speaker: {
            firstName,
            lastName,
        },
    } = speech;

    return (
        <div className="speech">
            <span className="speaker">{`${firstName} ${lastName}: `}</span> 
            <span>{`${pathway} Pathway, Level ${level}. `}</span>
            <span>{`${project} Project, ${minTime} - ${maxTime} minutes. `}</span>
            <span>{`"${title}"`}</span>
        </div>
    )
}

export default Action
