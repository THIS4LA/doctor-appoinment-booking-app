import DoctorCard from "./DoctorCard";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../Loader/Loading";
import Error from "../Error/Error";

const DoctorList = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  // Function to get top 3 doctors based on the number of reviews
  const getTopDoctors = (doctors) => {
    return doctors
      .sort((a, b) => b.reviews.length - a.reviews.length)
      .slice(0, 3);
  };

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && Array.isArray(doctors) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {getTopDoctors(doctors).map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;
