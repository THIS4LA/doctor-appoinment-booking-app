import { useState } from "react";

const Profile = () => {

    const [formData , setFormData] = useState({
        name: ''
    });

    const handleInputChange = e=> {};

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">Profile Information</h2>

        <form>
            <div className="mb-5">
                <p className="form__label">Name</p>
                <input type="text" name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="form__input"
                />
            </div>
        </form>

    </div>
  )
}

export default Profile
