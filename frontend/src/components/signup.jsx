import "./signup.css";
import Logo from "../assets/Logo.png";
import { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Signup() {


    const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    phone: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  
  // All countries
  // length 252
  const countries = [
    { name: "Afghanistan", code: "AF", phone: 93 },
    { name: "Åland Islands", code: "AX", phone: 358 },
    { name: "Albania", code: "AL", phone: 355 },
    { name: "Algeria", code: "DZ", phone: 213 },
    { name: "American Samoa", code: "AS", phone: 1684 },
    { name: "Andorra", code: "AD", phone: 376 },
    { name: "Angola", code: "AO", phone: 244 },
    { name: "Anguilla", code: "AI", phone: 1264 },
    { name: "Antarctica", code: "AQ", phone: 672 },
    { name: "Antigua & Barbuda", code: "AG", phone: 1268 },
    { name: "Argentina", code: "AR", phone: 54 },
    { name: "Armenia", code: "AM", phone: 374 },
    { name: "Aruba", code: "AW", phone: 297 },
    { name: "Australia", code: "AU", phone: 61 },
    { name: "Austria", code: "AT", phone: 43 },
    { name: "Azerbaijan", code: "AZ", phone: 994 },
    { name: "Bahamas", code: "BS", phone: 1242 },
    { name: "Bahrain", code: "BH", phone: 973 },
    { name: "Bangladesh", code: "BD", phone: 880 },
    { name: "Barbados", code: "BB", phone: 1246 },
    { name: "Belarus", code: "BY", phone: 375 },
    { name: "Belgium", code: "BE", phone: 32 },
    { name: "Belize", code: "BZ", phone: 501 },
    { name: "Benin", code: "BJ", phone: 229 },
    { name: "Bermuda", code: "BM", phone: 1441 },
    { name: "Bhutan", code: "BT", phone: 975 },
    { name: "Bolivia", code: "BO", phone: 591 },
    { name: "Caribbean Netherlands", code: "BQ", phone: 599 },
    { name: "Bosnia & Herzegovina", code: "BA", phone: 387 },
    { name: "Botswana", code: "BW", phone: 267 },
    { name: "Bouvet Island", code: "BV", phone: 55 },
    { name: "Brazil", code: "BR", phone: 55 },
    { name: "British Indian Ocean Territory", code: "IO", phone: 246 },
    { name: "Brunei", code: "BN", phone: 673 },
    { name: "Bulgaria", code: "BG", phone: 359 },
    { name: "Burkina Faso", code: "BF", phone: 226 },
    { name: "Burundi", code: "BI", phone: 257 },
    { name: "Cambodia", code: "KH", phone: 855 },
    { name: "Cameroon", code: "CM", phone: 237 },
    { name: "Canada", code: "CA", phone: 1 },
    { name: "Cape Verde", code: "CV", phone: 238 },
    { name: "Cayman Islands", code: "KY", phone: 1345 },
    { name: "Central African Republic", code: "CF", phone: 236 },
    { name: "Chad", code: "TD", phone: 235 },
    { name: "Chile", code: "CL", phone: 56 },
    { name: "China", code: "CN", phone: 86 },
    { name: "Christmas Island", code: "CX", phone: 61 },
    { name: "Cocos (Keeling) Islands", code: "CC", phone: 672 },
    { name: "Colombia", code: "CO", phone: 57 },
    { name: "Comoros", code: "KM", phone: 269 },
    { name: "Congo - Brazzaville", code: "CG", phone: 242 },
    { name: "Congo - Kinshasa", code: "CD", phone: 242 },
    { name: "Cook Islands", code: "CK", phone: 682 },
    { name: "Costa Rica", code: "CR", phone: 506 },
    { name: "Côte d’Ivoire", code: "CI", phone: 225 },
    { name: "Croatia", code: "HR", phone: 385 },
    { name: "Cuba", code: "CU", phone: 53 },
    { name: "Curaçao", code: "CW", phone: 599 },
    { name: "Cyprus", code: "CY", phone: 357 },
    { name: "Czechia", code: "CZ", phone: 420 },
    { name: "Denmark", code: "DK", phone: 45 },
    { name: "Djibouti", code: "DJ", phone: 253 },
    { name: "Dominica", code: "DM", phone: 1767 },
    { name: "Dominican Republic", code: "DO", phone: 1809 },
    { name: "Ecuador", code: "EC", phone: 593 },
    { name: "Egypt", code: "EG", phone: 20 },
    { name: "El Salvador", code: "SV", phone: 503 },
    { name: "Equatorial Guinea", code: "GQ", phone: 240 },
    { name: "Eritrea", code: "ER", phone: 291 },
    { name: "Estonia", code: "EE", phone: 372 },
    { name: "Ethiopia", code: "ET", phone: 251 },
    { name: "Falkland Islands (Islas Malvinas)", code: "FK", phone: 500 },
    { name: "Faroe Islands", code: "FO", phone: 298 },
    { name: "Fiji", code: "FJ", phone: 679 },
    { name: "Finland", code: "FI", phone: 358 },
    { name: "France", code: "FR", phone: 33 },
    { name: "French Guiana", code: "GF", phone: 594 },
    { name: "French Polynesia", code: "PF", phone: 689 },
    { name: "French Southern Territories", code: "TF", phone: 262 },
    { name: "Gabon", code: "GA", phone: 241 },
    { name: "Gambia", code: "GM", phone: 220 },
    { name: "Georgia", code: "GE", phone: 995 },
    { name: "Germany", code: "DE", phone: 49 },
    { name: "Ghana", code: "GH", phone: 233 },
    { name: "Gibraltar", code: "GI", phone: 350 },
    { name: "Greece", code: "GR", phone: 30 },
    { name: "Greenland", code: "GL", phone: 299 },
    { name: "Grenada", code: "GD", phone: 1473 },
    { name: "Guadeloupe", code: "GP", phone: 590 },
    { name: "Guam", code: "GU", phone: 1671 },
    { name: "Guatemala", code: "GT", phone: 502 },
    { name: "Guernsey", code: "GG", phone: 44 },
    { name: "Guinea", code: "GN", phone: 224 },
    { name: "Guinea-Bissau", code: "GW", phone: 245 },
    { name: "Guyana", code: "GY", phone: 592 },
    { name: "Haiti", code: "HT", phone: 509 },
    { name: "Heard & McDonald Islands", code: "HM", phone: 0 },
    { name: "Vatican City", code: "VA", phone: 39 },
    { name: "Honduras", code: "HN", phone: 504 },
    { name: "Hong Kong", code: "HK", phone: 852 },
    { name: "Hungary", code: "HU", phone: 36 },
    { name: "Iceland", code: "IS", phone: 354 },
    { name: "India", code: "IN", phone: 91 },
    { name: "Indonesia", code: "ID", phone: 62 },
    { name: "Iran", code: "IR", phone: 98 },
    { name: "Iraq", code: "IQ", phone: 964 },
    { name: "Ireland", code: "IE", phone: 353 },
    { name: "Isle of Man", code: "IM", phone: 44 },
    { name: "Israel", code: "IL", phone: 972 },
    { name: "Italy", code: "IT", phone: 39 },
    { name: "Jamaica", code: "JM", phone: 1876 },
    { name: "Japan", code: "JP", phone: 81 },
    { name: "Jersey", code: "JE", phone: 44 },
    { name: "Jordan", code: "JO", phone: 962 },
    { name: "Kazakhstan", code: "KZ", phone: 7 },
    { name: "Kenya", code: "KE", phone: 254 },
    { name: "Kiribati", code: "KI", phone: 686 },
    { name: "North Korea", code: "KP", phone: 850 },
    { name: "South Korea", code: "KR", phone: 82 },
    { name: "Kosovo", code: "XK", phone: 381 },
    { name: "Kuwait", code: "KW", phone: 965 },
    { name: "Kyrgyzstan", code: "KG", phone: 996 },
    { name: "Laos", code: "LA", phone: 856 },
    { name: "Latvia", code: "LV", phone: 371 },
    { name: "Lebanon", code: "LB", phone: 961 },
    { name: "Lesotho", code: "LS", phone: 266 },
    { name: "Liberia", code: "LR", phone: 231 },
    { name: "Libya", code: "LY", phone: 218 },
    { name: "Liechtenstein", code: "LI", phone: 423 },
    { name: "Lithuania", code: "LT", phone: 370 },
    { name: "Luxembourg", code: "LU", phone: 352 },
    { name: "Macao", code: "MO", phone: 853 },
    { name: "North Macedonia", code: "MK", phone: 389 },
    { name: "Madagascar", code: "MG", phone: 261 },
    { name: "Malawi", code: "MW", phone: 265 },
    { name: "Malaysia", code: "MY", phone: 60 },
    { name: "Maldives", code: "MV", phone: 960 },
    { name: "Mali", code: "ML", phone: 223 },
    { name: "Malta", code: "MT", phone: 356 },
    { name: "Marshall Islands", code: "MH", phone: 692 },
    { name: "Martinique", code: "MQ", phone: 596 },
    { name: "Mauritania", code: "MR", phone: 222 },
    { name: "Mauritius", code: "MU", phone: 230 },
    { name: "Mayotte", code: "YT", phone: 262 },
    { name: "Mexico", code: "MX", phone: 52 },
    { name: "Micronesia", code: "FM", phone: 691 },
    { name: "Moldova", code: "MD", phone: 373 },
    { name: "Monaco", code: "MC", phone: 377 },
    { name: "Mongolia", code: "MN", phone: 976 },
    { name: "Montenegro", code: "ME", phone: 382 },
    { name: "Montserrat", code: "MS", phone: 1664 },
    { name: "Morocco", code: "MA", phone: 212 },
    { name: "Mozambique", code: "MZ", phone: 258 },
    { name: "Myanmar (Burma)", code: "MM", phone: 95 },
    { name: "Namibia", code: "NA", phone: 264 },
    { name: "Nauru", code: "NR", phone: 674 },
    { name: "Nepal", code: "NP", phone: 977 },
    { name: "Netherlands", code: "NL", phone: 31 },
    { name: "Curaçao", code: "AN", phone: 599 },
    { name: "New Caledonia", code: "NC", phone: 687 },
    { name: "New Zealand", code: "NZ", phone: 64 },
    { name: "Nicaragua", code: "NI", phone: 505 },
    { name: "Niger", code: "NE", phone: 227 },
    { name: "Nigeria", code: "NG", phone: 234 },
    { name: "Niue", code: "NU", phone: 683 },
    { name: "Norfolk Island", code: "NF", phone: 672 },
    { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
    { name: "Norway", code: "NO", phone: 47 },
    { name: "Oman", code: "OM", phone: 968 },
    { name: "Pakistan", code: "PK", phone: 92 },
    { name: "Palau", code: "PW", phone: 680 },
    { name: "Palestine", code: "PS", phone: 970 },
    { name: "Panama", code: "PA", phone: 507 },
    { name: "Papua New Guinea", code: "PG", phone: 675 },
    { name: "Paraguay", code: "PY", phone: 595 },
    { name: "Peru", code: "PE", phone: 51 },
    { name: "Philippines", code: "PH", phone: 63 },
    { name: "Pitcairn Islands", code: "PN", phone: 64 },
    { name: "Poland", code: "PL", phone: 48 },
    { name: "Portugal", code: "PT", phone: 351 },
    { name: "Puerto Rico", code: "PR", phone: 1787 },
    { name: "Qatar", code: "QA", phone: 974 },
    { name: "Réunion", code: "RE", phone: 262 },
    { name: "Romania", code: "RO", phone: 40 },
    { name: "Russia", code: "RU", phone: 70 },
    { name: "Rwanda", code: "RW", phone: 250 },
    { name: "St. Barthélemy", code: "BL", phone: 590 },
    { name: "St. Helena", code: "SH", phone: 290 },
    { name: "St. Kitts & Nevis", code: "KN", phone: 1869 },
    { name: "St. Lucia", code: "LC", phone: 1758 },
    { name: "St. Martin", code: "MF", phone: 590 },
    { name: "St. Pierre & Miquelon", code: "PM", phone: 508 },
    { name: "St. Vincent & Grenadines", code: "VC", phone: 1784 },
    { name: "Samoa", code: "WS", phone: 684 },
    { name: "San Marino", code: "SM", phone: 378 },
    { name: "São Tomé & Príncipe", code: "ST", phone: 239 },
    { name: "Saudi Arabia", code: "SA", phone: 966 },
    { name: "Senegal", code: "SN", phone: 221 },
    { name: "Serbia", code: "RS", phone: 381 },
    { name: "Serbia", code: "CS", phone: 381 },
    { name: "Seychelles", code: "SC", phone: 248 },
    { name: "Sierra Leone", code: "SL", phone: 232 },
    { name: "Singapore", code: "SG", phone: 65 },
    { name: "Sint Maarten", code: "SX", phone: 1 },
    { name: "Slovakia", code: "SK", phone: 421 },
    { name: "Slovenia", code: "SI", phone: 386 },
    { name: "Solomon Islands", code: "SB", phone: 677 },
    { name: "Somalia", code: "SO", phone: 252 },
    { name: "South Africa", code: "ZA", phone: 27 },
    { name: "South Georgia & South Sandwich Islands", code: "GS", phone: 500 },
    { name: "South Sudan", code: "SS", phone: 211 },
    { name: "Spain", code: "ES", phone: 34 },
    { name: "Sri Lanka", code: "LK", phone: 94 },
    { name: "Sudan", code: "SD", phone: 249 },
    { name: "Suriname", code: "SR", phone: 597 },
    { name: "Svalbard & Jan Mayen", code: "SJ", phone: 47 },
    { name: "Eswatini", code: "SZ", phone: 268 },
    { name: "Sweden", code: "SE", phone: 46 },
    { name: "Switzerland", code: "CH", phone: 41 },
    { name: "Syria", code: "SY", phone: 963 },
    { name: "Taiwan", code: "TW", phone: 886 },
    { name: "Tajikistan", code: "TJ", phone: 992 },
    { name: "Tanzania", code: "TZ", phone: 255 },
    { name: "Thailand", code: "TH", phone: 66 },
    { name: "Timor-Leste", code: "TL", phone: 670 },
    { name: "Togo", code: "TG", phone: 228 },
    { name: "Tokelau", code: "TK", phone: 690 },
    { name: "Tonga", code: "TO", phone: 676 },
    { name: "Trinidad & Tobago", code: "TT", phone: 1868 },
    { name: "Tunisia", code: "TN", phone: 216 },
    { name: "Turkey", code: "TR", phone: 90 },
    { name: "Turkmenistan", code: "TM", phone: 7370 },
    { name: "Turks & Caicos Islands", code: "TC", phone: 1649 },
    { name: "Tuvalu", code: "TV", phone: 688 },
    { name: "Uganda", code: "UG", phone: 256 },
    { name: "Ukraine", code: "UA", phone: 380 },
    { name: "United Arab Emirates", code: "AE", phone: 971 },
    { name: "United Kingdom", code: "GB", phone: 44 },
    { name: "United States", code: "US", phone: 1 },
    { name: "U.S. Outlying Islands", code: "UM", phone: 1 },
    { name: "Uruguay", code: "UY", phone: 598 },
    { name: "Uzbekistan", code: "UZ", phone: 998 },
    { name: "Vanuatu", code: "VU", phone: 678 },
    { name: "Venezuela", code: "VE", phone: 58 },
    { name: "Vietnam", code: "VN", phone: 84 },
    { name: "British Virgin Islands", code: "VG", phone: 1284 },
    { name: "U.S. Virgin Islands", code: "VI", phone: 1340 },
    { name: "Wallis & Futuna", code: "WF", phone: 681 },
    { name: "Western Sahara", code: "EH", phone: 212 },
    { name: "Yemen", code: "YE", phone: 967 },
    { name: "Zambia", code: "ZM", phone: 260 },
    { name: "Zimbabwe", code: "ZW", phone: 263 },
  ];

  const onChange = (e) => {
    if(e.target.name == "phone" )
    {
        const tempPhoneRegex = /^\+\d{1,4}[\d\s]+$/;
        if(!tempPhoneRegex.test(e.target.value))
        {
            return
        }
    }

    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    if (e.target.name == "country") {
      const country = countries.find((c) => c.code == e.target.value);
      setFormData((prev) => {
        return { ...prev, phone: `+${country.phone} ` };
      });
    }
    console.log(formData);
  };


  const HandleSubmit = (e)=>{
    e.preventDefault();
    

    const phoneRegex = /^\+\d{1,4}(?: ?\d{6,14})\d$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const fullNameRegex = /^[A-Za-z][A-Za-z\s]*[A-Za-z]$/;

    console.log("submit pressed");
    
    if(!fullNameRegex.test(formData.name))
    {
        setToastMessage("Name should not contain any special character")
        setShow(true);
        return
    }
    if(!emailRegex.test(formData.email))
    {
        setToastMessage("Email is not valid")
        setShow(true);
        return
    }
    if(!phoneRegex.test(formData.phone))
    {
        setToastMessage("Whatsapp number is not valid")
        setShow(true);
        return
    }
   
    if(!strongPasswordRegex.test(formData.password))
    {
        setToastMessage("Enter strong password")
        setShow(true);
        return
    }
   
}

  return (
    <>
    <ToastContainer className="p-3" position="top-end">
        <Toast show={show}  onClose={() => {setShow(false); setToastMessage("")}} delay={3000} autohide>
          <Toast.Header>
            <span style={{marginRight:"5px",width:"15px", height:"15px", borderRadius:"7.5px", backgroundColor:"red"}}></span>
            <strong className="me-auto">Invalid Input!</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
        </ToastContainer>
      <div className="container-fluid">
        <div className="col-lg-5 form-items d-flex align-items-center justify-content-center mt-3">
          <img src={Logo} style={{ width: "50%" }} alt="turnitinPro logo"></img>

          <span className="mt-2">Create a new account</span>
          <form
            action=""
            onSubmit={HandleSubmit}
            className="form mt-4 d-flex align-items-center justify-content-center"
          >
            <div class="form-floating mb-2">
              <input
                onChange={(e) => onChange(e)}
                name="name"
                value={formData.name}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Full Name"
                autoComplete="off"
              />
              <label for="floatingInput">Full Name</label>
            </div>

            <div class="form-floating mb-2">
              {/* <input type="text" className="form-control" id="floatingInput" autoComplete='off'/> */}
              <select
                onChange={(e) => onChange(e)}
                name="country"
                value={formData.country}
                className="form-select mb-2"
                id="countryDropDown"
              >
                <option value="" selected>
                  Select a country
                </option>
                {countries.map((obj) => (
                  <option value={obj.code}>{obj.name}</option>
                ))}
              </select>
              <label for="floatingInput">Country</label>
            </div>

            <div class="form-floating mb-2">
              <input
                onChange={(e) => onChange(e)}
                name="email"
                value={formData.email}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Email address"
                autoComplete="off"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-2">
              <input
                onChange={(e) => onChange(e)}
                type="text"
                name="phone"
                value={formData.phone}
                className="form-control"
                id="floatingInput"
                placeholder="Email address"
                autoComplete="off"
              />
              <label for="floatingInput">Phone Number</label>
            </div>
            <div class="form-floating">
              <input
                onChange={(e) => onChange(e)}
                type="password"
                name="password"
                value={formData.password}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                autoComplete="off"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="form-floating">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>

            <br />
            <br />

            <span className="new-account">
              Already have an account?&nbsp;
              <a href="#!" className="forget-password">
                Sign In
              </a>
            </span>
          </form>
        </div>
      </div>



    </>
  );
}

export default Signup;
