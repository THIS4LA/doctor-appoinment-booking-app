import { useState } from "react";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import DoctorFeedBack from "./DoctorFeedBack";
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");

  const {id} = useParams()

  const { data: doctor, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`);

  const {
    name,
    qualifications,
    experience,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
  } = doctor || {} ;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">

      {loading && <Loading />}
      {error && <Error />}

        {!loading && !error && <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="p-3 lg:p-5">
                <img src={photo} alt="doctorImg" className="w-[300px] h-[300px] object-cover rounded" />
              </figure>

              <div>
                <span
                  className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px]
                leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded"
                >
                  {specialization || "N/A" }
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {name}
                </h3>
                <div className="flex items-center gap-[6px] ">
                  <span
                    className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                    lg:leading-7 font-semibold text-headingColor"
                  >
                    <img src={starIcon} alt="starIcon" />
                    {averageRating|| "N/A"}
                  </span>
                  <span
                    className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                    lg:leading-7 text-[400] font-semibold text-textColor"
                  >
                    ({totalRating|| "N/A"})
                  </span>
                </div>
                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  {bio|| "N/A"}
                </p>
              </div>
            </div>
            {/* inpage tabs */}
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                FeedBack
              </button>
            </div>
            {/* inpage tabs */}
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout name={name} about={about} qualifications={qualifications} experiences={experience} />}
              {tab === "feedback" && <DoctorFeedBack reviews={reviews} totalRating={totalRating} />}
            </div>
          </div>
          <div>
            <SidePanel ticketPrice={ticketPrice} timeSlots={timeSlots} />
          </div>
        </div>}
      </div>
    </section>
  );
};

export default DoctorDetails;
