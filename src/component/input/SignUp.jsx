import Input from "./Input";
import '../../screens/css/login.css'
// import Outline from "./Outline";
import PhoneInputField from "./PhoneInput";

function SignUp() {
  const handleSignUp = e => {
    e.preventDefault();
  };
  return (
    <div >
      {/* <Outline /> */}
      <div className="even-column create-account formboxsignup">
        <h1>Create your Serch Account</h1>
        <p className="subtitle">Your personal details</p>

        <form onSubmit={handleSignUp}>
          <Input label="First Name" placeholder="John" id="firstName" />
          <Input label="Last Name" placeholder="Doe" id="lastName" />
          <Input label="Email Address" placeholder="johndoe@gmail.com" id="email" type="email" />

          
          <PhoneInputField />
          
         
          <Input label="Gender" gender placeholder="Select your gender" id="gender" />
          <Input
            label="Create password"
            password
            type="password"
            placeholder="Create your strong password"
            id="password"
          />
          <Input
            label="Confirm Password"
            password
            type="password"
            placeholder="Confirm your strong password"
            id="confirmPassword"
          />

          <div className="continue">
          <button type="submit">Finish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
