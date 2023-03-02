import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {title, academicLevel, description} = testiMonialDetail;
    return (
        <div class="item">
            {/* <h3 className='pb-2'>Writing Sample</h3> */}
            <div class="shadow-effect">
                <p className='fw-bold'>Title</p>
                <p className=''>{title}</p>
                <hr />
                <p className='fw-bold'>{academicLevel}</p>
                <hr />
                <p className='fw-bold'>Description</p>
                <p className=''>{description}</p>
                <small className='text-muted text-decoration-underline'>click to view</small>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;