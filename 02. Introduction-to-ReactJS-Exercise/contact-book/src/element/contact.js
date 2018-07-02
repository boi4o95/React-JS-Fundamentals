import React from 'react'

function makeContact(data, id, clic) {
    return (
        <div className="contact"  key={id} data-id={id} onClick={() => clic(id)}>
            <span className="avatar small">&#9787;</span>
            <span className="title">{data.firstName} {data.lastName}</span>
        </div>
    )
}

export default makeContact