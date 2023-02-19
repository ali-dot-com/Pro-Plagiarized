import './landingFinal.css'


const FeaturesCard = (props) => {
    return(
        <>
            <div className="col-lg-5 features-card py-3">
                <h2 className='heading-3 px-4 pt-5 text-light'>
                    {props.head}
                </h2>
                <p className='px-4 pt-2 text-light'>
                    {props.text}
                </p>
            </div>
        </>
    );
}
export default FeaturesCard;