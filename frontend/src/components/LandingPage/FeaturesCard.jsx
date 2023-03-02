import './landingFinal.css'


const FeaturesCard = (props) => {
    return(
        <>
            <div className="col-lg-5 features-card">
                <h2 className='heading-3 px-4 pt-4 fw-bold text-light'>
                    {props.head}
                </h2>
                <p className='px-4 py-2 text-light'>
                    {props.text}
                </p>
            </div>
        </>
    );
}
export default FeaturesCard;