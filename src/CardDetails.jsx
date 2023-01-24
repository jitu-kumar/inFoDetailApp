import "./cardDetail.css";
const CardDetails = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="div">
          <div className="description">
            <h3>Description</h3>
            <p>
             {data?.company?.catchPhrase}
            </p>
          </div>
        </div>
        <div className="main">
        <div className="contact">
          <div className="contact-detail">
            <h3>Company Name</h3>
            <span>{data?.company?.name}</span>
          </div>
          <div className="contact-detail">
            <h3>Website</h3>
            <span>{data.website}</span>
          </div>
          <div className="contact-detail">
            <h3>Email</h3>
            <span>{data.email}</span>
          </div>
          <div className="contact-detail">
            <h3>Phones</h3>
            <span>{data.phone}</span>
          </div>
        </div>
        <div className="address">
          <div className="address-detail">
            <h3>Address</h3>
            <span>{data?.address?.street}</span>,   <span>{data?.address?.suite}</span>,   <span>{data?.address?.city}</span>,   <span>{data?.address?.zipcode}</span>
          </div>
         
          <div className="address-detail">
            <h3>City</h3>
            <span>{data?.address?.city}</span>
          </div>
          <div className="address-detail">
            <h3>State</h3>
            <span>Gujrat</span>
          </div>
          <div className="address-detail">
            <h3>Country</h3>
            <span>India</span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default CardDetails;
